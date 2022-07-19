// Button.stories.ts|tsx
import { ComponentStory, ComponentMeta } from '@storybook/react';
import  PageHeader from './PageHeader';

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'Blocks / Page Header ',
  component: PageHeader,
} as ComponentMeta<typeof PageHeader>;

//👇 We create a “template” of how args map to rendering
const Template: ComponentStory<typeof PageHeader> = (args) => <PageHeader {...args} />;

export const Primary = Template.bind({});

export const Second = Template.bind({});

export const Image = Template.bind({});
export const Post = Template.bind({});


Primary.args = {
    title: "Careers",
    subtitle: "Come help us build the services of a better future for millions of people.",
};

Second.args = {
  title: "Careers",
  subtitle: "Come help us build the services of a better future for millions of people.",
  image: "",
};
// TODO Replace image
Image.args = {
  title: "Careers",
  subtitle: "Come help us build the services of a better future for millions of people.",
  image: {
    description: "",
    height: 720,
    sys: {id: '3ij9n5sQgDhoKdRpiAvphl'},
    title: "Careers Hero",
    url: "https://images.ctfassets.net/t2ekr6eg3fr3/1JUCNfRws7YytAPntXLX4E/5943919906600c4dfc2c49bbb3355ed7/Careers__Hero.png",
    width: 1280,
  },
};

Post.args = {
  subtitle:"Simplifying the social safety net",
  body:"Nava visited communities across the country to understand the everyday experiences of people who rely on and manage the social safety net. These conversations showed us where there are opportunities to try out new processes and tools.",
  image:"",
  title:"Insight",
};




// import React from 'react';

// import { ComponentStory, ComponentMeta } from '@storybook/react';

// import  LargeHero, {LargeHeroInterface } from './LargeHero';

// export default {
//   /* 👇 The title prop is optional.
//   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
//   * to learn how to generate automatic titles
//   */
//   title: 'Blocks / Large Hero',
//   component: LargeHero,
// } as ComponentMeta<typeof LargeHero>;

// //👇 We create a “template” of how args map to rendering
// const Template: ComponentStory<typeof LargeHero> = (args) => <LargeHero {...args} />;

// export const Primary = Template.bind({});

// Primary.args = {
//     title: "Careers",
//     subtitle: "Come help us build the services of a better future for millions of people.",
//     colorTheme: "purple",
//     isStorybook:true
// };