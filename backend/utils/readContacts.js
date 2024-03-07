const fs = require("fs");
const path = require("path");

// Get the absolute path to the JSON file using __dirname
const jsonFilePath = path.join(__dirname, "..", "data", "contacts.json");

module.exports = async function () {
	try {
		const data = fs.readFileSync(jsonFilePath, "utf8");
		const contacts = JSON.parse(data);

		return contacts;
	} catch (error) {
		console.error("Error reading file:", error);
	}
};
