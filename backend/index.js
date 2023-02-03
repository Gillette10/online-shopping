const express = require("express");
const cors = require("cors");

//products import
const products = require("./products");

const app = express();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
	res.send("Welcome our to online shop API...");
});

//sending products to the api endpoints
app.get("/products", (req, res) => {
	res.send(products);
});

const port = process.env.PORT || 5000;

app.listen(port, console.log(`Server running on port ${port}`));
