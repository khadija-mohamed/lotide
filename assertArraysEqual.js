const eqArrays = function(array1, array2) {
  if (array1.length !== array2.length) {
    for (let i = 0; i < array1.length; i++) {
      if (array1[i] !== array2[i]) {
        return false;
      }
    }
  } else {
  return false;
}
  return true;
} 

const assertArrayEqual = function(actual, expected) {
  if (eqArrays (actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);

  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`)
  }
}; 


