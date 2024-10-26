import React, { useState } from "react";

const TrafficLights = () => {

	const [color, setColor] = useState('red');
	const [count, setCount] = useState(1);
	const [addStyle, setAddStyle] = useState(false);
	const [arr, setArr] = useState(['red', 'yellow', 'green'])

	count > arr.length-1 ? setCount(0) : '';
	
	const alternate = () => {
		setColor(arr[count]);
		setCount(prev => prev + 1);
		console.log(arr[count]);
	}

	const addPurple = () => {
		setAddStyle(prev => !prev)
		addStyle !== true ? setArr([...arr,'purple']) : arr.pop();
	}
	
	console.log(arr);

	return (
		<div>
			<div className={`trafficLight ${addStyle === true ? 'add-height' : ''}`}>
				<div className={`light-red ${color !== 'red' ? 'opacity' : 'shine-red'}`} onClick={() => setColor('red')}></div>
				<div className={`light-yellow ${color !== 'yellow' ? 'opacity' : 'shine-yellow'}`} onClick={() => setColor('yellow')}></div>
				<div className={`light-green ${color !== 'green' ? 'opacity' : 'shine-green'}`} onClick={() => setColor('green')}></div>
				<div className={`light-purple ${color !== 'purple' ? 'opacity' : 'shine-purple'} ${addStyle !== true ? 'hidden' : ''}`} onClick={() => setColor('purple')}></div>
			</div>
			
			<div className="stick"></div>
			<div className="shadow"></div>

			<div className="btn-group" role="group" aria-label="Basic example">
				<button type="button" className="btn btn-alternate" onClick={alternate}>Alternate</button>
				<button type="button" className="btn btn-purple" onClick={addPurple}>Purple</button>
			</div>
		</div>
	);
};

export default TrafficLights;
