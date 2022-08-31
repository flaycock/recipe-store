const fs = require('fs');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const PORT = 3001;
const app = express();

app.use(cors());
app.use(bodyParser.json());

app.get('/search', cors(), async (req, res) => {
	const ingredients = req.query.ingredient;
	let matched = [];
	fs.readdir('./server/recipes', (err, recipes) => {
		if (err) { console.log(err); return  }
		recipes.forEach(recipe => {
			fs.readFile('./server/recipes/' + recipe, 'utf-8', (err2, data) => {
				if (err2) { console.log(err2); return }
				let parsed = JSON.parse(data);
				let canMake = true;
				let reqIngdts = parsed.ingredients;
				reqIngdts.forEach(ingredient => {
					if (!ingredients.includes(ingredient)) { canMake = false;  }
				});
				if (canMake) { matched.push(parsed); }
			});
		});
	});
	await new Promise(done => setTimeout(() => done(), 2000));
	return res.json(matched);
});

app.post('/store', cors(), async (req, res) => {
	let title = req.body.title.replace(' ', '').toLowerCase();
	let recipe = JSON.stringify(req.body);
	fs.writeFile(`./server/recipes/${title}.json`, recipe, { flag: 'w' }, err => {
		if (err) { console.log(err); return }
	});
	await new Promise(done => setTimeout(() => done(), 2000));
	return res.json('Saved.');
});

app.listen(PORT, () => {
	console.log(`Server listening on port ${PORT}`);
});
