import PageHeader from "@/partials/PageHeader";
import SeoMeta from "@/partials/SeoMeta"; 
import ContactForm from '@/app/contact/contact-form-7';

const Contact = async () => {

  return (
    <>
      {/* <SeoMeta
        title={title}
        meta_title={meta_title}
        description={description}
        image={image}
      /> */}
      <PageHeader title="Contact Us" />

      <section className="section-sm">
        <div className="container">
          <div className="row">
            <div className="mx-auto md:col-10 lg:col-6">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
