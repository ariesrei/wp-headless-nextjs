import BlogCard from "@/components/BlogCard";
import Pagination from "@/components/Pagination";
import config from "@/config/config.json";
import { getListPage, getSinglePage } from "@/lib/contentParser";
import { getAllTaxonomy, getTaxonomy } from "@/lib/taxonomyParser";
import { sortByDate } from "@/lib/utils/sortFunctions";
import PageHeader from "@/partials/PageHeader";
import PostSidebar from "@/partials/PostSidebar";
import SeoMeta from "@/partials/SeoMeta";
import { Post } from "@/types";

const { blog_folder, pagination } = config.settings;

import { apiUrl} from '@/app/config';

// for all regular pages
const Posts = async () =>  {

  const req = await fetch(`${apiUrl}/posts?_fields=id,title,excerpt,slug,featured_media,date,author`);
  const currentPosts2 = await req.json()

  // const reqMedia = await fetch(`${apiUrl}/media/${currentPosts2.featured_media}?_fields=source_url`);
  // const feature_image = await reqMedia.json();

 

  // console.log(currentPosts2);

  // const postIndex: Post = getListPage(`${blog_folder}/_index.md`);
  // const { title, meta_title, description, image } = postIndex.frontmatter;
  // const posts: Post[] = getSinglePage(blog_folder);

  // console.log(posts);

 
  // const reqAuthor = await fetch(`${apiUrl}/users/${currentPosts2.author}`);
  // const authorName = await reqAuthor.json();
  
  

  for (let index = 0; index < currentPosts2.length; index++) {

    const reqMedia = await fetch(`${apiUrl}/media/${currentPosts2[index].featured_media}?_fields=source_url`);
    const feature_image = await reqMedia.json();
    currentPosts2[index]['featured_media'] = feature_image.source_url;

    const reqAuthor = await fetch(`${apiUrl}/users/${currentPosts2[index].author}?_fields=name`);
    const authorName = await reqAuthor.json();
    currentPosts2[index]['author'] = authorName.name;
  } 

  const { id, title, excerpt, slug, featured_media, date, author } = currentPosts2;

  
  // console.log(currentPosts2);


  // const allCategories = getAllTaxonomy(blog_folder, "categories");
  // const categories = getTaxonomy(blog_folder, "categories");
  // const tags = getTaxonomy(blog_folder, "tags");


  // const sortedPosts = sortByDate(posts);
  // const totalPages = Math.ceil(posts.length / pagination);
  // const currentPosts = sortedPosts.slice(0, pagination);


 
 

  // const reqMedia = await fetch(`${apiUrl}/media/${about[0].featured_media}?_fields=source_url`);
  // const feature_image = await reqMedia.json();
  

  return (
    <>
      {/* <SeoMeta
        title={title}
        meta_title={meta_title}
        description={description}
        image={image}
      /> */}
      <PageHeader title="Blog" />

      
      <section className="section">
        <div className="container">
          <div className="row gx-5">
            <div className="lg:col-8">
              <div className="row">

                {currentPosts2.map((post: any, index: number) => (
                  <div key={index} className="mb-14 md:col-6">
                    <BlogCard data={post} />
                  </div>
                ))}

                {/* {currentPosts.map((post: any, index: number) => (
                  <div key={index} className="mb-14 md:col-6">
                    <BlogCard data={post} />
                  </div>
                ))} */}


              </div>
              {/* <Pagination
                section={blog_folder}
                currentPage={1}
                totalPages={totalPages}
              /> */}
            </div>

            {/* <PostSidebar
              categories={categories}
              tags={tags}
              allCategories={allCategories}
            /> */}
          </div>
        </div>
      </section>
    </>
  );
};

export default Posts;
