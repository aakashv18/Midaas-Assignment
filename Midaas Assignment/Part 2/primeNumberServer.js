// first move to part2 with cd Part2 command
// then install dependency with npm i command
// then node primeNumberServer to run this file
// after running this file
// send post req with postman to localhost:3000/generate_primes
// pass req body
// {
//   "start": start_num,
//   "end": end_num,
//   "strategy": strategy
// }

const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const {
  generatePrimesNaive,
  generatePrimesOptimized,
  generatePrimesSieve,
} = require("../primeLogic");
const { recordExecution, createDatabase } = require("./db");

app.use(bodyParser.json());

createDatabase();

function generatePrimes(start, end, strategy) {
  switch (strategy) {
    case "naive":
      return generatePrimesNaive(start, end);
    case "optimized":
      return generatePrimesOptimized(start, end);
    case "sieve":
      return generatePrimesSieve(start, end);
  }
}

// api
app.post("/generate_primes", (req, res) => {
  const start = parseInt(req.body.start);
  const end = parseInt(req.body.end);
  const strategy = req.body.strategy;

  // Check if start and end are numeric values
  if (isNaN(start) || isNaN(end)) {
    return res.status(400).json({
      message: "start and end must be numeric values",
    });
  }

  // end and start must not be negative
  if (end < 0 || start < 0) {
    return res.status(400).json({
      message: "only positive values are allowed",
    });
  }

  // end must not be less than start
  if (end < start) {
    return res.status(400).json({
      message: "end number must be greater than or equal to start number",
    });
  }

  // only predefined value allowed check
  if (strategy != "optimized" && strategy != "naive" && strategy != "sieve") {
    return res.status(400).json({
      message:
        "Invalid strategy. Please choose from 'naive', 'optimized', or 'sieve'.",
    });
  }

  const startTime = process.hrtime();
  const primes = generatePrimes(start, end, strategy);
  const endTime = process.hrtime(startTime);

  // time elapses in milliseconds
  // process.hrtime returns [second,nanoseconds] so here first we are converting second to nanosecond after that we are converting it to millisecond.
  const timeElapsed = (endTime[0] * 1e9 + endTime[1]) / 1e6;
  const numPrimes = primes.length;

  recordExecution(start, end, strategy, numPrimes, timeElapsed);

  return res.json({ start, end, strategy, numPrimes, primes, timeElapsed });
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
