import React from 'react';
import './Footer.css';
import { Facebook, Instagram, Twitter, Pinterest } from 'grommet-icons';
import Logo from '../../images/logo.svg';

function Footer() {
	return (
		<segment>
			<div className="footer-container">
				<div className="logo">
					<img src={Logo} alt="logo" />
				</div>
				<div className="links">
					<h3>
						<a href="#">About</a>
					</h3>
					<h3>
						<a href="#">Services</a>
					</h3>
					<h3>
						<a href="#">Projects</a>
					</h3>
				</div>
				<nav>
					<ul className="socials">
						<li className="social-links">
							<Facebook />
						</li>
						<li className="social-links">
							<Instagram />
						</li>
						<li className="social-links">
							<Twitter />
						</li>
						<li className="social-links">
							<Pinterest />
						</li>
					</ul>
				</nav>
			</div>
		</segment>
	);
}

export default Footer;
