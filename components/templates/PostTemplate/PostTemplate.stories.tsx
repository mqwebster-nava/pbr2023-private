// Button.stories.ts|tsx
import { ComponentStory, ComponentMeta } from "@storybook/react";
import PostTemplate from "./PostTemplate";

export default {
  title: "Templates / Post Template",
  component: PostTemplate,
} as ComponentMeta<typeof PostTemplate>;

//👇 We create a “template” of how args map to rendering
const Template: ComponentStory<typeof PostTemplate> = (args) => (
  <PostTemplate {...args} />
);

export const Primary = Template.bind({});


const res = {
  post: {
    id: "why-nava-public-benefit-corporation",
    slug: "why-nava-is-a-public-benefit-corporation",
    title: "Why Nava is a public benefit corporation",
    contentTags: ["Program Outcomes"],
    longSummary:
      "Nava’s social mission — to improve access to public services — has as much weight as a corporation’s responsibility to its shareholders. But instead of shareholders, we’re accountable to ourselves and the public.",
    authors: [],
    body: {
      json: {
        data: {},
        content: [
          {
            data: {},
            content: [
              {
                data: {},
                marks: [],
                value:
                  "In 2015, after having worked together for almost two years on HealthCare.gov, Nava incorporated as a public benefit corporation. This is a relatively new designation, and we often get asked what it is and what it means to us. Here’s a start.",
                nodeType: "text",
              },
            ],
            nodeType: "paragraph",
          },
          {
            data: {},
            content: [
              {
                data: {},
                marks: [],
                value: "What is a corporation?",
                nodeType: "text",
              },
            ],
            nodeType: "heading-2",
          },
          {
            data: {},
            content: [
              {
                data: {},
                marks: [],
                value:
                  "To describe what a public benefit corporation is, it’s important to be clear on what corporations are. A corporation is a for-profit entity whose leaders have a responsibility to corporate interests, mainly maximizing shareholder value. Corporations that break this responsibility can be sued for a breach of fiduciary duty. In an early case against Henry Ford’s attempt to lower prices and raise employee salaries to ",
                nodeType: "text",
              },
              {
                data: {
                  uri: "https://en.wikipedia.org/wiki/Dodge_v._Ford_Motor_Co.",
                },
                content: [
                  {
                    data: {},
                    marks: [],
                    value: "grow the business",
                    nodeType: "text",
                  },
                ],
                nodeType: "hyperlink",
              },
              {
                data: {},
                marks: [],
                value:
                  ", the court ruled that “a business corporation is organized and carried on primarily for the profit of the stockholders. The powers of the directors are to be employed for that end.”",
                nodeType: "text",
              },
            ],
            nodeType: "paragraph",
          },
          {
            data: {},
            content: [
              {
                data: {},
                marks: [],
                value: "In Milton Friedman’s 1962 book, ",
                nodeType: "text",
              },
              {
                data: {
                  uri: "https://en.wikipedia.org/wiki/Capitalism_and_Freedom",
                },
                content: [
                  {
                    data: {},
                    marks: [],
                    value: "Capitalism and Freedom",
                    nodeType: "text",
                  },
                ],
                nodeType: "hyperlink",
              },
              {
                data: {},
                marks: [],
                value:
                  ", he states that while corporations are a form of people, they have vastly different responsibilities: ",
                nodeType: "text",
              },
            ],
            nodeType: "paragraph",
          },
          {
            data: {},
            content: [
              {
                data: {},
                content: [
                  {
                    data: {},
                    marks: [],
                    value:
                      "There is one and only one social responsibility of business — to use its resources and engage in activities designed to increase its profits so long as it stays within the rules of the game, which is to say, engages in open and free competition without deception or fraud.",
                    nodeType: "text",
                  },
                ],
                nodeType: "paragraph",
              },
            ],
            nodeType: "blockquote",
          },
          {
            data: {},
            content: [
              {
                data: {},
                marks: [],
                value:
                  "These are pretty clear cut lines, and have given rise to the idea that the sole duty of corporations is to maximize shareholder value. In the decades since, we’ve seen all sorts of examples of how this narrow view has incentivized companies to act in their own self-interest over the interests of the public.",
                nodeType: "text",
              },
            ],
            nodeType: "paragraph",
          },
          {
            data: {},
            content: [
              {
                data: {},
                marks: [],
                value: "What is a public benefit corporation?",
                nodeType: "text",
              },
            ],
            nodeType: "heading-2",
          },
          {
            data: {},
            content: [
              {
                data: {},
                marks: [],
                value:
                  "Being a public benefit corporation isn’t too different on the surface from being an average corporation. We’re a profitable company and give generous options regardless of role so that everyone can have equity in Nava. We’ve never needed to raise money from investors, but if we ever needed to, being a public benefit corporation doesn’t prevent us from pursuing the option.",
                nodeType: "text",
              },
            ],
            nodeType: "paragraph",
          },
          {
            data: {},
            content: [
              {
                data: {},
                marks: [],
                value:
                  "What is different is that public benefit corporations stand for something. A public benefit corporation has a social mission written into the founding charter that has as much weight as a corporation’s fiduciary responsibility to its shareholders. Stated simply, a public benefit corporation is responsible to both itself and the broader public.",
                nodeType: "text",
              },
            ],
            nodeType: "paragraph",
          },
          {
            data: {},
            content: [
              {
                data: {},
                marks: [],
                value:
                  "The ideas behind public benefit corporations are not new, and build on efforts like ",
                nodeType: "text",
              },
              {
                data: {
                  uri: "https://en.wikipedia.org/wiki/Triple_bottom_line",
                },
                content: [
                  {
                    data: {},
                    marks: [],
                    value: "triple bottom line accounting",
                    nodeType: "text",
                  },
                ],
                nodeType: "hyperlink",
              },
              { data: {}, marks: [], value: " and ", nodeType: "text" },
              {
                data: {
                  uri: "https://en.wikipedia.org/wiki/B_Corporation_(certification)",
                },
                content: [
                  {
                    data: {},
                    marks: [],
                    value: "B-Corp certifications",
                    nodeType: "text",
                  },
                ],
                nodeType: "hyperlink",
              },
              {
                data: {},
                marks: [],
                value:
                  ". But unlike past efforts, a public benefit corporation designation is not just a best practice or a label — it has legal weight, and is part of a company’s DNA. The people who work at Nava have a fiduciary duty not only to our shareholders, but to our stated mission: to improve the access, effectiveness, and simplicity of government services.",
                nodeType: "text",
              },
            ],
            nodeType: "paragraph",
          },
          {
            data: {},
            content: [
              {
                data: {},
                marks: [],
                value:
                  "Our accountability to our mission comes from all of us. Past, present, and future employees are the shareholders of Nava. As shareholders, we all have a voice in Nava’s future. If, somehow, Nava were to ever stray from our focus on improving government services, Nava’s shareholders — even if the shareholders were no longer at the company — would have a legal path to hold Nava accountable for its stated mission.",
                nodeType: "text",
              },
            ],
            nodeType: "paragraph",
          },
          {
            data: {},
            content: [
              {
                data: {},
                marks: [],
                value: "Why is Nava a public benefit corporation?",
                nodeType: "text",
              },
            ],
            nodeType: "heading-2",
          },
          {
            data: {},
            content: [
              {
                data: {},
                marks: [],
                value:
                  "The public benefit corporation designation is new, but it is a systemic solution to a systemic problem — the myopic focus of existing corporations on maximizing shareholder value.",
                nodeType: "text",
              },
            ],
            nodeType: "paragraph",
          },
          {
            data: {},
            content: [
              {
                data: {},
                marks: [],
                value:
                  "While some companies forgo their social responsibilities in order to maximize shareholder value, we choose not to. We choose to be a public benefit corporation because in order to be ",
                nodeType: "text",
              },
              {
                data: { uri: "https://www.navapbc.com/values/" },
                content: [
                  {
                    data: {},
                    marks: [],
                    value: "good stewards",
                    nodeType: "text",
                  },
                ],
                nodeType: "hyperlink",
              },
              {
                data: {},
                marks: [],
                value:
                  ", we need to take responsibility for the social, ethical, and civic impacts of our work. Though we work in complex environments, we cannot treat the impact of our work as an externality. All told, our work now directly affects over 64 million people, and indirectly affects tens of millions more.",
                nodeType: "text",
              },
            ],
            nodeType: "paragraph",
          },
          {
            data: {},
            content: [
              {
                data: {},
                marks: [],
                value:
                  "Companies become what they measure; we do not measure ourselves by our profits. Instead, we measure ourselves by our progress towards our mission, which means measuring our impact on the access, cost, and effectiveness of government services. Together we have enrolled millions of households in health coverage, saved government agencies tens of millions of dollars, and saved years of caseworker labor.",
                nodeType: "text",
              },
            ],
            nodeType: "paragraph",
          },
          {
            data: {
              target: {
                sys: {
                  id: "5mP0ujyICedmS1T31HjbOU",
                  type: "Link",
                  linkType: "Asset",
                },
              },
            },
            content: [],
            nodeType: "embedded-asset-block",
          },
          {
            data: {},
            content: [
              {
                data: {},
                marks: [],
                value:
                  "Public benefit corporations are new and rare, but they shouldn’t be. When we forget our myriad responsibilities as individuals — to our family, to our friends, to our communities — we weaken the bonds of our society. Corporations that recognize their responsibilities — to the people affected by their work, and to the public — should be the norm.",
                nodeType: "text",
              },
            ],
            nodeType: "paragraph",
          },
        ],
        nodeType: "document",
      },
      links: {
        assets: {
          block: [
            {
              sys: { id: "5mP0ujyICedmS1T31HjbOU" },
              url: "https://images.ctfassets.net/t2ekr6eg3fr3/5mP0ujyICedmS1T31HjbOU/419bdc42bebc7f949fb0e29405001c76/_uploads_insights-why_20nava_20pbr-we_20measure_20ourselves.png",
              title: "Insights Why Nava Pbr We Measure Ourselves",
              width: 1200,
              height: 630,
              description:
                "We measure ourselves by our progress towards our mission, like the access, cost, and effectiveness of government services.",
            },
          ],
        },
      },
    },
    date: null,
    contentType: "Insight",
    shortSummary:
      "Nava’s social mission — to improve access to public services — has as much weight as a corporation’s responsibility to its shareholders.",
  },
  morePosts: [
    {
      id: "setting-goals-power-your-mission-with-human-centered-agile-t",
      contentTags: [
        "Agile Development",
        "Program Outcomes",
        "Human-Centered Design",
      ],
      slug: "setting-goals-power-your-mission",
      title: "Setting goals: Power your mission",
      date: "2021-11-08T21:51:00.000Z",
      contentType: "Toolkit",
      shortSummary:
        "Before beginning a technology project, you should define what program outcomes you want the technology to help you achieve. Technology or modernization itself should not be the end-goal.",
    },
    {
      id: "paid-family-medical-leave-digital-age",
      contentTags: ["Program Outcomes"],
      slug: "implementing-paid-family-and-medical-leave-in-the-digital-age",
      title: "Implementing paid family and medical leave in the digital age",
      date: null,
      contentType: "Insight",
      shortSummary:
        "As the U.S. considers broader paid family and medical leave programs, there’s a unique opportunity to get them right — with technology and policy — from the start.",
    },
    {
      id: "equitable-research-recruitment",
      contentTags: ["Program Outcomes", "Accessibility and Equity"],
      slug: "get-things-right-from-the-beginning-with-equitable-research-recruitment",
      title:
        "Get things right from the beginning with equitable research recruitment",
      date: null,
      contentType: "Insight",
      shortSummary:
        "Traditional user research practices often exclude people essential to the success of a service. Here are some practical tips to improve your approach.\n",
    },
  ],
};


Primary.args = {
    post: res.post,
    morePosts:res.morePosts,
    preview:false
  };