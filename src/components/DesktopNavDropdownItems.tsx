import type { Link } from "../types";

type DesktopNavDropdownItemsProps = {
  isOpen: boolean;
  items: Link[]
}

const DesktopNavDropdownItems = ({ items }: DesktopNavDropdownItemsProps) => {
  return (
    <ul style={{ display: 'flex', flexDirection: 'column', padding: '1rem', borderRadius: '1rem' }}>
      {items.map((link) => (
        (
          <li className="desktopNavDropdownLink">
            <a href={link.url} id={`${link.id}`} className="link">
              {link.title}
            </a>
          </li>
        )
      ))}
    </ul>
  )
}

export default DesktopNavDropdownItems;
