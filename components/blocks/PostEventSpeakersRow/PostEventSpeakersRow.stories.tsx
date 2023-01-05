import { ComponentStory, ComponentMeta } from '@storybook/react';
import  PostEventSpeakersRow from './PostEventSpeakersRow';

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'Blocks / Post Event Speakers Row',
  component: PostEventSpeakersRow,
} as ComponentMeta<typeof PostEventSpeakersRow>;

//👇 We create a “template” of how args map to rendering
const Template: ComponentStory<typeof PostEventSpeakersRow> = (args) => <PostEventSpeakersRow {...args} />;

export const Default = Template.bind({});
Default.args = {
  "id": "3sKTbEYDn0NvLriGggXsgP-PostEventSpeakersRow",
  "speakers": [
      {
          "name": "Brian Whittaker",
          "role": "Acting Chief Innovation Officer",
          "company": "FDIC",
          "image": {
              "id": "6S6PA5cjS8bVfwRnvhuDKn",
              "url": "https://images.ctfassets.net/t2ekr6eg3fr3/6S6PA5cjS8bVfwRnvhuDKn/282cf8f682a7fd6d22e820c838f8e05b/author_image.png",
              "title": "Brian Whittaker",
              "description": "",
              "width": 184,
              "height": 184
          }
      },
      {
          "name": "Noreen Hecmanczuk",
          "role": "Digital Experience Advisor to the Federal CIO",
          "company": "Office of Management and Budget",
          "image": {
              "id": "HUKwS01Ynfl53A2qWMCtH",
              "url": "https://images.ctfassets.net/t2ekr6eg3fr3/HUKwS01Ynfl53A2qWMCtH/58ca6710d53ea51de5e4fe511e2165e8/author_image-1.png",
              "title": "Noreen Hecmanczuk",
              "description": "",
              "width": 184,
              "height": 185
          }
      },
      {
          "name": "Gladys Perez Sriprasert",
          "role": "Director of Public Policy and Management Programs",
          "company": "Carnegie Mellon University, Heinz College of Information Systems and Public Policy",
          "image": {
              "id": "1my19PYPDFWIzOKZWgBsC1",
              "url": "https://images.ctfassets.net/t2ekr6eg3fr3/1my19PYPDFWIzOKZWgBsC1/b6761c50cbce85b0aaa7393662589551/author_image-2.png",
              "title": "Gladys Perez Sriprasert",
              "description": "",
              "width": 184,
              "height": 185
          }
      },
      {
          "name": "Rohan Bhobe",
          "role": "CEO and Co-founder",
          "company": "Nava PBC",
          "image": {
              "id": "1qQVJNvrmZP6PBKD2ld2fv",
              "url": "https://images.ctfassets.net/t2ekr6eg3fr3/1qQVJNvrmZP6PBKD2ld2fv/90f6231683be0a6956925be60131222e/author_image-3.png",
              "title": "Rohan Bhode",
              "description": "",
              "width": 184,
              "height": 184
          }
      }
  ]
}