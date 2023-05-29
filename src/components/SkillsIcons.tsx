import { useMediaQuery } from 'react-responsive';

const SkillsIcons = () => {
	const isLarge = useMediaQuery({
		query: '(min-width: 800px)',
		minDeviceWidth: 800,
		type: 'screen',
	});

	return (
		<div className='skillItemsWrapper'>
			<ul className={isLarge ? 'skillItemsLg' : 'skillItems'}>
				<li className='skillItemOuter'>
					<div className='skillItemInner'>
						<span className='skillName'>HTML</span>
						<span className='skillIconWrapper'>
							<img
								className='skillIcon'
								src={
									'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg'
								}
								alt='HTML5'
							/>
						</span>
					</div>
				</li>
				<li className='skillItemOuter'>
					<div className='skillItemInner'>
						<span className='skillName'>CSS</span>
						<span className='skillIconWrapper'>
							<img
								className='skillIcon'
								src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg'
								alt='CSS3'
							/>
						</span>
					</div>
				</li>
				<li className='skillItemOuter'>
					<div className='skillItemInner'>
						<span className='skillName'>JavaScript</span>
						<span className='skillIconWrapper'>
							<img
								className='skillIcon'
								src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg'
								alt='JavaScript'
							/>
						</span>
					</div>
				</li>
				<li className='skillItemOuter'>
					<div className='skillItemInner'>
						<span className='skillName'>Figma</span>
						<span className='skillIconWrapper'>
							<img
								className='skillIcon'
								src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg'
								alt='Figma'
							/>
						</span>
					</div>
				</li>
				<li className='skillItemOuter'>
					<div className='skillItemInner'>
						<span className='skillName'>Git</span>
						<span className='skillIconWrapper'>
							<img
								className='skillIcon'
								src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg'
								alt='Git'
							/>
						</span>
					</div>
				</li>
				<li className='skillItemOuter'>
					<div className='skillItemInner'>
						<span className='skillName'>React</span>
						<span className='skillIconWrapper'>
							<img
								className='skillIcon'
								src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg'
								alt='React'
							/>
						</span>
					</div>
				</li>
				<li className='skillItemOuter'>
					<div className='skillItemInner'>
						<span className='skillName'>Node.js</span>
						<span className='skillIconWrapper'>
							<img
								className='skillIcon'
								src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg'
								alt='Node.js'
							/>
						</span>
					</div>
				</li>
				<li className='skillItemOuter'>
					<div className='skillItemInner'>
						<span className='skillName'>MongoDB</span>
						<span className='skillIconWrapper'>
							<img
								className='skillIcon'
								src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg'
								alt='MongoDB'
							/>
						</span>
					</div>
				</li>
				<li className='skillItemOuter'>
					<div className='skillItemInner'>
						<span className='skillName'>Redux</span>
						<span className='skillIconWrapper'>
							<img
								className='skillIcon'
								src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg'
								alt='Redux'
							/>
						</span>
					</div>
				</li>
				<li className='skillItemOuter'>
					<div className='skillItemInner'>
						<span className='skillName'>Express.js</span>
						<span className='skillIconWrapper'>
							<svg
								className='skillIcon'
								fill='#fff'
								xmlns='http://www.w3.org/2000/svg'
								viewBox='0 0 50 50'
								width='100%'
								height='100%'>
								<path d='M49.729 11h-.85c-1.051 0-2.041.49-2.68 1.324l-8.7 11.377-8.7-11.377C28.162 11.49 27.171 11 26.121 11h-.85l10.971 14.346L25.036 40h.85c1.051 0 2.041-.49 2.679-1.324L37.5 26.992l8.935 11.684C47.073 39.51 48.063 40 49.114 40h.85L38.758 25.346 49.729 11zM21.289 34.242c-2.554 3.881-7.582 5.87-12.389 4.116C4.671 36.815 2 32.611 2 28.109L2 27h12v0h11l0-4.134c0-6.505-4.818-12.2-11.295-12.809C6.273 9.358 0 15.21 0 22.5l0 5.573c0 5.371 3.215 10.364 8.269 12.183 6.603 2.376 13.548-1.17 15.896-7.256 0 0 0 0 0 0h-.638C22.616 33 21.789 33.481 21.289 34.242zM2 22.5C2 16.71 6.71 12 12.5 12S23 16.71 23 22.5V25H2V22.5z' />
							</svg>
						</span>
					</div>
				</li>
				<li className='skillItemOuter'>
					<div className='skillItemInner'>
						<span className='skillName'>TypeScript</span>
						<span className='skillIconWrapper'>
							<img
								className='skillIcon'
								src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg'
								alt='TypeScript'
							/>
						</span>
					</div>
				</li>
				<li className='skillItemOuter'>
					<div className='skillItemInner'>
						<span className='skillName'>Next.js</span>
						<span className='skillIconWrapper'>
							<svg
								className='skillIcon'
								fill='#fff'
								xmlns='http://www.w3.org/2000/svg'
								width='100%'
								height='100%'
								viewBox='0 0 128 128'>
								<path d='M64 0C28.7 0 0 28.7 0 64s28.7 64 64 64 64-28.7 64-64S99.3 0 64 0zm32.7 114.4L48.4 41.8h-6.8v50.1h6.8V55.3l44.2 61.5c-8.5 4.6-18.2 7.2-28.6 7.2-33.2.1-60.1-26.8-60.1-60S30.8 3.9 64 3.9s60.1 26.9 60.1 60.1c0 21.1-10.9 39.7-27.4 50.4z'></path>
								<path d='M78.6 73.3l7.5 11.3V41.8h-7.5z'></path>
							</svg>
						</span>
					</div>
				</li>
			</ul>
		</div>
	);
};

export default SkillsIcons;
