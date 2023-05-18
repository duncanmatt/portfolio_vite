import { useState } from 'react';
import { Button } from 'antd';

function Contact() {
	const [text, setText] = useState('');
	const [btnDisabled, setBtnDisabled] = useState(true);
	const [message, setMessage] = useState('');

	const handleTextChange = (e) => {
		if (text === '') {
			setBtnDisabled(true);
			setMessage(null);
		} else if (text !== '' && !text.includes('@')) {
			setMessage('Please enter a valid email address');
			setBtnDisabled(true);
		} else {
			setMessage(null);
			setBtnDisabled(false);
		}

		setText(e.target.value);
	};

	return (
		<div className='contact'>
			<form className='contactForm'>
				<h2>Get in Touch</h2>
				<p>Join my email list to receive updates when I release new content</p>
				<div className='contactInput'>
					<input
						onChange={handleTextChange}
						type='email'
						placeholder='Enter your email'
						value={text}
					/>
					{!btnDisabled && <Button type='submit'>Subscribe</Button>}
				</div>
				{message && <div className='message'>{message}</div>}
			</form>
		</div>
	);
}

export default Contact;
