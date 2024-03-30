const fs = require("fs");
const path = require("path");

// Get the absolute path to the JSON file using __dirname
const jsonFilePath = path.join(__dirname, "..", "data", "contacts.json");

const readContacts = async function () {
	try {
		const data = fs.readFileSync(jsonFilePath, "utf-8");
		const contacts = JSON.parse(data);

		return contacts;
	} catch (err) {
		console.error("Error reading file:", err);
	}
};

const writeContacts = function (data) {
	try {
		fs.writeFileSync(jsonFilePath, JSON.stringify(data));
	} catch (err) {
		console.error("Error writing file:", err);
	}
};

module.exports = { readContacts, writeContacts };
