import headshot from '../layout/assets/headshot.svg';
import expressWhite from '../layout/assets/expressWhite.svg';

function IntroContent() {
	const title = `
    Hello! I'm Matt Duncan, self-taught developer from northern Virginia.
  `;

	return (
		<div className='introContent'>
			<div className='briefAbout'>{title}</div>
			<div className='me'>
				<div className='headshotWrapper'>
					<img
						className='headshot'
						src={headshot}
						alt='Matt Duncan'
					/>
				</div>
				<div className='techStack'>
					<span>
						<img
							className='langIcon'
							src={
								'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg'
							}
							alt='HTML5'
						/>
					</span>
					<span>
						<img
							className='langIcon'
							src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg'
							alt='CSS3'
						/>
					</span>
					<span>
						<img
							className='langIcon'
							src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg'
							alt='JavaScript'
						/>
					</span>
					<span>
						<img
							className='langIcon'
							src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg'
							alt='Figma'
						/>
					</span>
					<span>
						<img
							className='langIcon'
							src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg'
							alt='React'
						/>
					</span>
					<span>
						<img
							className='langIcon'
							src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg'
							alt='Node.js'
						/>
					</span>
					<span>
						<img
							className='langIcon'
							src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg'
							alt='TypeScript'
						/>
					</span>
					<span>
						<img
							className='langIcon'
							src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg'
							alt='MongoDB'
						/>
					</span>
					<span>
						<img
							className='langIcon'
							src={expressWhite}
							alt='Express.js'
						/>
					</span>
					<span>
						<img
							className='langIcon'
							src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg'
							alt='Redux'
						/>
					</span>
				</div>
			</div>
		</div>
	);
}

export default IntroContent;
