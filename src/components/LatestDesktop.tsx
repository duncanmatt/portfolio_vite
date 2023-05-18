import ProjectCard from './ProjectCard';
import ghFinderPreview from '../layout/assets/ghFinderPreview.png';
import fbAppPreview from '../layout/assets/fbAppPreview.png';
import bswPreview from '../layout/assets/bswPreview.png';
import hmPreview from '../layout/assets/hmPreview.png';
import ffaPreview from '../layout/assets/ffa.jpg';

function LatestDesktop() {
	const items = [
		{
			id: 0,
			title: 'Fantasy Football Auxiliary',
			desc: 'Web app made with Next.js which consolidates necessary information for efficient draft research.',
			pic: `${ffaPreview}`,
			url: 'https://ffauxiliary.com',
		},
		{
			id: 1,
			title: 'GITHUB FINDER',
			desc: 'React app that gives users the ability to search for and view profiles on GitHub by making use of the GitHub API.',
			pic: `${ghFinderPreview}`,
			url: 'https://github-finder-rho-ivory.vercel.app/',
		},
		{
			id: 2,
			title: 'BLACK SHEEP WORLD',
			desc: 'Website made using the MERN stack for my friend in the process of starting a clothing brand.',
			pic: `${bswPreview}`,
			url: 'https://blacksheepworld.herokuapp.com',
		},
		{
			id: 3,
			title: 'FEEDBACK APP',
			desc: 'React app for leaving reviews that are stored with firebase',
			pic: `${fbAppPreview}`,
			url: 'https://feedback-app-seven-mauve.vercel.app/',
		},
		{
			id: 4,
			title: 'HOUSE MARKETPLACE',
			desc: 'React app for posting or viewing real estate listings that are stored with firebase',
			pic: `${hmPreview}`,
			url: 'https://house-marketplace-nu-ochre.vercel.app/',
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
