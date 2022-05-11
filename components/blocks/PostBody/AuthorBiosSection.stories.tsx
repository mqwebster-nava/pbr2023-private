// Button.stories.ts|tsx
import { ComponentStory, ComponentMeta } from '@storybook/react';
import  AuthorBios from './AuthorBiosSection';

export default {
  title: 'Blocks /  Post Body / Author Bio Section',
  component: AuthorBios,
} as ComponentMeta<typeof AuthorBios>;

//👇 We create a “template” of how args map to rendering
const Template: ComponentStory<typeof AuthorBios> = (args) => <AuthorBios {...args} />;

export const Primary = Template.bind({});

Primary.args = {
    authors:[
        {
            "name": "Martelle Esposito",
            "slug": "martelle-esposito",
            "bio": "Martelle Esposito is a partnerships and evaluation lead at Nava. Before joining Nava, Martelle managed partnerships at the National WIC association as a program manager and worked in non-profits.",
            "role": "Partnerships and Evaluation Lead",
            "image": {
                "id": "2hdtmAQPNrCOJuAr4QtxXe",
                "url": "https://images.ctfassets.net/t2ekr6eg3fr3/2hdtmAQPNrCOJuAr4QtxXe/f8926b5442afe96af08f38e70c0bb985/M.esposito_.jpg",
                "title": "M.esposito",
                "description": "",
                "width": 400,
                "height": 400
            }
        },
        {
            "name": "Sasha Reid",
            "slug": "sasha-reid",
            "bio": "Sasha Reid was a senior software developer at Nava. Sasha also volunteers with Hack Oregon and mentors fellows at Coding it Forward.",
            "role": "Senior Software Developer",
            "image": {
                "id": "65Ug3Fvua2ZsqxI4DqSei3",
                "url": "https://images.ctfassets.net/t2ekr6eg3fr3/65Ug3Fvua2ZsqxI4DqSei3/dd1b82e62f3c4a46c563d23c47e77c7a/sasha_reid_website_photo.jpeg",
                "title": "sasha reid website photo",
                "description": "",
                "width": 400,
                "height": 400
            }
        },
        {
            "name": "Eleanor Davis",
            "slug": "eleanor-davis",
            "bio": "Eleanor Davis is the Associate Program Director of Insight & Impact at Code for America. Before that, Eleanor worked as a program manager in the non-profit space.",
            "role": "Associate Program Director of Insight & Impact, Code for America",
            "image": null
        }
    ]
};
