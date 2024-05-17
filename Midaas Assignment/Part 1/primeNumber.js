// use command node primeNumber to run this file

const readline = require("readline");
const {
  generatePrimesNaive,
  generatePrimesOptimized,
  generatePrimesSieve,
} = require("../primeLogic");

// to take input from console
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function question(query) {
  return new Promise((resolve, reject) => {
    rl.question(query, (answer) => {
      resolve(answer);
    });
  });
}

async function main() {
  console.log("=====================Prime Generator=====================");
  let start_number, end_number, choice;

  start_number = await question("Enter Start Number: ");
  end_number = await question("Enter End Number: ");
  console.log("select strategy:");
  console.log("1. Naive");
  console.log("2. Optimized");
  console.log("3. Sieve");
  choice = await question("Enter Your Choice: ");

  switch (choice) {
    case "1":
      generatePrimesNaive(Number(start_number), Number(end_number)).forEach(
        (prime_number) => console.log(prime_number)
      );
      break;
    case "2":
      generatePrimesOptimized(Number(start_number), Number(end_number)).forEach(
        (prime_number) => console.log(prime_number)
      );
      break;
    case "3":
      generatePrimesSieve(Number(start_number), Number(end_number)).forEach(
        (prime_number) => console.log(prime_number)
      );
      break;
    default:
      console.log("wrong choice :(");
  }
  rl.close();
  console.log("Thank you for using prime generator :)");
}

main();
