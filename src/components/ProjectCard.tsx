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
					<span className='projCardActions'></span>
				</div>
			</div>
		</div>
	);
}

export default ProjectCard;
