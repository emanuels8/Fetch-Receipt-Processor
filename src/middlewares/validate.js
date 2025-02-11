const httpStatus = require("http-status");
const ApiError = require("../utils/ApiError");

const validate = (schema, property) => (req, res, next) => {
  const { value, error } = schema.validate(req[property]);
  if (error) {
    const errorMessage = error.details
      .map((details) => details.message)
      .join(", ");
    return next(new ApiError(httpStatus.BAD_REQUEST, errorMessage));
  }
  Object.assign(req, value);
  return next();
};

module.exports = validate;
