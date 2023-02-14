# Nava PBC Website 

> This is the repository for our company website, [navapbc.com](https://www.navapbc.com/). It is hosted on vercel, and built using the Next.js framework and Contentful as the CMS.

**Note: Pushing to `main` will trigger a new build and release of the site.

# Technical Stack

## Hosting: Vercel
[Vercel](https://vercel.com/) is a platform for static sites and frontend frameworks. This project lives in our "Nava-Comms" team account in vercel. The repo is linked to vercel so that any time a commit is pushed to `main`, vercel will rebuild and republish the site automatically.

Our `navapbc.com` domain name is also currently managed by vercel. It automatically takes care of SSL certifications. 

## CMS: Contentful CMS
The page and article content and assets live in [Contentful CMS](https://www.contentful.com/). The site interacts with contentful using it's graphql api. Pages are built out of components in contentful which map to components in the `blocks` folder.
## Framework: Next.js w/ Typescript 
The site uses the [Next.js](https://nextjs.org/) react framework with [typescript](https://www.typescriptlang.org/). This was chosen because of it's speed, flexibility, and popularity. The repo isn't strict typescript so javascript files can also be used if need be.
## Styling: Tailwind.css
The styling of the site is almost entirely done using [tailwind.css](https://tailwindcss.com/), a flexible utility-first css framework. Utility tokens are defined in `tailwind.config.js`. When necessary, additional styling was added through plain css  scoped by css modules.
## Component Library: Storybook / Chromatic
[Storybook](https://storybook.js.org/) is a tool for building component libraries. This is useful for frontend testing and documentation. Since our site is primarily built out of 'blocks' chosen in the CMS, this helps us document and test those blocks.

[Chromatic](https://www.chromatic.com/) hosts the storybook on a public link ( https://main--62c4782b65a749485ef12359.chromatic.com/ ) and provides tools for performing visual regression tests on the components. A webhook was set up in `.github/workflows/chromatic.yml` to rebuild the storybook when a commit is pushed.

## Analytics: Vercel Vitals / Google Analytics
Vercel automatically performs anayltics to track web vitals on site pages. These can be seen on the [vercel analytics page](https://vercel.com/nava-comms/nava-website/analytics).

Google Analtyics is also used to track page views and other events. 

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

The site is hosted on vercel. The `main` branch corresponds to the production site. Every time a change in a branch is pushed to github, vercel will make a new preview link with the site. 

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
├── lib/data_models     
├── tests                 (not set up)
├── styles                site-level styles
├── utils                 misc helpers
├── package.json          list of packages added
├── next.config.js        hosting configs (redirects etc)
└── tailwind.config.css   tailwind variable overrides
```

## Pages
All pages have at least some information stored in Contentful. Before rendering, their content is converted into the `PageInterface` model, which stores metadata and page content data.
```
// Page Interface Model
export interface PageInterface {
  id: string;
  slug: string;
  title: string;  
  description: string;
  socialImage?: ContentfulImageAsset;
  preview?: boolean;
  pageHeader: PageHeaderInterface;
  contentBlocks: any; // data for page components
  isBottomGapRemoved?: boolean;
}
```


The 4 primary types of pages listed below determine how they are rendered on the site.

<br/>

### **Site Pages**

The primary way pages are built is by using the `[Site] Page Content` model in contentful. 

![Semantic description of image](/public/readme/sitepagecontentmodel.png)*Page content model in contentful*

The title, description, slug, and promo image are used for metadata for the page. **A file matching the slug exactly must be in the `pages` folder** for page to render.

The page header and content fields contain Contentful models that are used to render the components on the page. They are formatted in the `lib` file, then rendered in `components/templates/PageTemplates`

**How to create a new site page **
1. Create an new `[Site] Page Content` entry in contentful, make sure to include the slug you plan to use for the page
2. Create a new page in `/pages` folder following the pattern of the other pages. Make sure the SLUG in the code matches the one in contentful 
![New Page Code](/public/readme/new-page-code.png)*Page content model in contentful*

<br/>

### **Article Pages**

Article pages include all insights, events, case stuides, news, and toolkits. They all use the same `Post` data model in Contentful. The articles are rendered in the `pages/[article type]/[slug]` by calling functions in `lib/api.ts.` They are converted from a `Post` data model to a `Page Interface` model in `lib/formatPage.ts` before being rendered in the same way Site Pages are.

<br/>

### **Author / Tag pages**

These pages are a collection of posts related to a specific article or tag.

<br/>

### **Migrated Report Pages**

The PBR 2018, PBR 2019, PBR 2020, and DEI pages were migrated over from the past site without major redesigns. Their page data is stored in Markdown files in the `content` folder rather than Contentful and they use custom _report_ components for their layout.

<br/>




## Blocks (Components)
Each page is built from stacking `blocks` on top of each other. Each block corresponds to a `[Section]` data model in Contentful. 

**Block Types**

- `blocks` - General block components used throughout the site. They usually match up directly with content models in contentful
- `custom_blocks` - Block components used on only 1 or 2 pages that often have some addition logic involved to set them up. (Ex open roles component pulls from the lever api)
- `report_blocks` - Blocks only used in the Public Benefit Reports. These reports have unique looks which often require special components.


**How to create a Block - ex Quote Block**

1. Create Contentful Model for a page component 
![Semantic description of image](/public/readme/quote-contentful.png)*Quote content model in contentful*

2. Add model to validation of the `[Site] Page Content` model ([link here](https://app.contentful.com/spaces/t2ekr6eg3fr3/content_types/pageContent/fields))

![Semantic description of image](/public/readme/acc.png)*Quote content model in contentful*



3. Add GraphQL Query for new component - create a new file in `lib/graphql_fragments` for the component and add the fields you want to pull in. Then go to `lib/PAGE_FIELDS.ts` and add the new type into the contentCollection section.

![Semantic description of image](/public/readme/graphql-quot.png)*Quote graphql query* 

4. Create a component in `components/blocks` with the same variable names as in contentful

```
interface QuoteBlockInterface {
  id?: string;
  body: string;
  authorName: string;
  authorRole: string;
}
const QuoteBlock = ({
  body,
  authorName,
  authorRole,
}: QuoteBlockInterface) => {
    ...
}
```
5. Connect the component to the data in `components/templates/PageTemplate`

```
const PageTemplate = ({
  pageHeader, 
  contentBlocks,
}) => {
  const getComponent = (entry: any, index) => {
    const componentMap = {
      "QuoteBlock": 
         ()=> <QuoteBlock key={index} {...entry}/>,
	    ...
     } 
   ...
  };
};
```


### Blocks

## Resources

https://github.com/dazuaz/nextjs-tailwindcss-storybook-typescript
https://github.com/whitep4nth3r/nextjs-contentful-blog-starter

https://betterprogramming.pub/create-a-blog-app-with-nextjs-and-contentful-api-7927af49b3b
https://github.com/remarkjs/react-markdown


https://storybook.js.org/tutorials/design-systems-for-developers/react/en/introduction/




## Approach to Component File Structure
Any component row that’s only on a single page goes under custom_blocks. Component rows used throughout the site go in blocks.

Any “atom” component used in only one component row, goes in the folder with that row. “Atom” components that are used across different rows go in the “atoms” folder.

If any atom or row component becomes reusable, we switch its location to atoms or blocks, accordingly. 

If any atom or row component feels redundant, we try to replace it with a core component.
