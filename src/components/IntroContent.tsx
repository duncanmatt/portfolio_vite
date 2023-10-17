import SkillsIcons from './SkillsIcons';

const IntroContent = () => {
  const title = `
    Hello! I'm Matt Duncan, self-taught developer from northern Virginia.
  `;

  return (
    <div className='introContent'>
      <div className='info'>
        <span className='briefAbout'>{title}</span>
      </div>
      <figure>
        <div className='headshotWrapper'>
          <img
            className='headshot'
            src='https://d1suwrqf4r82dt.cloudfront.net/headShotNoBG.png'
            alt='Matt Duncan'
          />
        </div>
      </figure>
      <SkillsIcons />
    </div>
  );
};

export default IntroContent;
