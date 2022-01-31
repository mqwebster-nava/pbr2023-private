## nextjs-tailwindcss-storybook-typescript

This package aims to be a flexible starting point if you want to use Nextjs, TailwindCSS, Storybook and TypeScript.

### TailwindCSS

Instead of using Storybook's own webpack, this repo uses nextjs build pipeline and then includes the generated CSS independently in Storybook.
The only caveat is that you have to place the generated CSS somewhere that can be accessed by storybook webserver.

Please review `package.json` and make changes according to your needs

```json
"tailwind-storybook": "tailwind build ./styles/tailwind.css -o ./public/storybook/tailwind.storybook.css",
"tailwind-storybook-build": "NODE_ENV=production tailwind build ./styles/tailwind.css -o ./storybook-static/storybook/tailwind.storybook.css",
"storybook": "npm run tailwind-storybook && start-storybook -s ./public -p 6006",
"build-storybook": "build-storybook && tailwind-storybook-build"
```

## NextJS default Readme...

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/import?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.


## Notes

Articles Pages (ex /Case-Studies/[slug].js) pull in the Post Data from the CMS (/api/contentful-api),
structures it using the Post Model () ??, and is formatted using the Post Template, which has component parts( such as header )

Contentful Questions
1. How do I set up the fragments for the GraphQL stuff
2. How should I set up the queries?
3. Should I use lists or models for things like tags and content types

If I did everything programatically, I could auto-generate most of pages but would have less custom views

/types/insights
/types/case-studies
/types/news
/types/toolkits
/types/careers
...

/authors/steve-lund
...

/tags/program-outcome
...

Content
/library/equitable-research-recruitment
...
## Resources

https://github.com/dazuaz/nextjs-tailwindcss-storybook-typescript
https://github.com/whitep4nth3r/nextjs-contentful-blog-starter

https://betterprogramming.pub/create-a-blog-app-with-nextjs-and-contentful-api-7927af49b3b
https://github.com/remarkjs/react-markdown

https://stackoverflow.com/questions/54083103/contentful-documenttohtmlstring-doesnt-include-embedded-image-in-rich-text