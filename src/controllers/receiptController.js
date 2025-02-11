const { receiptService } = require("../services");
const httpStatus = require("http-status");

const createReceipt = async (req, res) => {
  const receipt = await receiptService.createReceipt(req.body);

  res.status(httpStatus.status.CREATED).send(receipt);
};

const getPoints = async (req, res) => {
  const id = req?.params?.id;

  const { points, status } = await receiptService.getPointById(id);
  res.status(status).send(points);
};

module.exports = {
  createReceipt,
  getPoints,
};
