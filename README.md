# Nava PBC Website 

> This is the repository for our company website, [navapbc.com](https://www.navapbc.com/). It is hosted on vercel, and built using the Next.js framework and Contentful as the CMS.

**Note: Pushing to `main` will trigger a new build and release of the site.

# Technical Stack

## Framework: Next.js w/ Typescript 
The site uses the [Next.js](https://nextjs.org/) react framework with typescript. This was chosen because of it's speed, flexibility, and popularity.
## CMS: Contentful CMS
The page and article content and assets live in [Contentful CMS](https://www.contentful.com/). The site interacts with contentful using it's graphql api. Pages are built out of components in contentful which map to components in the `blocks` folder.
## Styling: Tailwind.css
The styling of the site is almost entirely done using [tailwind.css](https://tailwindcss.com/), a flexible utility-first css framework. Utility tokens are defined in `tailwind.config.js`. When necessary, additional styling was added through plain css  scoped by css modules.
## Hosting: Vercel
[Vercel](https://vercel.com/) is a platform for static sites and frontend frameworks. This project lives in our "Nava-Comms" team account in vercel. The repo is linked to vercel so that any time a commit is pushed to `main`, vercel will rebuild and republish the site automatically.

Our `navapbc.com` domain name is also currently managed by vercel. It automatically takes care of SSL certifications. 

## Component Library: Storybook / Chromatic
Storybook is a tool for building component libraries. This is useful for frontend testing and documentation. 
# Contributing
## Setting Up Locally

### Clone the repo 
```
git clone https://github.com/navahq/nava-website.git
```

### Set node to latest stable version  
```
nvm install --lts
nvm use --lts
```
### Install yarn, if don't have it installed already
```
npm install yarn 
```
 
### Install packages and run
```
yarn install
```
### Add variables to env.local
Create an `env.local` file in the root directory. Copy and paste the vars fron `env.example`
### Run the site

```
yarn dev
```
Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Locally running site

### Running the platform
```
yarn dev
```
### Building
```
yarn build
```
###


## Deploy the Site to Navapbc.com

The site is hosted on vercel. The main branch corresponds to the production site. Every time a change in a branch is pushed to github, vercel will make a new preview link with the site.

### Deploy Storybook to Chromatic
Run storybook locally
```
yarn run storybook
```

Publish storybook on chromatic
```
yarn run chromatic
```

# Structure

## File Structure
```
├── components
│   ├── atoms
│   ├── blocks 
│   ├── custom_blocks     One-off components
│   ├── wrappers          Navbar and footer
│   └── templates         Page template
│
├── content               content for migrated reports
│            
├── lib   
│   ├── contentful
│   ├── data
│   ├── contentful
│   ├── graphql_fragments
│   ├── formatPage.ts 
│   └── api.ts
│
├── pages                 site pages 
├── public                site assets
├── shared_interfaces     
├── tests                 (not set up)
├── styles                site-level styles
└── utils                 misc helpers
```







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



## Approach to Component File Structure
Any component row that’s only on a single page goes under custom_blocks. Component rows used throughout the site go in blocks.

Any “atom” component used in only one component row, goes in the folder with that row. “Atom” components that are used across different rows go in the “atoms” folder.

If any atom or row component becomes reusable, we switch its location to atoms or blocks, accordingly. 

If any atom or row component feels redundant, we try to replace it with a core component.

