import ProjectCard from './ProjectCard';
import ssGHF from '../layout/assets/ssGHF.svg';
import ssFUI from '../layout/assets/ssFUI.svg';
import ssBSW from '../layout/assets/ssBSW.svg';
import ssHMP from '../layout/assets/ssHMP.svg';
import ssFFA from '../layout/assets/ssFFA.svg';

function LatestDesktop() {
	const items = [
		{
			id: 0,
			title: 'Fantasy Football Auxiliary',
			desc: 'Web app made with Next.js which consolidates necessary information for efficient draft research.',
			pic: `${ssFFA}`,
			url: 'https://ffauxiliary.com',
			urlGH: 'https://github.com/duncanmatt/fantasy-football',
		},
		{
			id: 1,
			title: 'GITHUB FINDER',
			desc: 'React app that gives users the ability to search for and view profiles on GitHub by making use of the GitHub API.',
			pic: `${ssGHF}`,
			url: 'https://github-finder-rho-ivory.vercel.app/',
			urlGH: 'https://github.com/duncanmatt/github-finder',
		},
		{
			id: 2,
			title: 'BLACK SHEEP WORLD',
			desc: 'Website made using the MERN stack for my friend in the process of starting a clothing brand.',
			pic: `${ssBSW}`,
			url: 'https://blacksheepworld.herokuapp.com',
			urlGH: 'https://github.com/duncanmatt/bsw-site',
		},
		{
			id: 3,
			title: 'FEEDBACK APP',
			desc: 'React app for leaving reviews that are stored with firebase',
			pic: `${ssFUI}`,
			url: 'https://feedback-app-seven-mauve.vercel.app/',
			urlGH: 'https://github.com/duncanmatt/feedback-app',
		},
		{
			id: 4,
			title: 'HOUSE MARKETPLACE',
			desc: 'React app for posting or viewing real estate listings that are stored with firebase',
			pic: `${ssHMP}`,
			url: 'https://house-marketplace-nu-ochre.vercel.app/',
			urlGH: 'https://github.com/duncanmatt/house-marketplace',
		},
	];

	return (
		<>
			<div className='latest-lg'>
				<h2>Recent Work</h2>
				<div className='latestCards'>
					{items.map(item => (
						<ProjectCard
							key={item.id}
							{...item}
						/>
					))}
				</div>
			</div>
		</>
	);
}

export default LatestDesktop;
