

import { ComponentStory, ComponentMeta } from '@storybook/react';
import { LinkText } from './LinkText';


export default {
  title: 'Atoms / Link Text',
  component: LinkText,
  parameters: {
    docs: {
      description: {
        component: 'Component used for links throughout the site',
      },
    },
  },
  argTypes: {
    href: { control: 'text', defaultValue:"Submit", description:"Button text" },
    children: { control: 'text', defaultValue:"Link Text", description:"Button text" },
    variant: {
      options: ['default', "underlined"],
      control: { type: 'radio' },
    },
    color:  {
      options: ["black" ,"sage" , "white","gray", ""],
      control: { type: 'radio' },
      defaultValue:""
    },
    hoverStyle:  {
      options: ["underlined", "sage"],
      control: { type: 'radio' },
    },

  },
} as ComponentMeta<typeof LinkText>;

//👇 We create a “template” of how args map to rendering
const Template: ComponentStory<typeof LinkText> = (args) => <LinkText {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    href:"/",
    children:"Example Link Text",
}