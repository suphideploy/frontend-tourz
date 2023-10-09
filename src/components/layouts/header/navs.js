import { isEmpty } from "lodash";
import Link from "next/link";
import { useState } from "react"; // Import useState

const Nav = ({ headerMenus }) => {
  if (isEmpty(headerMenus)) {
    return null;
  }

// open Hautmenu 
 const [ isMenuVisible, setMenuVisibility ] = useState( false );
  // State to track which submenu is open
  const [openSubMenu, setOpenSubMenu] = useState(null);

  // Function to handle submenu click
  const handleSubMenuClick = (menuId) => {
    if (openSubMenu === menuId) {
      // Clicking on the same menu item, close the submenu
      setOpenSubMenu(null);
    } else {
      // Clicking on a different menu item, open its submenu
      setOpenSubMenu(menuId);
    }
  };

  return (
    <nav className="flex flex-wrap items-center justify-between p-6 bg-teal-500">
      <div className="flex items-center flex-shrink-0 mr-6 text-white">
        <svg
          className="w-8 h-8 mr-2 fill-current"
          width="54"
          height="54"
          viewBox="0 0 54 54"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z" />
        </svg>
        <span className="text-xl font-semibold tracking-tight">Tailwind CSS</span>
      </div>
      <div className="block lg:hidden">
        <button 
        onClick={() => setMenuVisibility(! isMenuVisible)}
        className="flex items-center px-3 py-2 text-teal-200 border border-teal-400 rounded hover:text-white hover:border-white">
          <svg className="w-3 h-3 fill-current" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>
      <div className={`${ isMenuVisible ? 'max-h-full': 'h-0'} flex-grow block w-full lg:flex lg:items-center lg:w-auto`}>
        <div className="text-sm lg:flex-grow">
          {/* Iterate through headerMenus and create navigation links */}
          {headerMenus.map((menu) => {
            const hasChildren = menu.node.childItems.edges.length > 0;
            const parentMenuLink = (
                <Link
                    className="header-nav__menu-link" 
                    key={menu.node.id}
                    href={menu.node.url}
                >
                    { menu.node.label }
                </Link>
            );
            return (
              <div
                key={menu.node.id}
                className={`relative inline-block mt-4 mr-4 text-teal-200 lg:inline-block lg:mt-0 ${
                  hasChildren ? "hover:text-white cursor-pointer" : ""
                }`}
                onClick={() => {
                  if (hasChildren) {
                    handleSubMenuClick(menu.node.id);
                  }
                
                }}

              >
               { hasChildren ? (
                <span>
                  {menu.node.label}
                </span>
                ) : parentMenuLink }
                {/* Conditionally render submenu */}
                {hasChildren && openSubMenu === menu.node.id && (
                  <ul className="absolute mt-2 bg-white border border-gray-300">
                    {menu.node.childItems.edges.map((subItem) => (
                      <li key={subItem.node.id} className="border-b last:border-0 text-black">
                        <Link href={subItem.node.url} as={subItem.node.url}>
                          {subItem.node.label} {/* Use <Link> for submenu items */}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            );
          })}
        </div>
        <div>
          <a
            href="#"
            className="inline-block px-4 py-2 mt-4 text-sm leading-none text-white border border-white rounded hover:border-transparent hover:text-teal-500 hover:bg-white lg:mt-0"
          >
            Download
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Nav;