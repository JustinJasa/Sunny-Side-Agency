import React from 'react';
import MilkBottles from '../../images/desktop/image-gallery-milkbottles.jpg';
import Orange from '../../images/desktop/image-gallery-orange.jpg';
import Cone from '../../images/desktop/image-gallery-cone.jpg';
import Sugarcubes from '../../images/desktop/image-gallery-sugarcubes.jpg';
import './ImageGrid.css';

function ImageGrid() {
	return (
		<segment>
			<div className="image-container">
				<img className="img" src={MilkBottles} alt="milk bottles" />
				<img className="img" src={Orange} alt="orange" />
				<img className="img" src={Cone} alt="cone" />
				<img className="img" src={Sugarcubes} alt="sugarcubes" />
			</div>
		</segment>
	);
}

export default ImageGrid;
