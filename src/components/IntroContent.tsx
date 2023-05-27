import headshot from '../layout/assets/headshot.svg';

function IntroContent() {
	const title = `
    Hello! I'm Matt Duncan, self-taught developer from northern Virginia.
  `;

	return (
		<div className='introContent'>
			<div className='info'>
				<span className='briefAbout'>{title}</span>
			</div>
			<figure>
			<div className='headshotWrapper'>
				<picture>
					<img
						className='headshot'
						src={headshot}
						alt='Matt Duncan'
					/>
				</picture>
			</div>
			</figure>
		</div>
	);
}

export default IntroContent;
