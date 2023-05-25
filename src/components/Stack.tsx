import expressWhite from '../layout/assets/expressWhite.svg';

const Stack = () => {
	return (
		<div className='techStackWrapper'>
			<ul className='techStack'>
				<span className='wrapRow'>
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
				</span>
				<span className='wrapRow'>
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
				</span>
			</ul>
		</div>
	);
};

export default Stack;
