
import  ContentCard from './ContentCard';
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
  title: 'Atoms/ContentCard',
  component: ContentCard,
} as ComponentMeta<typeof ContentCard>;

const Template: ComponentStory<typeof ContentCard> = (args) => 
<div className="max-w-[331px] w-[331px] p-md">
  <ContentCard {...args} />
  </div>;

export const Primary = Template.bind({})

Primary.args = {
    path:"/",
    type:"Insight",
    title:"A day at Nava as an infrastructure engineer",
    children: "A day at Nava with Wei Leong, an infrastructure engineer working on the Medicare Payment System Modernization team.",
    promoImage: {
      id: '5D9BooUBjHC6MYX45Xyk7T',
      url: 'https://images.ctfassets.net/t2ekr6eg3fr3/5D9BooUBjHC6MYX45Xyk7T/5a2a30e213b7cd58240f7123d9815927/_uploads_Equitable_20recruiting_20story-slide-image-v01.jpg',
      title: 'Equitable Recruiting Story Slide Image V01',
      description: 'A chart divided into four quadrants shows that high-impact, low-effort work is a good place to start, while low-impact, high-effort work should be avoided.',
      width: 1500,
      height: 845
   }
}
