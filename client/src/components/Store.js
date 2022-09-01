import React, {useState} from 'react';
import Ingredients from './Ingredients.js';
import './App.css';

const Store = () => {
	const [storeMsg, setStoreMsg] = useState('');

	const storeSend = () => {
		setStoreMsg('Storing...');
		const title = document.querySelector('#recipeTitle').value.replace(' ', '-').toLowerCase();
		const ingredients = [...document.querySelectorAll('.storeIngredient')].map(element => element.value.replace(' ', '-').toLowerCase()).filter(ingredient => ingredient !== '');
		const recipe = {
			title: title,
			ingredients: ingredients
		};
		console.log('Saving: ', recipe);
		fetch('http://localhost:3001/store', {
			method: 'POST',
			mode: 'cors',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(recipe)
		})
			.then(res => setStoreMsg('Saved ' + title))
			.then(document.querySelectorAll('#recipeTitle, .storeIngredient').forEach(input => input.value = ''));
	}

	return (
		<div className='view' id='store'>
				<h4>Store</h4>
				<label htmlFor='recipeTitle'>Title</label>&nbsp;
				<input type='text' id='recipeTitle' />
				<h5>Ingredients:</h5>
				<Ingredients type='storeIngredient' />
				<button type='submit' onClick={() => storeSend()}>Submit</button>
				<div id='storeMsg'>{storeMsg}</div>
		</div>	
	);
}

export default Store;
