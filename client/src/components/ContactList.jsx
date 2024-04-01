import React from "react";
import ContactItem from "./ContactItem";

function ContactList({ contacts }) {
	return (
		<div className="flex flex-col items-center shadow-lg rounded-md p-6 bg-white">
			<h2 className="text-2xl font-semibold mb-4">Contact List</h2>
			{contacts && contacts.length > 0 ? (
				contacts.map((contact, index) => (
					<ContactItem key={index} contact={contact} />
				))
			) : (
				<p>No contact added yet!</p>
			)}
		</div>
	);
}

export default ContactList;
