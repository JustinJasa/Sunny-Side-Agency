import React from 'react';
import emailjs from 'emailjs-com';
import './Footer.css';

const ContactUs = () => {
	function sendEmail(e) {
		e.preventDefault();

		emailjs
			.sendForm(
				'service_7eryc39',
				'service_7eryc39',
				e.target,
				'user_FzVSNIzUlIvWV3s0n3053'
			)
			.then(
				(result) => {
					console.log(result.text);
				},
				(error) => {
					console.log(error.text);
				}
			);

		e.target.reset();
	}

	return (
		<div className="footer-container">
			<div>
				<h2 className="headings contact">Contact Me!</h2>
			</div>
			<form className="contact-form" onSubmit={sendEmail}>
				<label className="label">Name</label>
				<input type="text" name="to_name" />
				<label className="label">Email</label>
				<input type="email" name="from_name" />
				<label className="label">Message</label>
				<textarea name="message" />
				<input className="label" type="submit" value="Send" />
			</form>
			<div>
				<ul>
					<li></li>
					<li></li>
					<li></li>
				</ul>
			</div>
		</div>
	);
};

function Footer() {
	return (
		<segment href="#contact">
			<ContactUs />
		</segment>
	);
}

export default Footer;
