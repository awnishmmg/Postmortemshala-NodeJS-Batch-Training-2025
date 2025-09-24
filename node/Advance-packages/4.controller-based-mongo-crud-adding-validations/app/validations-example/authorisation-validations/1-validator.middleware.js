const { header, validationResult } = require("express-validator");

const AuthorizationRules =  [
    header("x-api-key")
      .notEmpty()
      .withMessage("API key is required")
      .custom((value) => {
        if (value !== "mysecretapikey123") {
          throw new Error("Invalid API key");
        }
        return true;
      }),
]

app.post(
  "/data",
  AuthorizationRules,
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(401).json({ success: false, errors: errors.array() });
    }

    res.json({ success: true, message: "Valid API key", data: req.body });
  }
);
