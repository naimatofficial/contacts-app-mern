const express = require("express");
const {
	getContacts,
	createContact,
	getContactById,
	updateContactById,
	deleteContactById,
} = require("../controllers/contactController");

const router = express();

router.route("/").get(getContacts).post(createContact);

router
	.route("/:id")
	.get(getContactById)
	.put(updateContactById)
	.delete(deleteContactById);

module.exports = router;
