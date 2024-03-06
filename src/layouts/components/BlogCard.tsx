import config from "@/config/config.json";
import { markdownify } from "@/lib/utils/textConverter";

import ImageFallback from "@/helpers/ImageFallback";
import dateFormat from "@/lib/utils/dateFormat";
import { humanize, plainify, slugify } from "@/lib/utils/textConverter";
import { Post } from "@/types";
import Link from "next/link";
import { FaRegFolder, FaRegUserCircle } from "react-icons/fa/index.js";

const BlogCard = ({ data }: { data: Post }) => {

  // console.log(data.excerpt);

  const { summary_length, blog_folder } = config.settings;

  // const { id, title.rendered, excerpt, slug, featured_media, date } = data;

  // const image = 
  // console.log( data.title.rendered );

 

  return (
    <div className="bg-body dark:bg-darkmode-body">
      {data.featured_media && (
        <ImageFallback
          className="mb-6 w-full rounded"
          src={data.featured_media}
          alt={data.title.rendered}
          width={445}
          height={230}
        />
      )}
      <h4 className="mb-3">
        <Link href={`/${blog_folder}/${data.slug}`}>{data.title.rendered}</Link>
      </h4>

      <ul className="mb-4">
        <li className="mr-4 inline-block">
          <Link href={`/authors/${data.author}`}>
            <FaRegUserCircle className={"-mt-1 mr-2 inline-block"} />
            {data.author}
          </Link>
        </li>
        {/* <li className="mr-4 inline-block">
          <FaRegFolder className={"-mt-1 mr-2 inline-block"} />
          {categories?.map((category: string, index: number) => (
            <Link key={index} href={`/categories/${slugify(category)}`}>
              {humanize(category)}
              {index !== categories.length - 1 && ", "}
            </Link>
          ))}
        </li> */}
        {data.date && <li className="inline-block">{dateFormat(data.date)}</li>}
      </ul>
      <p className="mb-6">
        {plainify(data.excerpt.rendered!.slice(0, Number(summary_length)))}
      </p>
      <Link
        className="btn btn-outline-primary btn-sm"
        href={`/${blog_folder}/${data.slug}`}
      >
        read more
      </Link>
    </div>
  );
};

export default BlogCard;
