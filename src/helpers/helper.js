const { v4: uuidv4 } = require("uuid");
const fs = require("fs");

const getNewId = () => {
  const id = uuidv4();
  return id;
};

const newDate = () => new Date().toString();

const writeJSONFile = (filename, content) => {
  fs.writeFileSync(
    "src/data/" + filename,
    JSON.stringify(content),
    "utf8",
    (err) => {
      if (err) {
        console.log(err);
      }
    }
  );
};

const readJSONFile = (filename) => {
  const dataFile = fs.readFileSync("src/data/" + filename, "utf8", (err) => {
    if (err) {
      console.log(err);
    }
  });

  return JSON.parse(dataFile);
};

module.exports = {
  getNewId,
  newDate,
  writeJSONFile,
  readJSONFile,
};
