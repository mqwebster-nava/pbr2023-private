// Button.stories.ts|tsx
import { ComponentStory, ComponentMeta } from '@storybook/react';
import  CTABlock from './CTABlock';
export default {

  title: 'Blocks /  CTA Block',
  component: CTABlock,
} as ComponentMeta<typeof CTABlock>;

//👇 We create a “template” of how args map to rendering
const Template: ComponentStory<typeof CTABlock> = (args) => <CTABlock id="test" {...args} />;

export const Primary = Template.bind({

});

Primary.args = {
  "title": "Want to work with us?",
  "body": "Let’s make government services simple, effective, and accessible to all.",
  "buttonText": "Get in touch",
  "buttonPath": "/contact",
  "image":{
   id: '5BzdwfkJyPTjzFhJ3zGQrg' ,
    url: 'https://images.ctfassets.net/t2ekr6eg3fr3/5BzdwfkJyPTjzFhJ3zGQrg/2dd62521fe065a8ea539ae8aed33c720/CTA2-500x500-V01.png',
    width: 500,
    height: 500,
    title: 'CTA2-500x500-V01',
    description: ''
  }
};
