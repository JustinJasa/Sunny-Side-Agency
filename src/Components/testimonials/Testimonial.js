import React from 'react';
import Emily from '../../images/image-emily.jpg';
import Thomas from '../../images/image-thomas.jpg';
import Jennie from '../../images/image-jennie.jpg';
import './Testimonial.css';

function Testimonial() {
	return (
		<section className="testimonial-section">
			<div>
				<h1 className="headings client-title">Client Testimonials</h1>
			</div>
			<div className="testimonial-container">
				<div className="testimonial">
					<div className="img-text">
						<img className="profile-img" src={Emily} alt="Emily" />
						<p className="test-desc">
							We put our in Sunnyside and they delivered, making sure our needs
							were met and deadlines were always hit
						</p>
					</div>
					<div>
						<h4 className="headings name">Emily R.</h4>
						<p className="position">Marketing Director</p>
					</div>
				</div>
				<div className="testimonial">
					<div className="img-text">
						<img className="profile-img" src={Thomas} alt="Emily" />
						<p className="test-desc">
							Sunnyside's enthusiasm coupled with their keen interest in our
							brands's success made it a satisfying and enjoyable experience.
						</p>
					</div>
					<div>
						<h4 className="headings name">Thomas S.</h4>
						<p className="position">Marketing Director</p>
					</div>
				</div>
				<div className="testimonial">
					<div className="img-text">
						<img className="profile-img" src={Jennie} alt="Emily" />
						<p className="test-desc">
							Incredible end result! Our sales increased over 400% when we
							worked with Sunnyside. Highly recommended!
						</p>
					</div>
					<div>
						<h4 className="headings name">Jennie F.</h4>
						<p className="position">Business Owner</p>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Testimonial;
