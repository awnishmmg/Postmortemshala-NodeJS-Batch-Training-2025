const validateApiKeyMiddleware = require("./middleware");
const crypto = require("crypto");

function generateApiKey() {
  return crypto.randomBytes(32).toString("hex"); // 64-char secure key
}

app.post("/create-key", async (req, res) => {
  const newKey = new ApiKey({
    key: generateApiKey(),
    owner: req.body.owner
  });

  await newKey.save();
  res.json({ success: true, apiKey: newKey.key });
});


app.get("/secure-data", validateApiKeyMiddleware, (req, res) => {
  res.json({ message: "Access granted with valid API key" });
});





