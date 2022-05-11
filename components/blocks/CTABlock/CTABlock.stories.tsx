// Button.stories.ts|tsx
import { ComponentStory, ComponentMeta } from '@storybook/react';
import  CTABlock from './CTABlock';
export default {

  title: 'Blocks /  CTA Block',
  component: CTABlock,
} as ComponentMeta<typeof CTABlock>;

//👇 We create a “template” of how args map to rendering
const Template: ComponentStory<typeof CTABlock> = (args) => <CTABlock {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  "__typename": "SectionCtaBlock",
  "id": "building-tech-power-your-mission-with-human-centered-agile-t-work",
  "title": "Want to work with us?",
  "body": "Let’s make government services simple, effective, and accessible to all.",
  "buttonText": "Get in touch",
  "buttonPath": "/contact"
};
