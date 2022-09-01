import React, {useState} from 'react';
import './App.css';

const Ingredients = (props) => {
	const [numIngred, setNumIngred] = useState(5);
	let list = [...Array(numIngred)].map((e, i) => <><input type='text' className={props.type} /><br /></>);
	return (
		<>
			{list}
			<div className={props.type+'Add'} onClick={() => setNumIngred(numIngred+1)}>Add ingredient</div>
		</>
	)
}

export default Ingredients;
