"use client";

import { markdownify } from "@/lib/utils/textConverter";
import { reqUrl, baseUrl } from '@/app/config';
import ImageFallback from "@/helpers/ImageFallback";

const HomeServices = async () => {
    const req = await fetch(`${reqUrl}/services?_fields=title,content,featured_media`);
    const services = await req.json();

    for (let index = 0; index < services.length; index++) {
        const reqMedia = await fetch(`${reqUrl}/media/${services[index].featured_media}?_fields=source_url`);
        const feature_image = await reqMedia.json();
        services[index]['source_url'] = feature_image.source_url;
    }

    return (

        <div>
            {services.map((service: { title: { rendered: string }; content: { rendered: string }; source_url: string  }, index: any ) => (
                <section key={index} className={`section-sm ${index % 2 === 0 && "bg-gradient"}`}>
                    
                    <div className="container">     
                        <div className="row items-center justify-between">

                            <div className={`mb:md-0 mb-6 md:col-5 ${ index % 2 !== 0 && "md:order-2" }`} >
                                <ImageFallback
                                src={service.source_url}
                                height={480}
                                width={520}
                                alt={service.title.rendered}
                                />
                            </div>

                            <div className={`md:col-7 lg:col-6 ${index % 2 !== 0 && "md:order-1"}`}>
                                <h2 className="mb-4" dangerouslySetInnerHTML={markdownify(service.title.rendered)} />
                                <div dangerouslySetInnerHTML={markdownify(service.content.rendered)} />
                            </div>

                        </div>
                    </div>

                </section>  
            ))}
        </div>
    );
};

export default HomeServices;
