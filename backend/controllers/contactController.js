const getContacts = async (req, res) => {
	res.send("GET All contacts");
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
