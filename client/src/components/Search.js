import React, {useState} from 'react';
import Ingredients from './Ingredients.js';
import './App.css';

const Search = () => {
	const [searchMsg, setSearchMsg] = useState('');

	const recipeSearch = () => {
		setSearchMsg('Searching...');
		const ingredients = [...document.querySelectorAll('.searchIngredient')].map(element => element.value.replace(' ', '-').toLowerCase()).filter(ingredient => ingredient !== '');
		const ingrString = 'search?ingredient=' + ingredients.join('&ingredient=');
		fetch(`http://localhost:3001/${ingrString}`, {
			method: 'GET',
			mode: 'cors'
		})
			.then(res => res.text())
			.then(text => JSON.parse(text))
			.then(recipes => {
				console.log(recipes);
				if (!recipes.length) {
					console.log('no recipes returned');
					setSearchMsg('No recipes returned! Try adding some.');
				} else {
					console.log('recipes returned: ', recipes);
					let results = [];
					recipes.forEach(recipe => results.push(recipe.title.replace('-', ' ')));
					setSearchMsg(results.join(', '));
				}
			});
	}

	return (
		<div className='view' id='search'>
				<h4>Search</h4>
				<h5>Ingredients:</h5>
        <Ingredients type='searchIngredient' />
				<button type='submit' onClick={() => recipeSearch()}>Submit</button>
				<div id='searchMsg'>{searchMsg}</div>
		</div>
	);
}

export default Search;
