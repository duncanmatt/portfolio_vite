import expressWhite from '../layout/assets/expressWhite.svg';

const SkillsIcons = () => {
	return (
		<div className='skillIconsWrapper'>
			<ul className='skillIcons'>
					<li className='skillIconOuter'>
						<img
							className='skillIconInner'
							src={
								'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg'
							}
							alt='HTML5'
						/>
					</li>
					<li className='skillIconOuter'>
						<img
							className='skillIconInner'
							src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg'
							alt='CSS3'
						/>
					</li>
					<li className='skillIconOuter'>
						<img
							className='skillIconInner'
							src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg'
							alt='JavaScript'
						/>
					</li>
					<li className='skillIconOuter'>
						<img
							className='skillIconInner'
							src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg'
							alt='Figma'
						/>
					</li>
					<li className='skillIconOuter'>
						<img
							className='skillIconInner'
							src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg'
							alt='React'
						/>
					</li>
					<li className='skillIconOuter'>
						<img
							className='skillIconInner'
							src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg'
							alt='Node.js'
						/>
					</li>
					<li className='skillIconOuter'>
						<img
							className='skillIconInner'
							src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg'
							alt='TypeScript'
						/>
					</li>
					<li className='skillIconOuter'>
						<img
							className='skillIconInner'
							src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg'
							alt='MongoDB'
						/>
					</li>
					<li className='skillIconOuter'>
						<img
							className='skillIconInner'
							src={expressWhite}
							alt='Express.js'
						/>
					</li>
					<li className='skillIconOuter'>
						<img
							className='skillIconInner'
							src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg'
							alt='Redux'
						/>
					</li>
			</ul>
		</div>
	);
};

export default SkillsIcons;
