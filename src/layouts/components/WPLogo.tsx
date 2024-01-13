import DynamicIcon from "@/helpers/DynamicIcon";
import { reqUrl } from '@/app/config';

const WPLogo = async () => {
  const req = await fetch(`${reqUrl}/socials?_fields=id,acf`);
  const socials = await req.json();

  return (
    <ul className="social-icons">
      {/* {socials.map((social: { id: number; acf: { link: { title: string; url: string; target: string; }; icon: string; }; }) => (
       
        <li key={social.id} >
          <a
            aria-label={social.acf.link.title}
            href={social.acf.link.url}
            target={social.acf.link.target}
            rel="noopener noreferrer nofollow"
          >
          <span className="sr-only">{social.acf.link.title}</span>
            <DynamicIcon className="inline-block" icon={social.acf.icon} />
          </a>
        </li>
      ))} */}

    </ul>
  );

}

export default WPLogo;