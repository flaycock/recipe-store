import React, {useState} from 'react';
import Search from './Search.js';
import Store from './Store.js';
import './App.css';

const Interface = () => {
	const [view, setView] = useState('');

	const changeView = (newView) => {
		if (newView === 'search') {
			document.querySelector('#searchToggle').classList.add('selected');
			document.querySelector('#storeToggle').classList.remove('selected');
		} else {
			document.querySelector('#searchToggle').classList.remove('selected');
			document.querySelector('#storeToggle').classList.add('selected');
		}
		setView(newView);
	}
	return (
		<>
			<h2>Recipe Store</h2>
			<h4>Save and search through recipes based on ingredients!</h4>
			<div id='viewSelect'>
				<span id='storeToggle' className='viewToggle' onClick={() => changeView('store')}>Store</span>&nbsp;
				<span id='searchToggle' className='viewToggle' onClick={() => changeView('search')}>Search</span>
			</div>
			{view === 'store' && (
				<Store />
			)}
			{view === 'search' && (
				<Search />
			)}
		</>
	);
}

export default Interface;
