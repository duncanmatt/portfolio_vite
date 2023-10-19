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
      <ul className='introLinks'>
        <li className='introLinkWrapper'>
          <a
            target='_blank'
            className='introLink'
            href='https://linkedin.com/in/matt-duncan-601997268'
          >
            LinkedIn
          </a>
        </li>
        <li className='introLinkWrapper'>
          <a
            target='_blank'
            className='introLink'
            href='https://github.com/duncanmatt'
          >
            GitHub
          </a>
        </li>
      </ul>
    </div>
  );
};

export default IntroContent;
