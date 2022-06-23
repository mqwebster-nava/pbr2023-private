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
    id: '4Q3d1MtucF7SYwFuGXSu3l',
    __typename: 'ListBlock',
    sys: { id: '4Q3d1MtucF7SYwFuGXSu3l' },
    title: 'Financial health',
    body: `
      - Competitive compensation with transparent salary levels\n
      - Fully remote workforce with equitable pay no matter where you live in the US\n 
      - 4% 401K salary match\n 
      - 37 paid days off per year: 20 vacation days, 5 floating holidays, the day after Thanksgiving, Juneteenth, and 10 federal holidays`,
    colorTheme: 'sage'
  
};

