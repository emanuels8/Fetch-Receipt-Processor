const { receiptService } = require("../services");
const { status } = require("http-status");

const createReceipt = async (req, res) => {
  const receipt = await receiptService.createReceipt(req.body);

  res.status(status.CREATED).send(receipt);
};

const getPoints = async (req, res) => {
  const id = req?.params?.id;

  const points = await receiptService.getPointById(id);
  res.status(status.OK).send(points);
};

module.exports = {
  createReceipt,
  getPoints,
};
