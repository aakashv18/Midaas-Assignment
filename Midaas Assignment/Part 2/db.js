const sqlite3 = require("sqlite3").verbose();
const db = new sqlite3.Database(":memory:");

// function to create db
function createDatabase() {
  db.run(`CREATE TABLE primes (
        timestamp TEXT,
        start INTEGER,
        end INTEGER,
        strategy TEXT,
        num_primes INTEGER,
        time_elapsed REAL
    )`);
}

// function to make entry in db
function recordExecution(start, end, strategy, numPrimes, timeElapsed) {
  const timestamp = new Date().toLocaleString();
  db.run(`INSERT INTO primes VALUES (?, ?, ?, ?, ?, ?)`, [
    timestamp,
    start,
    end,
    strategy,
    numPrimes,
    timeElapsed,
  ]);
}

module.exports = { recordExecution, createDatabase };
