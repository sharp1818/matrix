const rotate = (matrix) => {
  const numCols = matrix[0].length;

  const rotatedMatrix = Array.from({ length: numCols }, (_, i) =>
    matrix.map((row) => row[numCols - 1 - i])
  );

  return rotatedMatrix;
};

module.exports = {
  rotate,
};
