import React, {useState} from 'react';
import './Interface.css';

const Interface = () => {
	const [storeMsg, setStoreMsg] = useState('');
	const [searchMsg, setSearchMsg] = useState('');

	const storeSend = () => {
		let title = document.querySelector('#recipeTitle').value;
		let ingredients = [...document.querySelectorAll('.storeIngredient')].map(element => element.value).filter(ingredient => ingredient !== '');
		let recipe = {
			title: title,
			ingredients: ingredients
		};
		console.log('Saving: ', recipe);
		setStoreMsg('Success in saving.');
	}

	const recipeSearch = () => {
		let ingredients = [...document.querySelectorAll('.searchIngredient')].map(element => element.value).filter(ingredient => ingredient !== '');
		let ingrString = 'search?ingredient=' + ingredients.join('&ingredient=');
		fetch(`http://localhost:3001/${ingrString}`, {
			method: 'GET',
			mode: 'cors'
		})
			.then(res => console.log(res));
			//.then(res => res.json())
			//.then(json => JSON.parse(json))
			//.then(parsed => console.log(parsed));
	}

	return (
		<>
			<h2>Recipe Store</h2>
			<h4>Save and search through recipes based on ingredients!</h4>
			<div className='column' id='store'>
				<h4>Store</h4>
				<label htmlFor='recipeTitle'>Title</label>&nbsp;
				<input type='text' id='recipeTitle' />
				<h5>Ingredients:</h5>
				<input type='text' className='storeIngredient' /><br />
				<input type='text' className='storeIngredient' /><br />
				<input type='text' className='storeIngredient' /><br />
				<input type='text' className='storeIngredient' /><br />
				<input type='text' className='storeIngredient' /><br />
				<button type='submit' onClick={() => storeSend()}>Submit</button>
				<div id='storeMsg'>{storeMsg}</div>
			</div>
			<div className='column' id='search'>
				<h4>Search</h4>
				<h5>Ingredients:</h5>
        <input type='text' className='searchIngredient' /><br />
        <input type='text' className='searchIngredient' /><br />
        <input type='text' className='searchIngredient' /><br />
        <input type='text' className='searchIngredient' /><br />
				<input type='text' className='searchIngredient' /><br />
        <button type='submit' onClick={() => recipeSearch()}>Submit</button>
				<div id='searchMsg'>{searchMsg}</div>
			</div>
		</>
	);
}

export default Interface;
