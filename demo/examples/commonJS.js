/**
 * @class
 * A sample class to demonstrate various JavaScript constructs.
 */
class Example {
  constructor() {
    this.greeting = "Hello, world!";
  }

  /**
   * Returns a greeting message.
   * @param {string} name - The name to greet.
   * @returns {string} The greeting message.
   */
  getGreeting(name) {
    return `Hello, ${name}!`;
  }

  /**
   * Adds two numbers.
   * @param {number} a - The first number.
   * @param {number} b - The second number.
   * @returns {number} The sum of the two numbers.
   */
  add(a, b) {
    return a + b;
  }

  /**
   * Divides two numbers, with error handling for division by zero.
   * @param {number} a - The numerator.
   * @param {number} b - The denominator.
   * @returns {number} The result of the division.
   * @throws Will throw an error if the denominator is zero.
   */
  safeDivide(a, b) {
    if (b === 0) {
      throw new Error("Division by zero is not allowed.");
    }
    return a / b;
  }

  /**
   * Simulates an asynchronous operation.
   * @param {function} callback - The callback function to call with the result.
   */
  fetchData(callback) {
    setTimeout(() => {
      callback(null, "Data fetched successfully");
    }, 1000);
  }

  /**
   * Example usage of the class methods.
   */
  main() {
    try {
      console.log(this.greeting);

      const name = "Alice";
      console.log(this.getGreeting(name));

      const sum = this.add(5, 3);
      console.log(`Sum: ${sum}`);

      const result = this.safeDivide(10, 2);
      console.log(`Division result: ${result}`);

      this.fetchData((err, data) => {
        if (err) {
          console.error("Error fetching data:", err);
          return;
        }
        console.log(data);
      });
    } catch (error) {
      console.error("An error occurred:", error);
    }
  }
}

// Create an instance of the class and call the main function
const example = new Example();
example.main();
