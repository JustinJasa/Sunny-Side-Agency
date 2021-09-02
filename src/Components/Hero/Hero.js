import React from 'react';
import './Hero.css';
import Nav from '../navbar/Nav';

function Hero() {
	return (
		<div className="hero">
			<Nav />
			<div className="title">
				<span className="headings" style={{ marginTop: '10%' }}>
					WE ARE CREATIVES
				</span>
			</div>
		</div>
	);
}

export default Hero;
