import { useState, useEffect } from 'react';
import nameLogo from './assets/nameLogo.svg';

type Link = {
  id: number;
  title: string;
  url: string;
};

type Links = {
  links: Array<Link>;
};

function MobileHeader({ links }: Links) {
  const [menuOpen, setMenuOpen] = useState(false);
  const showMenu = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    menuOpen
      ? (document.body.style.overflow = 'hidden')
      : (document.body.style.overflow = 'visible');
  }, [menuOpen]);

  return (
    <>
      <div className='mobileHeaderWrapper'>
        <div className='mobileHeader'>
          <div className='mobileHeaderName'>
            <h1>
              <img className='headerLogo' src={nameLogo} alt='Matt Duncan' />
            </h1>
          </div>
          <ul className='mobileNavActions'>
            <li className='navAction'>
              <button
                data-open={menuOpen}
                onClick={showMenu}
                className='menuToggle'
              ></button>
            </li>
          </ul>
        </div>
        <div
          className={`navMenu ${
            menuOpen ? 'mobileMenuOpen' : 'mobileMenuClosed'
          }`}
        >
          <nav className='navInner'>
            <menu className='menuLinks'>
              {links.map((link) => (
                <li key={link.id} className='menuLink'>
                  <a
                    href={link.url}
                    onClick={showMenu}
                    className='menuLinkContent'
                  >
                    <span className='menuLinkTitle'>{link.title}</span>
                  </a>
                </li>
              ))}
            </menu>
          </nav>
        </div>
      </div>
    </>
  );
}

function Navbar() {
  const links = [
    {
      id: 0,
      title: 'BLACK SHEEP WORLD',
      url: 'https://dev.d2ev7e5869alah.amplifyapp.com',
    },
    {
      id: 1,
      title: 'FF AUXILIARY',
      url: 'https://ffauxiliary.com',
    },
    {
      id: 2,
      title: 'GITHUB FINDER',
      url: 'https://github-finder-rho-ivory.vercel.app/',
    },
    {
      id: 3,
      title: 'HOUSE MARKETPLACE',
      url: 'https://house-marketplace-nu-ochre.vercel.app/',
    },
    {
      id: 4,
      title: 'GitHub',
      url: 'https://github.com/duncanmatt',
    },
    {
      id: 5,
      title: 'Linkedin',
      url: 'https://linkedin.com/in/matt-duncan-601997268',
    },
    {
      id: 6,
      title: 'Resume',
      url: 'https://docs.google.com/document/d/148KYcqKCQsYdE5j5iZb6p0FrsT0G4pqw74puKjrwgJM/edit?usp=sharing',
    },
  ];

  return (
    <header>
      <MobileHeader links={links} />
    </header>
  );
}

export default Navbar;
