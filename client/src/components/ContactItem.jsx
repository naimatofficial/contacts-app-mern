import React from "react";
import { FaEdit, FaTrash } from "react-icons/fa";

function ContactItem({ contact }) {
	return (
		<div className="flex items-center my-2 bg-slate-100 px-4 py-1 rounded-full w-full">
			<div
				className={`w-10 h-10 rounded-full text-white flex items-center justify-center bg-orange-400`}
			>
				{contact.name.charAt(0).toUpperCase()}
			</div>
			<div className="ml-4">
				<p className="text-lg font-semibold">{contact.name}</p>
				<p className="text-gray-600">{contact.email}</p>
				<p className="text-gray-600">{contact.phoneNumber}</p>
			</div>
			<div className="ml-auto flex items-center">
				<button className="mr-2 text-blue-500">
					<FaEdit />
				</button>
				<button className="text-red-500">
					<FaTrash />
				</button>
			</div>
		</div>
	);
}

export default ContactItem;
