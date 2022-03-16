/*
 * https://nextjs.org/docs/advanced-features/preview-mode
 */

import ContentfulApi from "lib/contentful";

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
  let redirectPrefix = "";
  if(req.query.type=="post" && req.query.contentType){
    preview = await ContentfulApi.getPostBySlug(req.query.slug, {
      preview: true,
    });

    redirectPrefix = "/case-studies/";
  }

  // Prevent Next.js preview mode from being enabled if the content doesn't exist.
  if (!preview) {
    return res.status(401).json({ message: "Invalid slug Preview" });
  }
  res.setPreviewData({});

  /*
   * Redirect to the path from the fetched post.
   * We don't redirect to req.query.slug as that might lead to open redirect vulnerabilities.
   */

  const url = `${redirectPrefix}${preview.post.slug}`;

  res.write(
    `<!DOCTYPE html><html><head><meta http-equiv="Refresh" content="0; url=${url}" />
    <script>window.location.href = '${url}'</script>
    </head>`,
  );
  res.end();
}
