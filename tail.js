const tail = function(array) {
  let tailArray = array.slice(1);
    return (console.log(tailArray));
};

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } 
  if (actual !== expected) {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`)
    }
  }

// TEST CODE
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1); 