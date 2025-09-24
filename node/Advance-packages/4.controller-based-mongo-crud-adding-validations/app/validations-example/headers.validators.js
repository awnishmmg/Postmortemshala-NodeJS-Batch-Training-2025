const { header, validationResult } = require("express-validator");

//  Use Full when dealing with JWT Tokens.
app.get(
  "/api/any-endpoint",
  [
    header("authorization")
      .notEmpty()
      .withMessage("Authorization header is required")
      .matches(/^Bearer\s.+$/)
      .withMessage("Authorization must be a Bearer token"),
  ],
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    res.json({ message: "Authorized access granted!" });
  }
);
