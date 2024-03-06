const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const port = 8000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get("/", (req, res) => {
	res.send("API is running...");
});

app.listen(port, () => {
	console.log(`Server is running on http://localhost:${port}`);
});
