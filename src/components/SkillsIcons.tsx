import { useMediaQuery } from 'react-responsive';

const SkillsIcons = () => {
  const isLarge = useMediaQuery({
    query: '(min-width: 800px)',
    minDeviceWidth: 800,
    type: 'screen',
  });

  return (
    <div className='skillItemsWrapper'>
      <ul className={isLarge ? 'skillItemsLg' : 'skillItems'}>
        <li className='skillItemOuter'>
          <a
            target='_blank'
            href='https://html.spec.whatwg.org'
            className='skillItemInner'
          >
            <span className='skillIconWrapper'>
              <img
                className='skillIcon'
                src={
                  'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg'
                }
                alt='HTML5'
              />
            </span>
          </a>
        </li>
        <li className='skillItemOuter'>
          <a
            target='_blank'
            href='https://www.w3.org/TR/CSS/#css'
            className='skillItemInner'
          >
            <span className='skillIconWrapper'>
              <img
                className='skillIcon'
                src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg'
                alt='CSS3'
              />
            </span>
          </a>
        </li>
        <li className='skillItemOuter'>
          <a
            target='_blank'
            href='https://developer.mozilla.org/en-US/docs/Web/JavaScript'
            className='skillItemInner'
          >
            <span className='skillIconWrapper'>
              <img
                className='skillIcon'
                src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg'
                alt='JavaScript'
              />
            </span>
          </a>
        </li>
        <li className='skillItemOuter'>
          <a
            target='_blank'
            href='https://figma.com'
            className='skillItemInner'
          >
            <span className='skillIconWrapper'>
              <img
                className='skillIcon'
                src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg'
                alt='Figma'
              />
            </span>
          </a>
        </li>
        <li className='skillItemOuter'>
          <a
            target='_blank'
            href='https://github.com'
            className='skillItemInner'
          >
            <span className='skillIconWrapper'>
              <img
                className='skillIcon'
                src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg'
                alt='Git'
              />
            </span>
          </a>
        </li>
        <li className='skillItemOuter'>
          <a
            target='_blank'
            href='https://react.dev'
            className='skillItemInner'
          >
            <span className='skillIconWrapper'>
              <img
                className='skillIcon'
                src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg'
                alt='React'
              />
            </span>
          </a>
        </li>
        <li className='skillItemOuter'>
          <a
            target='_blank'
            href='https://nodejs.org/en'
            className='skillItemInner'
          >
            <span className='skillIconWrapper'>
              <img
                className='skillIcon'
                src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg'
                alt='Node.js'
              />
            </span>
          </a>
        </li>
        <li className='skillItemOuter'>
          <a
            target='_blank'
            href='https://www.mongodb.com'
            className='skillItemInner'
          >
            <span className='skillIconWrapper'>
              <img
                className='skillIcon'
                src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg'
                alt='MongoDB'
              />
            </span>
          </a>
        </li>
        <li className='skillItemOuter'>
          <a
            target='_blank'
            href='https://redux.js.org'
            className='skillItemInner'
          >
            <span className='skillIconWrapper'>
              <img
                className='skillIcon'
                src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg'
                alt='Redux'
              />
            </span>
          </a>
        </li>
        <li className='skillItemOuter'>
          <a
            target='_blank'
            href='https://aws.amazon.com'
            className='skillItemInner'
          >
            <span className='skillIconWrapper'>
              <img
                className='skillIcon'
                alt='Amazon Web Services'
                src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg'
              />
            </span>
          </a>
        </li>
        <li className='skillItemOuter'>
          <a
            target='_blank'
            href='https://www.typescriptlang.org'
            className='skillItemInner'
          >
            <span className='skillIconWrapper'>
              <img
                className='skillIcon'
                src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg'
                alt='TypeScript'
              />
            </span>
          </a>
        </li>
        <li className='skillItemOuter'>
          <a
            target='_blank'
            href='https://nextjs.org'
            className='skillItemInner'
          >
            <span className='skillIconWrapper'>
              <svg
                className='skillIcon'
                fill='#fff'
                xmlns='http://www.w3.org/2000/svg'
                width='100%'
                height='100%'
                viewBox='0 0 128 128'
              >
                <path d='M64 0C28.7 0 0 28.7 0 64s28.7 64 64 64 64-28.7 64-64S99.3 0 64 0zm32.7 114.4L48.4 41.8h-6.8v50.1h6.8V55.3l44.2 61.5c-8.5 4.6-18.2 7.2-28.6 7.2-33.2.1-60.1-26.8-60.1-60S30.8 3.9 64 3.9s60.1 26.9 60.1 60.1c0 21.1-10.9 39.7-27.4 50.4z'></path>
                <path d='M78.6 73.3l7.5 11.3V41.8h-7.5z'></path>
              </svg>
            </span>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default SkillsIcons;
