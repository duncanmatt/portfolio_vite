import { useMediaQuery } from 'react-responsive';
import ProjectCard from './ProjectCard';

function LatestContent() {
  const isLarge = useMediaQuery({
    query: '(min-width: 925px)',
    minDeviceWidth: 925,
    type: 'screen',
  });

  const items = [
    {
      id: 0,
      title: 'FANTASY FOOTBALL AUXILIARY',
      desc: 'Web app made with Next.js which consolidates necessary information for efficient draft research.',
      pic: 'https://d1suwrqf4r82dt.cloudfront.net/ffPreview.webp',
      url: 'https://ffauxiliary.com',
      urlGH: 'https://github.com/duncanmatt/fantasy-football',
    },
    {
      id: 1,
      title: 'GITHUB FINDER',
      desc: 'React app that gives users the ability to search for and view profiles on GitHub by making use of the GitHub API.',
      pic: 'https://d1suwrqf4r82dt.cloudfront.net/ghPreview.webp',
      url: 'https://github-finder-rho-ivory.vercel.app/',
      urlGH: 'https://github.com/duncanmatt/github-finder',
    },
    {
      id: 2,
      title: 'BLACK SHEEP WORLD',
      desc: 'Ecommerce web app built with Next.js which utilizes lambda functions to efficiently perform crucial functionality.',
      pic: 'https://d1suwrqf4r82dt.cloudfront.net/ecommPreview.webp',
      url: 'https://dev.d2ev7e5869alah.amplifyapp.com',
      urlGH: 'https://github.com/duncanmatt/ecomm_next',
    },
    {
      id: 4,
      title: 'HOUSE MARKETPLACE',
      desc: 'React app for posting or viewing real estate listings that are stored with firebase',
      pic: 'https://d1suwrqf4r82dt.cloudfront.net/rePreview.webp',
      url: 'https://house-marketplace-nu-ochre.vercel.app/',
      urlGH: 'https://github.com/duncanmatt/house-marketplace',
    },
  ];

  return (
    <>
      <div className={isLarge ? 'latestLg' : 'latestSm'}>
        <div className='latestCards'>
          {items.map((item) => (
            <ProjectCard key={item.id} {...item} />
          ))}
        </div>
      </div>
    </>
  );
}

export default LatestContent;
