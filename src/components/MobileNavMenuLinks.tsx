import MobileNavMenuLink from "./MobileNavMenuLink";
// import caretRight from "../layout/assets/caretRight.svg";
import type { Link } from "../types";

type MobileNavMenuLinksProps = {
  infoLinks: Link[];
  webLinks: Link[];
  mobileLinks: Link[];
  toggleMenu: () => void;
}


const MobileNavMenuLinks = ({ infoLinks, webLinks, mobileLinks, toggleMenu }: MobileNavMenuLinksProps) => {
  return (
    <menu className="menuLinks">
      <div>
        <h4 className="navMenuHeader">Web</h4>
        <ul className="navMenuLinkGroup">
          {webLinks.map((link: Link) => (
            <MobileNavMenuLink key={link.id} link={link} toggleMenu={toggleMenu} />
          ))}
        </ul>
      </div>
      <div>
        <h4 className="navMenuHeader">Mobile</h4>
        <ul className="navMenuLinkGroup">
          {mobileLinks.map((link: Link) => (
            <MobileNavMenuLink key={link.id} link={link} toggleMenu={toggleMenu} />
          ))}
        </ul>
      </div>
      <ul style={{ paddingTop: 'auto', paddingBottom: '1rem' }} className="navMenuLinkGroup">
        {infoLinks.map((link: Link) => (
          <MobileNavMenuLink key={link.id} link={link} toggleMenu={toggleMenu} />
        ))}
      </ul>

    </menu>
  )
};

export default MobileNavMenuLinks;