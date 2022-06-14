// Button.stories.ts|tsx
import { ComponentStory, ComponentMeta } from '@storybook/react';
import  FeaturedArticle from './FeaturedArticle';
export default {

  title: 'Blocks / Featured Article',
  component:  FeaturedArticle,
} as ComponentMeta<typeof  FeaturedArticle>;

//👇 We create a “template” of how args map to rendering
const Template: ComponentStory<typeof  FeaturedArticle> = (args) => < FeaturedArticle  {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  "title": "Want to work with us?",
  "summary": "Let’s make government services simple, effective, and accessible to all.",
  "path":"/",
  kicker:"U.S. Department of Veterans Affairs",
  promoImage: {
    id: '5D9BooUBjHC6MYX45Xyk7T',
    url: 'https://images.ctfassets.net/t2ekr6eg3fr3/5D9BooUBjHC6MYX45Xyk7T/5a2a30e213b7cd58240f7123d9815927/_uploads_Equitable_20recruiting_20story-slide-image-v01.jpg',
    title: 'Equitable Recruiting Story Slide Image V01',
    description: 'A chart divided into four quadrants shows that high-impact, low-effort work is a good place to start, while low-impact, high-effort work should be avoided.',
    width: 1500,
    height: 845
 }
};
