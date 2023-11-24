const matrixService = require("../services/matrixService");

const process = (req, res) => {

  const { matrix } = req.body;

  if (!matrix || !Array.isArray(matrix) || matrix.length === 0 || !matrix.every(row => Array.isArray(row))) {
    return res.status(400).send({ error: "Invalid matrix." });
  }

  const result = matrixService.rotate(matrix);

  res.send({ result });
};

module.exports = {
  process,
};
