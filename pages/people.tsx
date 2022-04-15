import ContentfulApi from "lib/contentful";
import PageTemplate from "components/templates/PageTemplate/PageTemplate";
import { PageProps } from "models/page_models";
import { PageInterface } from "lib/page_data_models";
//https://docs.google.com/document/d/140sOP1bOThae4tYF-HXv2gh9v6PCZV8RQJrwo83yGZE/edit#

export default function People({ page, preview }: PageProps) {
  return page ? (
    <PageTemplate page={page} preview={preview} />
  ) : (
    <div>Error</div>
  );
}

export async function getStaticProps({ params, preview = false }) {
  const res: PageInterface = await ContentfulApi.getPageBySlug("/people", {
    preview: preview,
  });
  return {
    props: { page: res },
  };
}

// export default function People() {

//   return (
//     <div>
//       <PlaceholderPageHeader
//         title={"Our People"}
//         subtitle={"Proven leadership, proud to be among the best at what we do "}
//       />
//       <hr />
//       <SectionHeader
//         title={"Our values guide our work"}
//       >
//         Every day we make countless decisions that inform our ability to improve how government serves everyone. We don’t take that lightly. Our values guide our work, help us ask the right questions, and ultimately help us serve the public.
//       </SectionHeader>
//       <hr />

//       <Newsletter/>
//     </div>
//   );
// }

// export async function getStaticProps({ params, preview = false }) {
//   const res = await ContentfulApi.getPageBySlug("/people", {
//     preview: preview,
//   });
//  return null;
// }
