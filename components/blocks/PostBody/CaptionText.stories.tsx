// Button.stories.ts|tsx
import { ComponentStory, ComponentMeta } from '@storybook/react';
import  CaptionText from './CaptionText';

export default {
  title: 'Blocks /  Post Body / Caption Text',
  component: CaptionText,
} as ComponentMeta<typeof CaptionText>;

//👇 We create a “template” of how args map to rendering
const Template: ComponentStory<typeof CaptionText> = (args) => <CaptionText {...args} />;

export const Primary = Template.bind({});
export const NoAttribution = Template.bind({});

Primary.args = {
    caption: "This tool allows a positive user experience for claimants while...requirement from DOL. The creative and functional mechanism for tying data back to the database, and focus on user experience should be emulated in future improvements.",
    attribution:"Firstname Lastname, Position and Title "
};
NoAttribution.args = {
  caption: "This tool allows a positive user experience for claimants while...requirement from DOL. The creative and functional mechanism for tying data back to the database, and focus on user experience should be emulated in future improvements.",
};