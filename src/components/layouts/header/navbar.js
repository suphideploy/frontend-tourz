import { isEmpty } from "lodash";
import Link from "next/link";
import { useState } from "react"; // Import useState
import Image from "next/image";
import { AiOutlineMenu, AiOutlineClose,AiOutlineUp,AiOutlineDown,AiOutlineRight,AiOutlineLeft} from "react-icons/ai";


const Nav = ({ headerMenus }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleMouseOver = () => {
    setIsOpen(true);
  };

  const handleMouseOut = () => {
    setIsOpen(false);
  };
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
        <div className="hidden lg:block">
        <div className="container z-50">
          <div className="flex w-fit gap-10 mx-auto font-medium py-4 text-blackish">
            {headerMenus.map((menu) => {
            const hasChildren = menu.node.childItems.edges.length > 0;
            const parentMenuLink = (
                <Link
                className="navbar__link relative"
                key={menu.node.id}
                href={menu.node.url}
                >
                {menu.node.label}
                </Link>
            );
            return (
            <div 
            key={menu.node.id}
            className={`group relative ${
                hasChildren ? "hover:text-blue-500 cursor-pointer" : ""}` }
                onClick={(e) => {
                    if (hasChildren) {
                      e.stopPropagation();
                      handleSubMenuClick(menu.node.id, e);
                    }
                  }}
            >
            {hasChildren ? (
            <>
            <span
            className="flex items-center justify-between md:pr-0 group cursor-pointer"
            onClick={(e) => {
                e.preventDefault(); // Prevent the default link behavior
                handleSubMenuClick(menu.node.id, e);
            }}
            >
            {menu.node.label}
            <span className="inline text-sm md:hidden">
                {openSubMenu === menu.node.id ? (
                <AiOutlineDown />
                ) : (
                <AiOutlineUp />
                )}
            </span>
            <span className="hidden text-sm md:mt-1 md:ml-1 md:block">
                {openSubMenu === menu.node.id ? <AiOutlineUp /> : <AiOutlineDown />}
            </span>
            </span>

            </>
            
            ) : (
              parentMenuLink
            )}
             {hasChildren && openSubMenu === menu.node.id && (
            <nav
            tabIndex="0"
                    className={`border border-2 z-10 bg-white border-gray-300 rounded w-60 absolute left-0 top-full transition-all ${
                        openSubMenu === menu.node.id ? 'block' : 'hidden'
                    }`}
            
            >
                <ul className="py-1">
                    {menu.node.childItems.edges.map((subItem) => {
                    const hasSubSubmenu = subItem.node.childItems.edges.length > 0;
                    return (
                        <li
                        key={subItem.node.id}
                        className={`block px-4 py-2 ${
                          hasSubSubmenu ? "hover:bg-red-300" : ""
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
            <ul className="absolute px-2 py-1 mt-2 ml-1 bg-white border border-gray-300 shadow-md item w-60"  style={{ left: '100%', top: '0' }}>
              {subItem.node.childItems.edges.map((subSubItem) => (
                <li
                  key={subSubItem.node.id}
                  className="block px-4 py-2"
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
                
            </nav>
           )}
         </div>
           
         );
        })}
          </div>
         
        </div>
      </div>
      );
    };
    export default Nav;
