// Button.stories.ts|tsx
import { ComponentStory, ComponentMeta } from '@storybook/react';
import  ListBlock from './ListBlock';

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'Blocks / List Block',
  component: ListBlock,
} as ComponentMeta<typeof ListBlock>;

//👇 We create a “template” of how args map to rendering
const Template: ComponentStory<typeof ListBlock> = (args) => <ListBlock {...args} />;

export const Primary = Template.bind({});

Primary.args = {
    title: "Careers",
    body: "Come help us build the services of a better future for millions of people.",
    colorTheme:"sage"
};

