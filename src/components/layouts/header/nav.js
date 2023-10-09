import { isEmpty } from "lodash";
import Link from "next/link";
import { useState } from "react"; // Import useState
import Image from "next/image";
import { AiOutlineMenu, AiOutlineClose,AiOutlineUp,AiOutlineDown,AiOutlineRight,AiOutlineLeft} from "react-icons/ai";
import Logo from "@/public/assets/Logo.png"


const Nav = ({ headerMenus }) => {
  if (isEmpty(headerMenus)) {
    return null;
  }

  const [open, setOpen] = useState(false);
  const handleNav = () => {
    setOpenSubMenu(!open);
  }

// open Hautmenu 
 const [ isMenuVisible, setMenuVisibility ] = useState( false );
  // State to track which submenu is open
  const [openSubMenu, setOpenSubMenu] = useState(null);
  // State to track which submenu of children is open
  const [openSubSubmenu, setOpenSubSubmenu] = useState(null);
    // Function to handle submenu click
    const handleSubMenuClick = (menuId, e) => {
      // Prevent the event from propagating and closing the submenu
      e.stopPropagation();
  
      if (openSubMenu === menuId) {
        // Clicking on the same menu item, close the submenu
        setOpenSubMenu(null);
      } else {
        // Clicking on a different menu item, open its submenu
        setOpenSubMenu(menuId);
      }
    };
  
    // Function to handle sub-submenu click
    const handleSubSubmenuClick = (subItemId, e) => {
      // Prevent the event from propagating and closing the submenu
      e.stopPropagation();
  
      if (openSubSubmenu === subItemId) {
        // Clicking on the same sub-submenu item, close the sub-submenu
        setOpenSubSubmenu(null);
      } else {
        // Clicking on a different sub-submenu item, open its sub-submenu
        setOpenSubSubmenu(subItemId);
      }
    };

  return (
    <nav className="bg-white">
      <div className="flex items-center justify-around font-medium">
        <div className="z-50 flex justify-between w-full p-5 md:w-auto">
        <Image
          src={Logo}
          alt="Picture of the author"
          width={120}
          height={500}
           className="md:cursor-pointer h-9"
           />
          <div className="text-3xl md:hidden" onClick={handleNav}>
              <AiOutlineMenu />
          </div>
      </div>
      <div className={`${ isMenuVisible ? 'max-h-full': 'h-0'} flex-grow block w-full lg:flex lg:items-center lg:w-auto z-10`}>
        <div className="text-sm lg:flex-grow">
          {/* Iterate through headerMenus and create navigation links */}
      {headerMenus.map((menu) => {
      const hasChildren = menu.node.childItems.edges.length > 0;
      const parentMenuLink = (
        <Link
          className="inline-block px-3 py-7"
          key={menu.node.id}
          href={menu.node.url}
        >
          {menu.node.label}
        </Link>
      );

      return (
        <div
          key={menu.node.id}
          className={`relative inline-block mt-4 mr-4 text-black-200 lg:inline-block lg:mt-0 ${
            hasChildren ? "hover:text-slate-300 cursor-pointer" : ""
          }`}
          onClick={(e) => {
            if (hasChildren) {
              e.stopPropagation();
              handleSubMenuClick(menu.node.id, e);
            }
          }}
        >
          {hasChildren ? (
            <>
              
              <span className="flex items-center justify-between md:pr-0 group">
                  {menu.node.label}
                  <span className="inline text-sm md:hidden ">
                    {openSubMenu === menu.node.id ? (
                      <AiOutlineDown />
                    ) : (
                      <AiOutlineUp />
                    )}
                  </span>
                  <span className="hidden text-sm md:mt-1 md:ml-1 md:block ">
                    {openSubMenu === menu.node.id ? (
                      <AiOutlineUp />
                    ) : (
                      <AiOutlineDown />
                    )}
                  </span>
                </span>
          
            </>
            
          ) : (
            parentMenuLink
          )}
          {hasChildren && openSubMenu === menu.node.id && (
  <ul className="absolute px-2 mt-6 bg-white border-gray-300 shadow-md borer w-60">
    {menu.node.childItems.edges.map((subItem) => {
      const hasSubSubmenu = subItem.node.childItems.edges.length > 0;
      return (
        <li
          key={subItem.node.id}
          className={`text-sm text-gray-600 text-left pl-2 my-2.5 ${
            hasSubSubmenu ? "hover:text-black cursor-pointer" : ""
          }`}
          onClick={(e) => {
            if (hasSubSubmenu) {
              e.stopPropagation();
              handleSubSubmenuClick(subItem.node.id, e);
            }
          }}
        >
          {hasSubSubmenu ? (
              <>
               <span className="flex items-center justify-between md:pr-0 group">
              <span>{subItem.node.label}</span>
              <span className="ml-2 text-sm">
                {openSubSubmenu === subItem.node.id ? (
                  <AiOutlineRight /> 
                ) : (
                  <AiOutlineRight />
                )}
              </span>
              </span>
            </>
          ) : (
            <Link href={subItem.node.url} as={subItem.node.url}>
              {subItem.node.label}
            </Link>
          )}

          {/* Conditionally render sub-submenu */}
          {hasSubSubmenu && openSubSubmenu === subItem.node.id && (
            <ul className="absolute px-2 py-1 mt-2 bg-white border border-gray-300 shadow-md item w-60" style={{left: '100%', top: 0}}>
              {subItem.node.childItems.edges.map((subSubItem) => (
                <li
                  key={subSubItem.node.id}
                  className="border-b text-slate last:border-0"
                >
                  <Link
                    href={subSubItem.node.url}
                    as={subSubItem.node.url}
                  >
                    {subSubItem.node.label}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </li>
      );
    })}
  </ul>
)}

        
        </div>
      );
    })}
      </div>
        <div>
          <a
            href="#"
            className="inline-block px-4 py-2 mt-4 text-sm leading-none text-white bg-blue-900 border border-white rounded hover:border-transparent hover:text-teal-500 hover:bg-white lg:mt-0"
          >
            Download
          </a>
        </div>
      </div>
      </div>
    </nav>

  );
};

export default Nav;