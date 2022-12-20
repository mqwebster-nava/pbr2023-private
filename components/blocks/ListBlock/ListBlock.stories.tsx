// Button.stories.ts|tsx
import { ComponentStory, ComponentMeta } from '@storybook/react';
import MarkdownComponent from 'utils/MarkdownComponent';
import  ListBlock from './ListBlock';

export default {
  title: 'Blocks / List Block',
  component: ListBlock,
} as ComponentMeta<typeof ListBlock>;

//👇 We create a “template” of how args map to rendering
const Template: ComponentStory<typeof ListBlock> = (args) => <ListBlock {...args} />;

export const Primary = Template.bind({});

Primary.args = {
    id: '4Q3d1MtucF7SYwFuGXSu3l',
    title: 'Financial health',
    body:<MarkdownComponent content={ `
      - Competitive compensation with transparent salary levels
      - Fully remote workforce with equitable pay no matter where you live in the US
      - 4% 401K salary match
      - 37 paid days off per year: 20 vacation days, 5 floating holidays, the day after Thanksgiving, Juneteenth, and 10 federal holidays`}/>,
    colorTheme: 'sage'
  
};

