const express = require("express");
const router = express.Router();
const receiptValidation = require("../validations/receiptValidations");
const receiptController = require("../controllers/receiptProcessorController");
const validate = require("../middlewares/validate");

router
  .route("/process")
  .post(validate(receiptValidation.receipt), receiptController.createReceipt);

router
  .route("/:id/points")
  .get(validate(receiptValidation.getPoints), receiptController.getPoints);

module.exports = router;
