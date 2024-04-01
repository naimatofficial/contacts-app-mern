const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const contactRoutes = require("./routes/contactRoutes");

const app = express();
const port = 8000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get("/", (req, res) => {
	res.send("API is running...");
});

app.use("/api/contacts", contactRoutes);

app.listen(port, (err) => {
	if (err) {
		return console.log("Server is not starting. Something goes wrong!");
	}

	console.log(`Server is running on http://localhost:${port}`);
});
