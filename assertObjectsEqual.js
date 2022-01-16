// FUNCTION IMPLEMENTATION
const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect; // <= add this line
  if (assertObjectsEqual(actual, expected) === true) {
    console.log(`✅✅✅ Assertion Passed: ${inspect(actual)}` + `=== ${inspect(actual)}`);
  }
  if (assertObjectsEqual(actual, expected) === false) {
    console.log(`🛑🛑🛑 Assertion Failed: ${inspect(actual)}` + `!== ${inspect(actual)}`);
  }
};

//expected more detailed output
// ✅✅✅ Assertion Passed: { a: '1', b: 2 } === { b: 2, a: '1' }

