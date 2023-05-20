import GitHubIcon from '@mui/icons-material/GitHub';

type Project = {
	id: number;
	title: string;
	desc: string;
	pic: string;
	url: string;
};

function ProjectCard(project: Project) {
	return (
		<div className='projCard'>
			<div
				className='projCardInner'
				key={project.id}>
				<a
					href={project.url}
					className='projCardLink'>
					<picture>
						<img
							className='projCardPic'
							src={project.pic}
							alt={project.title}
						/>
					</picture>
				</a>
				<div className='projCardInfo'>
					<h3 className='projCardTitle'>{project.title}</h3>
					<p className='projCardDesc'>{project.desc}</p>
					<div className='projCardActions'>
						<a
							className='projCardGH'
							href={project.url}>
							<GitHubIcon />
						</a>
						<a
							className='projCardVisit'
							href={project.url}>
							Visit
						</a>
					</div>
				</div>
			</div>
		</div>
	);
}

export default ProjectCard;
