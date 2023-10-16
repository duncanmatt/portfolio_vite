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
      <div className='projCardInner' key={project.id}>
        <figure>
          <iframe
            src={project.url}
            className='projCardLink'
            width='100%'
            height='100%'
          ></iframe>
        </figure>
        <div className='projCardInfo'>
          <h3 className='projCardTitle'>{project.title}</h3>
          <span className='projCardDesc'>{project.desc}</span>
          <div className='projCardActions'>
            <a className='projCardVisit' href={project.url}>
              Visit
            </a>
            <a className='projCardGH' href={project.urlGH}>
              <GitHubIcon />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
