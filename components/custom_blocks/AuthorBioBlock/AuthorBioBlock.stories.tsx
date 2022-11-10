import { ComponentStory, ComponentMeta } from '@storybook/react';
import  AuthorBioBlock from './AuthorBioBlock';

export default {

  title: 'Custom Blocks / Author Bio Block',
  component: AuthorBioBlock,
} as ComponentMeta<typeof AuthorBioBlock>;

//👇 We create a “template” of how args map to rendering
const Template: ComponentStory<typeof AuthorBioBlock> = (args) => <AuthorBioBlock {...args} />;

export const Default = Template.bind({});
