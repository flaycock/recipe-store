const fs = require('fs');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const PORT = 3001;
const app = express();

app.use(cors());
app.use(bodyParser.json());

app.get('/search', cors(), (req, res) => {
	const ingredients = req.query.ingredient;
	ingredients.forEach(ingredient => console.log(ingredient));
	res.json({"test": 1});
});

app.post('/store', cors(), (req, res) => {
	console.log(req.body);
});

app.listen(PORT, () => {
	console.log(`Server listening on port ${PORT}`);
});
