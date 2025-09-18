const path = require("node:path");

const DATA_FILE_PATH = "db.json";
const dataPath = path.join(__dirname, DATA_FILE_PATH);

const config = {
  dbPath: dataPath,
};

module.exports = config;
