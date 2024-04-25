# Cloud Calculator

This is a simple Node.js application that provides a basic HTTP-based calculator. It listens for HTTP requests and performs arithmetic operations based on the request parameters.

Part of [CAT Reloaded Tasks](https://github.com/AmrBedir/CATReloaded-Task).

## Getting Started

To get started with this project, ensure you have Node.js installed on your machine.

### Installation

1. Clone the repository to your local machine:

   `git clone https://github.com/AmrBedir/cloud-calculator-nodejs.git`
   
2. Navigate to the project directory:
   `cd cloud-calculator-nodejs`

3. Install any dependencies (if any):
   `npm install`

### Running the Calculator

To run the calculator, use the following command:
`npm start`

The application will start an HTTP server on port 3000 by default. You can then access the calculator operations via your web browser or a command-line tool like curl.

### Using the Calculator

The calculator supports four basic operations: addition, subtraction, multiplication, and division. The request URL format is as follows:
`/[operation]?a=[num1]&b=[num2]`

Here are some examples of how to use the calculator:

1. Addition: Add two numbers:
   `curl "http://localhost:3000/add?a=3&b=6"`

2. Subtraction: Subtract one number from another:
   `curl "http://localhost:3000/subtract?a=9&b=3"`

3. Multiplication: Multiply two numbers:
   `curl "http://localhost:3000/multiply?a=3&b=6"`

4. Division: Divide one number by another:
   `curl "http://localhost:3000/divide?a=9&b=3"`

The application includes error handling for invalid operations and division by zero. If the operation is invalid, the server responds with a 400 status code. If you attempt to divide by zero, you'll get an error message.















