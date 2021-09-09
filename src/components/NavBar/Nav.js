import React from 'react';
import Logo from '../../images/logo.svg';
import './Nav.css';

function Nav() {
	return (
		<header>
			<nav class="nav">
				<div className="logo-container">
					<img className="logo" src={Logo} alt="Logo" />
				</div>
				<div className="nav-container">
					<a class="nav-link" href="#">
						About
					</a>
					<a class="nav-link" href="#">
						Services
					</a>
					<a class="nav-link" href="#">
						Projects
					</a>
					<a class="nav-button headings" href="#contact">
						CONTACT
					</a>
				</div>
			</nav>
		</header>
	);
}

export default Nav;
