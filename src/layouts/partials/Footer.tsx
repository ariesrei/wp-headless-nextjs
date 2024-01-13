// "use client";

import Logo from "@/components/Logo";

import config from "@/config/config.json";
import { markdownify } from "@/lib/utils/textConverter";

import WPFooterMenu from "@/components/WPFooterMenu";
import WPSocial from "@/components/WPSocial";

const Footer = () => {
  const { copyright } = config.params;

  return (
    <footer className="bg-theme-light dark:bg-darkmode-theme-light">
      <div className="container">
        <div className="row items-center py-10">
          <div className="mb-8 text-center lg:col-3 lg:mb-0 lg:text-left">
            <Logo />
          </div>

          <div className="mb-8 text-center lg:col-6 lg:mb-0">
            <WPFooterMenu/>
          </div>
          <div className="mb-8 text-center lg:col-3 lg:mb-0 lg:mt-0 lg:text-right">
            <WPSocial/>
          </div>
        </div>
      </div>
      <div className="border-t border-border py-7 dark:border-darkmode-border">
        <div className="container text-center text-light dark:text-darkmode-light">
          <p dangerouslySetInnerHTML={markdownify(copyright)} />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
