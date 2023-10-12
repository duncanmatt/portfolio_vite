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
          <picture>
            <img
              className='headshot'
              src='https://d1suwrqf4r82dt.cloudfront.net/mugshotBlk.webp'
              alt='Matt Duncan'
            />
          </picture>
        </div>
      </figure>
      <div className='skillIconsWrapper'>
        <SkillsIcons />
      </div>
    </div>
  );
};

export default IntroContent;
