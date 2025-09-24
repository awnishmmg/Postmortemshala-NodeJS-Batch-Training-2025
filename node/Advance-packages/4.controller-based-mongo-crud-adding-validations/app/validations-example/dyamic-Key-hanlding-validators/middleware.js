const { header, validationResult } = require("express-validator");
const ApiKey = require("./models/ApiKey");

const validateApiKeyMiddleware = [
  header("x-api-key")
    .notEmpty()
    .withMessage("API key is missing")
    .custom(async (value) => {
      const key = await ApiKey.findOne({ key: value, active: true });
      if (!key) {
        throw new Error("Invalid or inactive API key");
      }
      return true;
    }),

  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(401).json({ success: false, errors: errors.array() });
    }
    next();
  }
];

module.exports = validateApiKeyMiddleware;
