import DynamicIcon from "@/helpers/DynamicIcon";
import { apiUrl } from '@/app/config';

import Logo from "@/components/Logo";


const WPHeaderLogo = async () => {
  return (
    <>
    <div className="order-0">
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
    </label>
    </>
  );
}

export default WPHeaderLogo;