import type { Link } from "../types";

type MobileNavMenuLinkProps = {
  link: Link
  toggleMenu: () => void;
}

const MobileNavMenuLink = ({ link, toggleMenu }: MobileNavMenuLinkProps) => {
  return (
    <li key={link.id} className='link'>
      <a
        href={link.url}
        onClick={toggleMenu}
        className='menuLinkContent'
      >
        <span className='menuLinkTitle'>{link.title}</span>
        <span className="menuLinkCaretRight" style={{ display: 'flex', height: 25, width: 25 }}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" id="caret-right">
            <rect width="256" height="256" stroke="none" fill="none"></rect>
            <polyline fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="8" points="96 48 176 128 96 208"></polyline>
          </svg>
        </span>
      </a>
    </li>
  )
};

export default MobileNavMenuLink