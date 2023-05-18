import headshot from '../layout/assets/headshot.svg';

function IntroContent() {
	const title = `
    Hello! I'm Matt Duncan, self-taught developer from northern Virginia.
  `;

	return (
		<div className='introContent'>
			<span className='briefAbout'>{title}</span>
			<span className='headshotWrapper'>
				<img
					className='headshot'
					src={headshot}
					alt='Matt Duncan'
				/>
			</span>
		</div>
	);
}

export default IntroContent;
