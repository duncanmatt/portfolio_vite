import { useState } from "react";
import DesktopNavDropdownItems from "./DesktopNavDropdownItems";
import type { Link } from "../types";

type DesktopNavDropdownProps = {
  title: string;
  items: Link[];
};

const DesktopNavDropdown = ({ title, items }: DesktopNavDropdownProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <>
      <div style={{ position: 'relative', display: 'flex', height: '100%'}}>
        <button className="desktopNavDropdownTrigger" onClick={() => setIsOpen(!isOpen)}>
          <span>
            {title}
          </span>
          <svg data-open={isOpen} className="dropdownTriggerChevron" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" id="caret-down">
            <rect width="256" height="256" stroke="none" fill="none"></rect>
            <polyline fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="21" points="208 96 128 176 48 96"></polyline>
          </svg>
        </button>
        <div data-linkType={title.toLowerCase()} data-open={isOpen} className="desktopNavDropdownWrapper">
          {/* {isOpen && */}
            <menu className='desktopNavDropdown'>
              <DesktopNavDropdownItems items={items} isOpen={isOpen} />
            </menu>
          {/* } */}
        </div>
      </div>
    </>
  )
};

export default DesktopNavDropdown;
