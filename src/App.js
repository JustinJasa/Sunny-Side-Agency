import React from 'react';
import Hero from './components/hero/Hero';
import ServicesGrid from './components/servicesgrid/ServicesGrid';

import './index.css';

function App() {
	return (
		<div className="App">
			<Hero />
			<ServicesGrid />
		</div>
	);
}

export default App;
