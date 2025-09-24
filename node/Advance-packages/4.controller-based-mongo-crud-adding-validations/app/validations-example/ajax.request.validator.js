const { check,header, validationResult } = require("express-validator");

//  Use Full when dealing with JWT Tokens.

const AuthorizationRules  =   [
   header("X-Requested-With")
  .equals("XMLHttpRequest")
  .withMessage("Requests must be AJAX")
]

app.get(
  "/api/any-endpoint",
  AuthorizationRules,
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    res.json({ message: "Authorized access granted!" });
  }
);
