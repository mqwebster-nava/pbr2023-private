/*
 * https://nextjs.org/docs/advanced-features/preview-mode
 */

import { getPageDataFromContentful } from "lib/api";
import getPostBySlug from "lib/contentful/getPostBySlug";


const contentTypesMap = {
  "Case Study": "/case-studies/",
  "Insight": "/insights/",
  "News": "/news/",
  "Toolkit": "/toolkits/",
  "Working at Nava": "/working-at-nava/",
  "Events":"/events/"
}



export default async function preview(req, res) {
  /*
   * Check for the secret and query parameters.
   * This secret should only be known to this API route and the CMS.
   *
   * Set your content preview URLS in Contentful > Settings > Content Preview
   *
   * The preview URL for the blogPost content type is
   * http://localhost:3000/api/preview?secret={SECRET}&slug={entry.fields.slug}&contentType=blogPost
   *
   * The preview URL for the pageContent content type is
   * http://localhost:3000/api/preview?secret={SECRET}&slug={entry.fields.slug}&contentType=pageContent
   *
   */
  if (
    req.query.secret !== process.env.CONTENTFUL_PREVIEW_SECRET ||
    !req.query.slug ||
    !req.query.type
  ) {
    return res.status(401).json({ message: "Invalid options" });
  }

  // Fetch the page or blog content by slug using the Contentful Preview API.
  let preview = null;
  let redirectUrl = "/";
  if(req.query.type=="post" && req.query.contentType){
    preview = await getPageDataFromContentful({slug:req.query.slug, 
      variant:"post",
      preview: true,
    });
    let redirectPrefix = contentTypesMap[req.query.contentType] ;
    redirectUrl = `${redirectPrefix}${preview.post.slug}`;

  }
  if (req.query.type=="page"){
    preview = await getPageDataFromContentful({slug:req.query.slug, 
      preview: true,
    });
    redirectUrl = `${preview.slug}`;
  }
  // Prevent Next.js preview mode from being enabled if the content doesn't exist.
  if (!preview) {
    return res.status(401).json({ message: "Invalid slug Preview" });
  }
  res.setPreviewData({
    maxAge: 60 * 60,
  });

  /*
   * Redirect to the path from the fetched post.
   * We don't redirect to req.query.slug as that might lead to open redirect vulnerabilities.
   */

  
  res.write(
    `<!DOCTYPE html><html><head><meta http-equiv="Refresh" content="0; url=${redirectUrl}" />
    <script>window.location.href = '${redirectUrl}'</script>
    </head>`,
  );
  res.end();
}
