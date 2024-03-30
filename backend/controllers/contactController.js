const fs = require("fs");
const crypto = require("crypto");
const { readContacts, writeContacts } = require("../utils/contacts");

const getContacts = async (req, res) => {
	try {
		const contacts = await readContacts();

		res.status(200).json({
			status: "success",
			doc: contacts,
		});
	} catch (err) {
		console.log(err);
		throw new Error("Server is not responding!");
	}
};

const createContact = async (req, res) => {
	try {
		const { name, email, phoneNumber } = req.body;
		const data = await readContacts();

		const id = crypto.randomBytes(6).toString("hex");

		const newContact = { id, name, email, phoneNumber };

		data.push(newContact);

		writeContacts(data);

		res.status(201).json({
			status: "success",
			doc: newContact,
		});
	} catch (err) {
		console.log(err);
		throw new Error("Server is not responding!");
	}
};

const getContactById = async (req, res) => {
	try {
		const { id } = req.params;
		const data = await readContacts();

		const contact = data.filter((el) => el.id === id);

		res.status(200).json({
			status: "success",
			doc: contact,
		});
	} catch (err) {
		console.log(err);
		throw new Error("Server is not responding!");
	}
};

const updateContactById = async (req, res) => {
	try {
		const { id } = req.params;

		const data = await readContacts();

		const index = data.findIndex((item) => item.id === id);

		console.log(index);

		const contact = data[index];

		data[index] = {
			id,
			name: req.body.name || contact.name,
			email: req.body.email || contact.email,
			phoneNumber: req.body.phoneNumber || contact.phoneNumber,
		};

		// update the contacts list
		writeContacts(data);

		res.status(200).json({
			status: "success",
			doc: data[index],
		});
	} catch (err) {
		console.log(err);
		throw new Error("Server is not responding!");
	}
};

const deleteContactById = async (req, res) => {
	try {
		const data = await readContacts();

		const { id } = req.params;

		const filteredData = data.filter((el) => el.id !== id);

		writeContacts(filteredData);

		res.status(204).json({
			status: "success",
		});
	} catch (err) {
		console.log(err);
		throw new Error("Server is not responding!");
	}
};

module.exports = {
	getContacts,
	createContact,
	getContactById,
	updateContactById,
	deleteContactById,
};
