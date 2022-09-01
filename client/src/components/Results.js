import React, {useState} from 'react';
import './App.css';

const Results = (props) => {
	const [resMsg, setResMsg] = useState('');
	
	return (
		<div id="results">
			{resMsg}		
		</div>
	)
}
export default Results;
