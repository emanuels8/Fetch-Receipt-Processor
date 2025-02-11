const helper = require("../helpers/helper");
const receiptHelper = require("../helpers/receiptHelper");
const { status } = require("http-status");

let receipts = require("../data/receiptProcessorData.json");
const filename = "receiptProcessorData.json";

/**
 * Create a receipt
 * @param {Object} receiptBody
 * @returns {Promise<Object>}
 */
const createReceipt = async (receiptBody) => {
  return new Promise((resolve, reject) => {
    const id = { id: helper.getNewId(receipts) };
    const date = {
      createdAt: helper.newDate(),
      updatedAt: helper.newDate(),
    };
    receiptBody = { ...id, ...date, ...receiptBody };
    receipts.push(receiptBody);
    helper.writeJSONFile(filename, receipts);
    resolve({ id: receiptBody?.id });
  });
};

/**
 * Get receipt by id
 * @param {ObjectId} id
 * @returns {Promise<Number>}
 */
const getPointById = async (id) => {
  return new Promise((resolve, reject) => {
    const foundReceipt = helper
      .readJSONFile(filename)
      .find((localReceipts) => localReceipts?.id === id);
    if (foundReceipt) {
      const calculatedPoints = receiptHelper.calculatePoints(foundReceipt);
      resolve({ points: calculatedPoints, status: status.OK });
    } else {
      resolve({
        points: null,
        status: status.NOT_FOUND,
      });
    }
  });
};

module.exports = {
  createReceipt,
  getPointById,
};
