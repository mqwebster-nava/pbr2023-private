
import ContactSection from "components/custom_blocks/ContactSection/ContactSection";
import PageTemplate from "components/templates/PageTemplate/PageTemplate";
import { getPageDataFromContentful } from "lib/api";
import { PageInterface } from "lib/data_models/page_interface";


//TODO potentially add a captcha https://developers.google.com/recaptcha/docs/v3
export default function Contact(props: PageInterface) {
  return (
    <PageTemplate {...props}/>
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
