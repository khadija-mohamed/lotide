const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } 
  if (actual !== expected) {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`)
  }
};

// TEST CODE
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);

const countLetters = function(string) {
  const results = {}
  for (const letter of string) {
    if (letter !== " ") {
      if (results[letter])
      results[letter] += 1;
    } 
  }
  return results
};
 
