const express = require("express");
const router = express.Router();
const receiptValidation = require("../validations/receiptValidations");
const receiptController = require("../controllers/receiptController");
const validate = require("../middlewares/validate");

router
  .route("/process")
  .post(
    validate(receiptValidation.receipt, "body"),
    receiptController.createReceipt
  );

router.route("/:id/points").get(receiptController.getPoints);

module.exports = router;
