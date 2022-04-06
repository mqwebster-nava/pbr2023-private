## Set Up 

- Clone Repo

< Instructions >

set node to latest stable version  
- nvm install --lts
 - nvm use --lts
 
 if don't have yarn, install yarn
 - npm install yarn 
 
install packages
- yarn install


To run
yarn develop

To run storybook 
- yarn run storybook


 
** Add .env.example


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



Program Outcomes: 12
Human-Centered Design: 11
Scalable Solutions: 9
A Day At Nava: 5
User Experience Research: 5
Continuous Improvement: 4
Healthcare: 4
Accessibility and Equity: 3
Agile Development: 3
Careers: 3
Content Strategy: 3
Adapting To Change: 2
Backend Engineering: 2
Crisis Response: 2
Frontend Engineering: 1
Integrated Benefits: 1
Modernization: 1
Policy: 1
Product Management: 1
Program Management: 1
Reducing Risk: 1
Unemployment Insurance: 0
Veterans: 0
What We’re Learning: 0
APIs and Documentation: 0
Cloud Infrastructure: 0