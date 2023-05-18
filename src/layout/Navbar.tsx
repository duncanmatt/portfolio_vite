import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useMediaQuery } from 'react-responsive';
import {
	RedditOutlined,
	LinkedinOutlined,
	GithubOutlined,
	MenuOutlined,
	CloseOutlined,
	RightOutlined,
} from '@ant-design/icons';

type Link = {
	id: number,
	title: string,
	url: string,
	icon: JSX.Element
}

type Links = {
	links: Array<Link>
}


function MobileHeader({ links }: Links) {
	const [menuOpen, setMenuOpen] = useState(false);
	const showMenu = () => setMenuOpen(!menuOpen);

	return (
		<>
			{menuOpen ? (
				<div className='menuWrapper'>
					<div className='menuUpperContent'>
						<h1 className='mobileHeaderName'>Matt Duncan</h1>
						<CloseOutlined
							onClick={showMenu}
							style={{
								fontSize: '1.2rem',
							}}
						/>
					</div>
					<AnimatePresence>
						<motion.div
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							exit={{ opacity: 0 }}
							className='menuLowerContent'>
							<span className='menuLinks'>
								{links.map(link => (
									<a
										key={link.id}
										href={link.url}
										className='menuLink'
										onClick={showMenu}>
										<div>
											{link.icon} {link.title}
										</div>
										<RightOutlined style={{ alignSelf: 'flex-end' }} />
									</a>
								))}
							</span>
						</motion.div>
					</AnimatePresence>
				</div>
			) : (
				<div className='mobileHeader'>
					<h1 className='mobileHeaderName'>Matt Duncan</h1>
					<MenuOutlined
						onClick={showMenu}
						style={{ paddingInline: '0 1rem', fontSize: '1.2em' }}
					/>
				</div>
			)}
		</>
	);
}

function DesktopHeader({ links }: Links) {
	return (
		<div className='desktopHeader'>
			<h1 className='desktopHeaderName'>Matt Duncan</h1>
			<span className='right'>
				{links.map(link => (
					<a
						key={link.id}
						href={link.url}
						className='header-link'>
						{link.icon}
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
			title: 'Linkedin',
			url: 'https://linkedin.com/in/matt-duncan-601997268',
			icon: <LinkedinOutlined />,
		},
		{
			id: 1,
			title: 'GitHub',
			url: 'https://github.com/duncanmatt',
			icon: <GithubOutlined />,
		},
		{
			id: 2,
			title: 'Reddit',
			url: 'https://www.reddit.com/user/marriedtomdn',
			icon: <RedditOutlined />,
		},
	];
	const isMobile = useMediaQuery({ query: '(max-width: 600px)' });

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
