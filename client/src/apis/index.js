import axios from "axios";

const BASE_URL = "http://localhost:8000/api/contacts";

export const fetchContacts = async function () {
	try {
		const { data } = await axios.get(BASE_URL);

		console.log(data?.doc);

		return data?.doc;
	} catch (err) {
		console.log(err);
		return;
	}
};

export const createContact = async (data) => {
	await axios.post(BASE_URL, data);
};

export const deleteContact = async (id) => {
	await axios.delete(`${BASE_URL}/${id}`);
};

export const updateContact = async (data, id) => {
	await axios.put(`${BASE_URL}/${id}`, data);
};
