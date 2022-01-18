const middle = function(array) {
  let arrayOutput = [];
  if (array.length <= 2) {
    return arrayOutput;

  } else if (array.length % 2 === 0) {
    arrayOutput.push(array[(array.length / 2) - 1]);
    arrayOutput.push(array[(array.length / 2)]); 

  } else (array.length % 2 === 1); {
    arrayOutput.push(array[(array.length - 1) / 2]);
  
  } return arrayOutput
};

module.exports = middle;
