const Joi = require("joi");

const receipt = Joi.object({
  retailer: Joi.string().required(),
  purchaseDate: Joi.string().isoDate().required(),
  purchaseTime: Joi.string()
    .pattern(/^([01]\d|2[0-3]):([0-5]\d)$/)
    .required(),
  items: Joi.array()
    .items(
      Joi.object({
        shortDescription: Joi.string().trim().required(),
        price: Joi.string()
          .pattern(/^\d+(\.\d{2})?$/)
          .required(),
      })
    )
    .required(),
  total: Joi.string()
    .pattern(/^\d+(\.\d{2})?$/)
    .required(),
});

module.exports = { receipt };
