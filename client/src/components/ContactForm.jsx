import React, { useRef, useEffect, useState } from "react";

const ContactForm = ({ addContactHandler, onClose }) => {
	const dialogRef = useRef(null);
	const [formValues, setFormValues] = useState({
		name: "",
		email: "",
		phoneNumber: "",
	});
	const [formErrors, setFormErrors] = useState({
		name: "",
		email: "",
		phoneNumber: "",
	});
	const [formSubmitted, setFormSubmitted] = useState(false);

	useEffect(() => {
		const handleClickOutside = (event) => {
			if (dialogRef.current && !dialogRef.current.contains(event.target)) {
				onClose();
			}
		};

		document.addEventListener("mousedown", handleClickOutside);
		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, [onClose]);

	const handleChange = (event) => {
		const { name, value } = event.target;
		setFormValues({ ...formValues, [name]: value });
	};

	const validateForm = () => {
		let errors = {};
		if (!formValues.name) {
			errors.name = "Name is required";
		}
		if (!formValues.email) {
			errors.email = "Email is required";
		} else if (!/\S+@\S+\.\S+/.test(formValues.email)) {
			errors.email = "Email is invalid";
		}
		if (!formValues.phoneNumber) {
			errors.phoneNumber = "Phone Number is required";
		}
		setFormErrors(errors);
		return Object.keys(errors).length === 0;
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		const isValid = validateForm();
		if (isValid) {
			addContactHandler(formValues);
			setFormValues({ name: "", email: "", phoneNumber: "" });
			setFormSubmitted(true);
			onClose();
		}
	};

	return (
		<div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-50">
			<div ref={dialogRef} className="bg-white rounded-lg p-8 w-96">
				<h2 className="text-xl font-semibold mb-4">Add Contact</h2>
				<form onSubmit={handleSubmit}>
					<input
						type="text"
						name="name"
						value={formValues.name}
						onChange={handleChange}
						placeholder="Name"
						className="w-full p-2 border rounded mb-2"
					/>
					{formErrors.name && (
						<p className="text-red-500 text-sm mb-2">{formErrors.name}</p>
					)}
					<input
						type="email"
						name="email"
						value={formValues.email}
						onChange={handleChange}
						placeholder="Email"
						className="w-full p-2 border rounded mb-2"
					/>
					{formErrors.email && (
						<p className="text-red-500 text-sm mb-2">{formErrors.email}</p>
					)}
					<input
						type="text"
						name="phoneNumber"
						value={formValues.phoneNumber}
						onChange={handleChange}
						placeholder="Phone Number"
						className="w-full p-2 border rounded mb-2"
					/>
					{formErrors.phoneNumber && (
						<p className="text-red-500 text-sm mb-2">
							{formErrors.phoneNumber}
						</p>
					)}
					<div className="flex justify-end">
						<button
							type="submit"
							className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 mr-2"
						>
							Add
						</button>
						<button
							type="button"
							className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
							onClick={onClose}
						>
							Cancel
						</button>
					</div>
				</form>
				{formSubmitted && (
					<p className="text-red-500 text-sm mt-2">
						Please fix the errors above.
					</p>
				)}
			</div>
		</div>
	);
};

export default ContactForm;
