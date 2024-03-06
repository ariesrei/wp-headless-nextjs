import ImageFallback from "@/helpers/ImageFallback";
import MDXContent from "@/helpers/MDXContent";
import { markdownify } from "@/lib/utils/textConverter";
import SeoMeta from "@/partials/SeoMeta";
import { apiUrl} from '@/app/config';
import PageHeader from "@/partials/PageHeader";

const PrivacyPolicy = async () => {

  const req = await fetch(`${apiUrl}/pages?slug=privacy-policy&_fields=id,title,content,excerpt,featured_media`);
  const about = await req.json()

  const reqMedia = await fetch(`${apiUrl}/media/${about[0].featured_media}?_fields=source_url`);
  const feature_image = await reqMedia.json();
  
  // console.log(feature_image);
  // console.log(about);
 
  return (
    <>
      {!about.length && (
        <>
        <section className="section-sm">
          <div className="container">

            <div className="row justify-center">
              <div className="text-center md:col-10 lg:col-7">
                <h2 className="h3 mb-6"> Privacy policy page is missing or not publish! </h2>
              </div>
            </div>
          </div>
        </section>
        </>
      )} 


      {about.length && (
        <>
        <PageHeader title={about[0].title.rendered} />
        <SeoMeta
          title={about[0].title.rendered}
          meta_title={about[0].title.rendered}
          description={about[0].excerpt.rendered} 
          image={feature_image.source_url}
        />

        <section className="section-sm">
          <div className="container">
            <div className="row justify-center">
              <div className="text-left md:col-10 lg:col-7">

                  {feature_image.source_url && (
                    <ImageFallback
                      className="mx-auto mb-6 rounded-lg"
                      src={feature_image.source_url}
                      width={200}
                      height={200}
                      alt={about[0].title.rendered}
                    />
                  )}
 
                <div className="content">
                  <MDXContent content={about[0].content.rendered} />
                </div>

              </div>
            </div>
          </div>
        </section>
        </>
      )}
    </>
  );
};

export default PrivacyPolicy;