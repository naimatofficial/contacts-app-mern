const readContacts = require("../utils/readContacts");

const getContacts = async (req, res) => {
	const contacts = await readContacts();
	
	res.status(200).json({
		status: "success",
		data: contacts,
	});
};

const createContact = async (req, res) => {
	res.send("create contact");
};

const getContactById = async (req, res) => {
	res.send("get single contact");
};

const updateContactById = async (req, res) => {
	res.send("update contact");
};
const deleteContactById = async (req, res) => {
	res.send("delete contact");
};

module.exports = {
	getContacts,
	createContact,
	getContactById,
	updateContactById,
	deleteContactById,
};
