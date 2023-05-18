import { Card } from 'antd';

const { Meta } = Card;

type Project = {
	id: number;
	title: string;
	desc: string;
	pic: string;
	url: string;
};

function ProjectCard(project: Project) {
	return (
		<a href={project.url}>
			<Card
				key={project.id}
				hoverable
				cover={
					<img
						src={project.pic}
						alt={project.title}
						style={{ maxHeight: '300px', maxWidth: '300px' }}
					/>
				}
				style={{
					width: 300,
					height: 450,
					backgroundColor: '#fff',
				}}>
				<Meta
					title={project.title}
					description={project.desc}
				/>
			</Card>
		</a>
	);
}

export default ProjectCard;
