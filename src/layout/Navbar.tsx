import { useState, useEffect, useCallback } from 'react';
import MobileNavMenuLinks from '../components/MobileNavMenuLinks';
import useWindowSize from '../hooks/useWindowSize';

import nameLogo from './assets/nameLogo.svg';
import DesktopNavDropdown from '../components/DesktopNavDropdown';
import type { Link } from '../types';

const infoLinks: Link[] = [
  {
    id: "0",
    title: 'GitHub',
    url: 'https://github.com/duncanmatt',
  },
  {
    id: "1",
    title: 'LinkedIn',
    url: 'https://linkedin.com/in/matt-duncan-601997268',
  },
];

const webLinks: Link[] = [
  {
    id: "0",
    title: 'Black Sheep World',
    url: 'https://dev.d2ev7e5869alah.amplifyapp.com',
  },
  {
    id: "2",
    title: 'GitHub Search',
    url: 'https://github-finder-rho-ivory.vercel.app/',
  },
  {
    id: "3",
    title: 'House Marketplace',
    url: 'https://house-marketplace-nu-ochre.vercel.app/',
  },
];

const mobileLinks: Link[] = [
  {
    id: "0",
    title: 'Dollar Detective',
    url: "https://apps.apple.com/us/app/dollar-detective/id6736560507"
  }
]

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const { width } = useWindowSize();

  const showMenu = useCallback(() => {
    setMenuOpen(!menuOpen);
  }, [menuOpen, setMenuOpen]);

  // check if user isnt on safari or is on browser with that annoying ass scrollbar behaivor

  // useEffect(() => {
  //   menuOpen
  //     ? (document.body.style.overflow = 'hidden')
  //     : (document.body.style.overflow = 'visible');

  // }, [menuOpen]);

  return (
    <header>
      <div className='headerContentWrapper'>
        <div className='headerContent'>
          <div className='mobileHeaderName'>
            <h1>
              <img className='headerLogo' src={nameLogo} alt='Matt Duncan' />
            </h1>
          </div>
          {width <= 1400 ? (
            <ul className='mobileNavActions'>
              <li className='navAction' style={{display: 'flex', height: '100%', alignItems: 'center'}}>
                <button
                  data-open={menuOpen}
                  onClick={showMenu}
                  className='menuToggle'
                ></button>
              </li>
            </ul>
          ) : (
            <div className='desktopNavActions'>
              <DesktopNavDropdown title='Mobile' items={mobileLinks} />
              <DesktopNavDropdown title='Web' items={webLinks} />
              {infoLinks.map((link: Link) => (
                <div style={{ display: 'flex', alignItems: 'center', height: '100%' }}>
                  <a
                    href={link.url}
                    className='link'
                  >
                    <span className='desktopNavInfoLinkTitle'>{link.title}</span>
                  </a>
                </div>
              ))}
            </div>
          )}
        </div>
        </div>
      {width <= 1400 &&
        <div
        data-open={menuOpen}
        className={'navMenu'}
        >
          <nav className='navInner'>
            <MobileNavMenuLinks webLinks={webLinks} mobileLinks={mobileLinks} infoLinks={infoLinks} toggleMenu={showMenu} />
          </nav>
        </div>
      }
    </header>
  );
}


// const TabletDesktopHeader = () => {
//   return (
//     <div></div>
//   )
// }

// const Navbar = () => {
// const links = [
//   {
//     id: 0,
//     title: 'BLACK SHEEP WORLD',
//     url: 'https://dev.d2ev7e5869alah.amplifyapp.com',
//   },
//   {
//     id: 1,
//     title: 'FF AUXILIARY',
//     url: 'https://ffauxiliary.com',
//   },
//   {
//     id: 2,
//     title: 'GITHUB FINDER',
//     url: 'https://github-finder-rho-ivory.vercel.app/',
//   },
//   {
//     id: 3,
//     title: 'HOUSE MARKETPLACE',
//     url: 'https://house-marketplace-nu-ochre.vercel.app/',
//   },
//   {
//     id: 4,
//     title: 'GitHub',
//     url: 'https://github.com/duncanmatt',
//   },
//   {
//     id: 5,
//     title: 'Linkedin',
//     url: 'https://linkedin.com/in/matt-duncan-601997268',
//   },
//   {
//     id: 6,
//     title: 'Resume',
//     url: 'https://docs.google.com/document/d/148KYcqKCQsYdE5j5iZb6p0FrsT0G4pqw74puKjrwgJM/edit?usp=sharing',
//   },
// ];

// return (
//   // <header style={{background: menuOpen ? }}>
//    {<MobileHeader links={links} />
//   // </header>
// );
// };

export default Navbar;
