import { reqUrl } from '@/app/config';
import Link from "next/link";

const WPFooterMenu = async () => {
    const req = await fetch(`${reqUrl}/wp-next-menu`);
    const menu = await req.json();

    return (
        <ul>
            {menu.footer.map((menu: any) => (
            <li className="m-3 inline-block" key={menu.name}>
                <Link href={menu.url}>{menu.name}</Link>
            </li>
            ))}
        </ul>
    );

}

export default WPFooterMenu; 