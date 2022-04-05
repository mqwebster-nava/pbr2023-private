// @ts-nocheck
import classNames from "classnames";
import React from "react";
import ReactMarkdown from "react-markdown";
import rehypeSlug from "rehype-slug";
import { Button, Details, LinkText, Signatures } from "components/atom";
import { getPublicBenefitReportByYear } from "../../lib/public-benefit-reports";

export async function getStaticProps() {
  const report = getPublicBenefitReportByYear(2019);
  return {
    props: {
      report,
    },
  };
}

export default function PBR2019({ report }) {
  const {
    title,
    introduction,
    section_one,
    section_two,
    section_three,
    section_four,
    shoutouts,
  } = report;

  const { employee_list, alumni_list, partner_list, tot_list, pet_list } =
    shoutouts;
  const shoutoutLists = [
    employee_list,
    alumni_list,
    partner_list,
    tot_list,
    pet_list,
  ];
  const sections = [
    {
      picture: "/images/pbrs/2019-1.png",
      picture_position: "left",
      isWhiteBG: true,
      content: section_one,
    },
    {
      picture: "/images/pbrs/2019-2.png",
      picture_position: "right",
      isWhiteBG: false,
      content: section_two,
    },
    {
      picture: "/images/pbrs/2019-3.png",
      picture_position: "left",
      isWhiteBG: true,
      content: section_three,
    },
    {
      picture: "/images/pbrs/2019-4.png",
      picture_position: "right",
      content: section_four,
    },
  ];

  return (
    <div>
      <PageHeader
        title={title}
        banner="/images/pbrs/nava-header2019-web.jpg"
        altText="An illustration of people holding lines that spell out NAVA."
        pdfLink="/files/2019NavaPublicBenefitReport.pdf"
      />
      <IntroSection body={introduction} />
      {sections.map((section, index) => (
        <Section key={index} {...section} />
      ))}
      <ShoutoutSection
        title={shoutouts.title}
        introduction={shoutouts.introduction}
        lists={shoutoutLists}
      />
    </div>
  );
}

const PageHeader = ({ title, banner, altText, pdfLink }) => {
  return (
    <div className="mt-6 py-6 grid justify-items-center text-center px-xl bg-ecru-pbc-2019">
      <h1 className="font-sans text-navy-900 text-base font-black text-4xl">
        {title}
      </h1>
      <div className="h-4/5">
        <img src={banner} alt={altText} />
      </div>
      {pdfLink && <Button href={pdfLink}>View as PDF</Button>}
    </div>
  );
};

const MarkdownComponent = ({ content, isGreenBG }) => {
  const textColor = classNames({
    "text-sage-pbc-2019": isGreenBG,
    "text-navy-900": !isGreenBG,
  });
  return (
    <ReactMarkdown
      children={content}
      rehypePlugins={[rehypeSlug]}
      components={{
        pre: ({ node, ...props }) => <div {...props}></div>,
        code: ({ node, ...props }) => (
          <p
            className="text-navy-900 font-serif py-md text-base"
            {...props}
          ></p>
        ),
        p: ({ node, ...props }) => (
          <p
            className={`${textColor} text-base font-sans py-md`}
            {...props}
          ></p>
        ),
        h1: ({ node, ...props }) => (
          <p
            className={`text-3xl font-bold font-sans pt-md ${textColor}`}
            {...props}
          ></p>
        ),
        h2: ({ node, ...props }) => (
          <h2
            className={`text-3xl font-bold font-sans pt-md ${textColor}`}
            {...props}
          ></h2>
        ),
        h3: ({ node, ...props }) => (
          <h3
            id={node.properties.id}
            className={`text-xl font-bold font-sans pt-md ${textColor}`}
            {...props}
          ></h3>
        ),
        h4: ({ node, ...props }) => (
          <h4
            className={`text-xl font-sans pt-md ${textColor}`}
            {...props}
          ></h4>
        ),
        a: ({ node, ...props }) => <LinkText {...props}></LinkText>,
        ul: ({ node, ...props }) => (
          <ul className="list-disc ml-2xl">{props.children}</ul>
        ),
        li: ({ node, ...props }) => (
          <li className={`font-sans ${textColor}`}>{props.children}</li>
        ),
        ol: ({ node, ...props }) => <ol {...props}></ol>,
        img: ({ node, ...props }) => <img className="py-md" {...props}></img>,
      }}
    />
  );
};

const IntroSection = ({ body, isWhiteBG = false }) => {
  return (
    <div className="bg-sage-50 py-2xl md:px-4xl">
      <div className="responsive-container-content">
        <MarkdownComponent content={body} isGreenBG={!isWhiteBG} />
      </div>
      <Signatures isGreenBG={!isWhiteBG} />
    </div>
  );
};

const Section = ({
  picture,
  picture_position = "right",
  content,
  isWhiteBG,
}) => {
  const { title, introduction, body } = content;
  return (
    <div className={`${!isWhiteBG ? "bg-sage-50" : ""}`}>
      <div className="responsive-container-content py-4xl">
        <h2 className="text-3xl font-sans font-bold text-sage-pbc-2019">
          {title}
        </h2>
        <MarkdownComponent content={introduction} isGreenBG={!isWhiteBG} />
        <img src={picture} className="md:hidden block w-full" />
      </div>
      <div className="grid md:grid-cols-2">
        {picture_position === "right" && (
          <div className="p-2xl">
            <MarkdownComponent content={body} isGreenBG={!isWhiteBG} />
          </div>
        )}
        <div
          className="sm:hidden md:block sticky top-0 h-screen"
          style={{
            backgroundImage: `url(${picture})`,
            backgroundSize: "cover",
            height: "100vh",
            backgroundPosition: "center center",
            backgroundRepeat: "no-repeat",
          }}
        />
        {picture_position === "left" && (
          <div className="p-2xl">
            <MarkdownComponent content={body} isGreenBG={!isWhiteBG} />
          </div>
        )}
      </div>
    </div>
  );
};

const ShoutoutColumns = ({ list }) => {
  const { title, one, two, three } = list;
  return (
    <>
      <h3 className="text-2xl font-sans font-bold py-md">{title}</h3>
      <div className="grid grid-cols-3">
        <MarkdownComponent content={one} />
        <MarkdownComponent content={two} />
        <MarkdownComponent content={three} />
      </div>
    </>
  );
};

const ShoutoutSection = ({ title, introduction, lists }) => {
  return (
    <div className="responsive-container-content py-2xl">
      <h2 className="text-3xl font-sans font-bold">{title}</h2>
      <div className="pb-xl">
        <MarkdownComponent content={introduction} />
      </div>
      <Details summary="See all shoutouts">
        {lists.map((list, index) => (
          <ShoutoutColumns key={`shoutouts_${index}`} list={list} />
        ))}
      </Details>
    </div>
  );
};
