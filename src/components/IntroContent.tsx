import headshot from '../layout/assets/headshot.svg';
import expressWhite from '../layout/assets/expressWhite.svg';

function IntroContent() {
	const title = `
    Hello! I'm Matt Duncan, self-taught developer from northern Virginia.
  `;

	return (
		<div className='introContent'>
			<div className='briefAbout'>{title}</div>
			<ul className='techStack'>
				<li>
					<img
						className='langIcon'
						src={
							'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg'
						}
						alt='HTML5'
					/>
				</li>
				<li>
					<img
						className='langIcon'
						src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg'
						alt='CSS3'
					/>
				</li>
				<li>
					<img
						className='langIcon'
						src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg'
						alt='JavaScript'
					/>
				</li>
				<li>
					<img
						className='langIcon'
						src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg'
						alt='Figma'
					/>
				</li>
				<li>
					<img
						className='langIcon'
						src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg'
						alt='React'
					/>
				</li>
				<li>
					<img
						className='langIcon'
						src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg'
						alt='Node.js'
					/>
				</li>
				<li>
					<img
						className='langIcon'
						src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg'
						alt='TypeScript'
					/>
				</li>
				<li>
					<img
						className='langIcon'
						src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg'
						alt='MongoDB'
					/>
				</li>
				<li>
					<img
						className='langIcon'
						src={expressWhite}
						alt='Express.js'
					/>
				</li>
				<li>
					<img
						className='langIcon'
						src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg'
						alt='Redux'
					/>
				</li>
			</ul>
			<div className='headshotWrapper'>
				<picture>
					<img
						className='headshot'
						src={headshot}
						alt='Matt Duncan'
					/>
				</picture>
			</div>
		</div>
	);
}

export default IntroContent;
