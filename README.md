## Set Up 

1. Clone the repo

1. Set node to latest stable version  
```
nvm install --lts
nvm use --lts
```
Install yarn, if don't have it installed already
```
npm install yarn 
```
 
install packages and run
```
yarn install
yarn dev
```


To run
yarn develop

To run storybook 
- yarn run storybook


 
** Add .env.example


This package aims to be a flexible starting point if you want to use Nextjs, TailwindCSS, Storybook and TypeScript.


## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

## Deploy on Vercel

The site is hosted on vercel. The main branch corresponds to the production site. Every time a change in a branch is pushed to github, vercel will make a new preview link with the site.











## Resources

https://github.com/dazuaz/nextjs-tailwindcss-storybook-typescript
https://github.com/whitep4nth3r/nextjs-contentful-blog-starter

https://betterprogramming.pub/create-a-blog-app-with-nextjs-and-contentful-api-7927af49b3b
https://github.com/remarkjs/react-markdown

https://stackoverflow.com/questions/54083103/contentful-documenttohtmlstring-doesnt-include-embedded-image-in-rich-text

https://www.react-reveal.com/examples/common/

https://storybook.js.org/tutorials/design-systems-for-developers/react/en/introduction/

https://github.com/storybookjs/storybook/blob/next/addons/docs/docs/mdx.md

https://nextjs.org/docs/api-reference/next/image#objectfit





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