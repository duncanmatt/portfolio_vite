import { useState } from 'react';
import { useMediaQuery } from 'react-responsive';
// import RedditIcon from '@mui/icons-material/Reddit';
import LinkedInIcon from './assets/LinkedIn.tsx';
import GitHubIcon from './assets/Github.tsx';
import nameLogo from './assets/nameLogo.svg';

type Link = {
  id: number;
  title: string;
  url: string;
  icon?: JSX.Element;
};

type Links = {
  links: Array<Link>;
};

function MobileHeader({ links }: Links) {
  const [menuOpen, setMenuOpen] = useState(false);
  const showMenu = () => setMenuOpen(!menuOpen);

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

function DesktopHeader({ links }: Links) {
  return (
    <nav className='desktopHeader'>
      <h1 className='desktopHeaderName'>
        <img className='headerLogo' src={nameLogo} alt='Matt Duncan' />
      </h1>
      <span className='right'>
        {links.map((link) => (
          <a target='_blank' key={link.id} href={link.url} className='navLink'>
            {link.icon ? link.icon : link.title}
          </a>
        ))}
      </span>
    </nav>
  );
}

function Navbar() {
  const links = [
    {
      id: 0,
      title: 'Resume',
      url: 'https://docs.google.com/document/d/148KYcqKCQsYdE5j5iZb6p0FrsT0G4pqw74puKjrwgJM/edit?usp=sharing',
    },
    {
      id: 1,
      title: 'Linkedin',
      url: 'https://linkedin.com/in/matt-duncan-601997268',
      icon: <LinkedInIcon />,
    },
    {
      id: 2,
      title: 'GitHub',
      url: 'https://github.com/duncanmatt',
      icon: <GitHubIcon />,
    },
  ];
  const isMobile = useMediaQuery({ query: '(max-width: 800px)' });

  return (
    <header>
      {isMobile ? (
        <MobileHeader links={links} />
      ) : (
        <DesktopHeader links={links} />
      )}
    </header>
  );
}

export default Navbar;
