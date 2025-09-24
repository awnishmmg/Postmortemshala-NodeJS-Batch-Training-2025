const { header, validationResult } = require("express-validator");

const ValidationMiddleWare = [
  header("x-api-key")
    .notEmpty()
    .withMessage("API key missing")
    .custom((value) => {
      if (value !== "mysecretapikey123") {
        throw new Error("Invalid API key");
      }
      return true;
    }),
    (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(401).json({ errors: errors.array() });
    }
    next();
  },
];

// Usage in routes
app.get("/secure-data", ValidationMiddleWare, (req, res) => {
  res.json({ message: "Access granted", user: "Awnish" });
});


app.post(
  "/data",
  ValidationMiddleWare,
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(401).json({ success: false, errors: errors.array() });
    }

    res.json({ success: true, message: "Valid API key", data: req.body });
  }
);
