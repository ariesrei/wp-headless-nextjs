import Link from "next/link";
import React from "react";
import config from "@/config/config.json";

import Logo from "@/components/Logo";

import WPHeaderLogo from "@/components/WPHeaderLogo";
import WPHeaderMenu from "@/components/WPHeaderMenu";
import { IoSearch } from "react-icons/io5/index.js";
import ThemeSwitcher from "@/components/ThemeSwitcher";

const Header = () => {

  const { navigation_button, settings } = config;
 
  return (

    <header className={`header z-30 ${settings.sticky_header && "sticky top-0"}`} >
      
      <nav className="navbar container">

        
        {/* <div className="order-0">
          <Logo />
        </div>

         
        <input id="nav-toggle" type="checkbox" className="hidden" />
        <label htmlFor="nav-toggle" className="order-3 cursor-pointer flex items-center lg:hidden text-dark dark:text-white lg:order-1" >
          <svg  id="show-button" className="h-6 fill-current block" viewBox="0 0 20 20" >
            <title>Menu Open</title>
            <path d="M0 3h20v2H0V3z m0 6h20v2H0V9z m0 6h20v2H0V0z"></path>
          </svg>

          <svg id="hide-button" className="h-6 fill-current hidden" viewBox="0 0 20 20" >
            <title>Menu Close</title>
            <polygon points="11 9 22 9 22 11 11 11 11 22 9 22 9 11 -2 11 -2 9 9 9 9 -2 11 -2" transform="rotate(45 10 10)" ></polygon>
          </svg>
        </label> */}
        
        <WPHeaderLogo />
        <WPHeaderMenu />

        <div className="order-1 ml-auto flex items-center md:order-2 lg:ml-0">
          {settings.search && (
            <button
              className="border-border text-dark hover:text-primary dark:border-darkmode-border mr-5 inline-block border-r pr-5 text-xl dark:text-white dark:hover:text-darkmode-primary"
              aria-label="search"
              data-search-trigger
            >
              <IoSearch />
            </button>
          )}
          <ThemeSwitcher className="mr-5" />
          {navigation_button.enable && (
            <Link
              className="btn btn-outline-primary btn-sm hidden lg:inline-block"
              href={navigation_button.link}
            >
              {navigation_button.label}
            </Link>
          )}
        </div>

      </nav>
    </header>
  );
};

export default Header;
