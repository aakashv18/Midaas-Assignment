const assert = require("assert");
const {
  generatePrimesNaive,
  generatePrimesOptimized,
  generatePrimesSieve,
} = require("../primeLogic");

describe("Prime Number Generator", () => {
  describe("generatePrimesNaive()", () => {
    it("should return an empty array when start number is greater than end number", () => {
      assert.deepStrictEqual(generatePrimesNaive(10, 1), []);
    });

    it("should return a same number when start number and end number are the same and it is a prime number", () => {
      assert.deepStrictEqual(generatePrimesNaive(5, 5), [5]);
    });

    it("should return an array with prime numbers between start and end number", () => {
      assert.deepStrictEqual(generatePrimesNaive(1, 10), [2, 3, 5, 7]);
    });
  });

  describe("generatePrimesOptimized()", () => {
    it("should return an empty array when start number is greater than end number", () => {
      assert.deepStrictEqual(generatePrimesOptimized(10, 1), []);
    });

    it("should return an empty array when start number and end number are the same and it is not a prime number", () => {
      assert.deepStrictEqual(generatePrimesOptimized(10, 10), []);
    });

    it("should return an array with prime numbers between start and end number", () => {
      assert.deepStrictEqual(generatePrimesOptimized(1, 10), [2, 3, 5, 7]);
    });
  });

  describe("generatePrimesSieve()", () => {
    it("should return an empty array when start number is greater than end number", () => {
      assert.deepStrictEqual(generatePrimesSieve(10, 1), []);
    });

    it("should return an empty array when start number and end number are the same and it is not a prime number", () => {
      assert.deepStrictEqual(generatePrimesSieve(10, 10), []);
    });

    it("should return an array with prime numbers between start and end number", () => {
      assert.deepStrictEqual(generatePrimesSieve(1, 10), [2, 3, 5, 7]);
    });
  });
});
