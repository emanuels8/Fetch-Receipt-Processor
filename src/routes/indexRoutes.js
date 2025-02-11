const express = require("express");
const router = express.Router();

router.use("/receipts", require("./receiptProcessorRoutes"));

module.exports = router;
