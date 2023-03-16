const fs = require("fs");
const path = require("path");
const utils = require("./utils.js");

const fileName = process.argv[2];
const discountPercent = process.argv[3];
const inputFilePath = path.join("input", fileName);
const outputFilePath = path.join("output", fileName);

console.log("Processing file:", inputFilePath);
if (fs.existsSync(inputFilePath)) {
    const data = fs.readFileSync(inputFilePath, "utf-8");
    const cart = JSON.parse(data);
    let result = utils.calculateTotalPrice(cart, discountPercent);

    console.log("Writing to file:", outputFilePath);
    fs.writeFileSync(outputFilePath, JSON.stringify(result));
} else {
    console.log("File not found:", inputFilePath)
}
