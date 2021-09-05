import React from 'react';
import './ServicesGrid.css';
import Egg from '../../images/desktop/image-transform.jpg';
import StandOut from '../../images/desktop/image-stand-out.jpg';
import GraphicDesign from '../../images/desktop/image-graphic-design.jpg';
import Photography from '../../images/desktop/image-photography.jpg';

function ServicesGrid() {
	return (
		<div className="services">
			<div className="brand-info">
				<h3 className="headings brand">Transform your brand</h3>
				<p className="description">
					We are a full-service creative agency specializing in helping brands
					grow fast. Engage your clients through compelling visuals that do most
					of the marketing for you.
				</p>
				<div className="learn-more">
					<a href="/" className="headings ">
						Learn More
					</a>
				</div>
			</div>
			<div className="img-container">
				<img src={Egg} alt="transform" />
			</div>
			<div className="img-container">
				<img src={StandOut} alt="stand-out" />
			</div>
			<div className="brand-info">
				<h3 className="headings brand">Stand out to the right audience</h3>
				<p className="description">
					Using a collaborative formula of designers, researchers, photographers
					and copywriters, we'll build and extend your brand in digital places
				</p>
				<div className="learn-more">
					<a href="/" className="headings ">
						Learn More
					</a>
				</div>
			</div>
			<div className="img-container-words">
				<img src={GraphicDesign} alt="graphic-design" />
				<div className="service-description">
					<h3 className="headings brand">Graphic Design</h3>
					<p className="description">
						Great design makes you memorable. We deliver artwork that
						underscores your brand message and captures potential clients'
						attention.
					</p>
				</div>
			</div>
			<div className="img-container-words">
				<div>
					<img src={Photography} alt="photography" />
					<div className="service-description">
						<h3 className="headings brand">Photography</h3>
						<p className="description">
							Increase your credibility by getting the most stunning,
							high-quality photos that improve your business image
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default ServicesGrid;
