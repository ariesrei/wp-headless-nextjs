import { markdownify } from "@/lib/utils/textConverter";
import { apiUrl } from '@/app/config';
import ImageFallback from "@/helpers/ImageFallback";

const WPHomeBanner = async () => {

    const req = await fetch(`${apiUrl}/frontpage?_fields=id,featured_media,acf`);
    const banner = await req.json();

    const reqMedia = await fetch(`${apiUrl}/media/${banner.featured_media}`);
    const feature_image = await reqMedia.json();

    return (
        <section className="section pt-14">
            <div className="container">
                <div className="row justify-center">

                    <div className="mb-16 text-center lg:col-7">
                        <h1 className="mb-4" dangerouslySetInnerHTML={markdownify(banner.acf.title)} />
                        <p className="mb-8" dangerouslySetInnerHTML={markdownify(banner.acf.description ?? "")} />
                        {banner.acf.url && (
                            <a className="btn btn-primary" href={banner.acf.url}>
                                {banner.acf.btn_label}
                            </a>
                        )}
                    </div>
                
                    {feature_image.guid.rendered && (
                        <div className="col-12">
                            <ImageFallback
                            src={feature_image.guid.rendered}
                            className="mx-auto"
                            width="800"
                            height="420"
                            alt={feature_image.slug}
                            />
                        </div>
                    )}
                     
                </div>
            </div>
        </section>
    );
};

export default WPHomeBanner;
