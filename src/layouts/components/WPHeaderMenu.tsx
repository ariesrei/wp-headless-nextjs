import { baseUrl, reqUrl } from '@/app/config';
import Link from "next/link";
import React from "react";
import config from "@/config/config.json";

export interface IChildNavigationLink {
  name: string;
  url: string;
}

export interface INavigationLink {
  name: string;
  url: string;
  hasChildren?: boolean;
  children?: IChildNavigationLink[];
}

const WPHeaderMenu = async () => {

  const req = await fetch(`${reqUrl}/wp-next-menu`);
  const wpnextmenus = await req.json();
  const { main }: { main: INavigationLink[] } = wpnextmenus;
  const pathname = baseUrl;
  
  const { navigation_button, settings } = config;

  return (

    <ul id="nav-menu" className="navbar-nav order-3 hidden w-full pb-6 lg:order-1 lg:flex lg:w-auto lg:space-x-2 lg:pb-0 xl:space-x-8">
 
      {main.map((menu, i) => (
        <React.Fragment key={`menu-${i}`}>
          {menu.hasChildren ? ( 
            <li className="nav-item nav-dropdown group relative">
              <span className={`nav-link inline-flex items-center ${
                  menu.children?.map(({ url }) => url).includes(pathname) ||
                  menu.children
                  ?.map(({ url }) => `${url}/`)
                  .includes(pathname) ? "active" : "" }`}
              >
              {menu.name}
              <svg className="h-4 w-4 fill-current" viewBox="0 0 20 20">
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
              </svg>
              </span>
              <ul className="nav-dropdown-list hidden group-hover:block lg:invisible lg:absolute lg:block lg:opacity-0 lg:group-hover:visible lg:group-hover:opacity-100">
              {menu.children?.map((child, i) => (
                  <li className="nav-dropdown-item" key={`children-${i}`}>
                  <Link href={child.url} className={`nav-dropdown-link block ${(pathname === `${child.url}/` || pathname === child.url) && "active" }`} >
                      {child.name}
                  </Link>
                  </li>
              ))}
              </ul>
          </li>
          ) : (
            <li className="nav-item">
              <Link href={menu.url} className={`nav-link block ${(pathname === `${menu.url}/` || pathname === menu.url) && "active" }`} >
                {menu.name}
              </Link>
          </li>
          )}
        
        </React.Fragment>
      ))}

      {navigation_button.enable && (
      <li className="mt-4 inline-block lg:hidden">
          <Link
          className="btn btn-outline-primary btn-sm"
          href={navigation_button.link}
          >
          {navigation_button.label}
          </Link>
      </li>
      )}

    </ul>

  );

}

export default WPHeaderMenu;