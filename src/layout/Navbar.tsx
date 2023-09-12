import { useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import RedditIcon from '@mui/icons-material/Reddit';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import MenuSharpIcon from '@mui/icons-material/MenuSharp';
import CloseIcon from '@mui/icons-material/Close';
import nameLogo from './assets/nameLogo.svg';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

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
							<img
								className='headerLogo'
								src={nameLogo}
								alt='Matt Duncan'
							/>
						</h1>
					</div>
					<div className='mobileNavActions'>
						{menuOpen ? (
							<CloseIcon onClick={showMenu} />
						) : (
							<MenuSharpIcon onClick={showMenu} />
						)}
					</div>
				</div>
				<div
					className={`navMenu ${
						menuOpen ? 'mobileMenuOpen' : 'mobileMenuClosed'
					}`}>
					<div className='navInner'>
						<nav className='menuLinks'>
							{links.map(link => (
								<a
									key={link.id}
									href={link.url}
									className='menuLink'
									onClick={showMenu}>
									<div className='menuLinkContent'>{link.title}</div>
									<NavigateNextIcon style={{ alignSelf: 'center' }} />
								</a>
							))}
						</nav>
					</div>
				</div>
			</div>
		</>
	);
}

function DesktopHeader({ links }: Links) {
	return (
		<div className='desktopHeader'>
			<h1 className='desktopHeaderName'>
				<img
					className='headerLogo'
					src={nameLogo}
					alt='Matt Duncan'
				/>
			</h1>
			<span className='right'>
				{links.map(link => (
					<a
						target='_blank'
						key={link.id}
						href={link.url}
						className='navLink'>
						{link.icon ? link.icon : link.title}
					</a>
				))}
			</span>
		</div>
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
			icon: (
				<LinkedInIcon
					style={{ display: 'inline-block', height: '35px', width: '35px' }}
				/>
			),
		},
		{
			id: 2,
			title: 'GitHub',
			url: 'https://github.com/duncanmatt',
			icon: (
				<GitHubIcon
					style={{ display: 'inline-block', height: '35px', width: '35px' }}
				/>
			),
		},
		{
			id: 3,
			title: 'Reddit',
			url: 'https://www.reddit.com/user/marriedtomdn',
			icon: (
				<RedditIcon
					style={{ display: 'inline-block', height: '35px', width: '35px' }}
				/>
			),
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
