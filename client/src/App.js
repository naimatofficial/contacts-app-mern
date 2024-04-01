import React, { useEffect, useState } from "react";
import ContactForm from "./components/ContactForm";
import ContactList from "./components/ContactList";
import { AiOutlineUserAdd } from "react-icons/ai";
import { createContact, fetchContacts } from "./apis";

function App() {
	const [contacts, setContacts] = useState([]);
	const [showForm, setShowForm] = useState(false);

	const toggleForm = () => {
		// setShowForm(showForm ? false : true)
		setShowForm(!showForm);
	};

	const addContactHandler = async (contact) => {
		createContact(contact);
		toggleForm();
	};

	// const updateContactHandler = async (contact) => {
	// 	updateContact(contact, contact.id);
	// 	toggleForm();
	// };

	const onCloseHandler = () => {
		setShowForm(false);
	};

	useEffect(() => {
		const getContacts = async () => {
			const data = await fetchContacts();

			setContacts(data);
		};

		getContacts();
	}, []);

	return (
		<div className="w-2/3 mx-auto mt-8 p-6 bg-gray-800 rounded-md">
			<h1 className="text-3xl font-semibold mb-4 text-center text-white">
				Contact App
			</h1>
			<button
				className="bg-blue-500 text-white px-4 py-2 rounded-md mb-4 flex items-center mx-auto"
				onClick={toggleForm}
			>
				<AiOutlineUserAdd className="mr-2" />
				Add New Contact
			</button>
			{showForm && (
				<ContactForm
					addContactHandler={addContactHandler}
					onClose={onCloseHandler}
				/>
			)}
			<ContactList contacts={contacts} />
		</div>
	);
}

export default App;
