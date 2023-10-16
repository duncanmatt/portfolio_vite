import GitHubIcon from '../layout/assets/Github.tsx';

type Project = {
	id: number;
	title: string;
	desc: string;
	pic: string;
	url: string;
	urlGH: string;
};

function ProjectCard(project: Project) {
	return (
		<div className='projCard'>
			<div
				className='projCardInner'
				key={project.id}>
				<figure className='frameWrapper'>
					<iframe
						scrolling='no'
						seamless
						loading='lazy'
						src={project.url}
						className='projCardLink'></iframe>
				</figure>
				<div className='projCardInfo'>
					<h3 className='projCardTitle'>
						<div>{project.title}</div>
					</h3>
					<p className='projCardDesc'>{project.desc}</p>
					<div className='projCardActions'>
						<a
							className='projCardVisit'
							href={project.url}>
							Visit
						</a>
						<a
							className='projCardGH'
							href={project.urlGH}>
							<GitHubIcon />
						</a>
					</div>
				</div>
			</div>
		</div>
	);
}

export default ProjectCard;
