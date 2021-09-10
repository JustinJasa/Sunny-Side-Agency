import React from 'react';
import ContactUs from './components/contactus/ContactUs';
import Hero from './components/hero/Hero';
import ImageGrid from './components/imagegrid/ImageGrid';
import ServicesGrid from './components/servicesgrid/ServicesGrid';
import Testimonial from './components/testimonials/Testimonial';
import Footer from './components/footer/Footer';

import './index.css';

function App() {
	return (
		<div className="App">
			<Hero />
			<ServicesGrid />
			<Testimonial />
			<ImageGrid />
			{/* 			<ContactUs /> */}
			<Footer />
		</div>
	);
}

export default App;
