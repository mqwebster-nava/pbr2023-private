
import ContactSection from "components/custom_blocks/ContactSection/ContactSection";
import PageTemplate from "components/templates/PageTemplate/PageTemplate";
import { getPageDataFromContentful } from "lib/api";
import { PageInterface } from "shared_interfaces/page_interface";


//TODO potentially add a captcha https://developers.google.com/recaptcha/docs/v3
export default function Contact(props: PageInterface) {
 

  return (
    <PageTemplate {...props}>
      <ContactSection/>
    </PageTemplate>
  );
}

export async function getStaticProps({ params, preview = false }) {
  const res: PageInterface = await getPageDataFromContentful({
    slug: "/contact",
    preview: preview,
  });
  return {
    props: res,
  };
}
