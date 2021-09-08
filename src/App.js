import React from 'react';
import Hero from './components/hero/Hero';
import ServicesGrid from './components/servicesgrid/ServicesGrid';
import Testimonial from './components/testimonials/Testimonial';

import './index.css';

function App() {
	return (
		<div className="App">
			<Hero />
			<ServicesGrid />
			<Testimonial />
		</div>
	);
}

export default App;
