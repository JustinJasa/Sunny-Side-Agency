import React from 'react';
import Footer from './components/footer/Footer';
import Hero from './components/hero/Hero';
import ImageGrid from './components/imagegrid/ImageGrid';
import ServicesGrid from './components/servicesgrid/ServicesGrid';
import Testimonial from './components/testimonials/Testimonial';

import './index.css';

function App() {
	return (
		<div className="App">
			<Hero />
			<ServicesGrid />
			<Testimonial />
			<ImageGrid />
			<Footer />
		</div>
	);
}

export default App;
