import rehypeSlug from "rehype-slug";
import classNames from "classnames";
import ReactMarkdown from "react-markdown";
import { LinkText } from "../../atom";
import { ReportContentInterface } from "lib/report_data_models";

const ReportContent: React.FC<ReportContentInterface> = ({
  content,
  theme,
  isGreenBG = false,
}) => {
  const textColor = classNames({
    [theme.sage.text]: isGreenBG,
    [theme.default.text]: !isGreenBG,
  });
  return (
    <ReactMarkdown
      children={content}
      rehypePlugins={[rehypeSlug]}
      components={{
        code: ({ node, ...props }) => (
          <p
            className="text-navy-900 font-serif py-md text-base"
            {...props}
          ></p>
        ),
        p: ({ node, ...props }) => (
          <p className={`${textColor} text-base py-md`} {...props}></p>
        ),
        h1: ({ node, ...props }) => (
          <p className={`text-4xl font-bold pt-md ${textColor}`} {...props}></p>
        ),
        h2: ({ node, ...props }) => (
          <h2
            className={`text-4xl font-bold pt-md ${textColor}`}
            {...props}
          ></h2>
        ),
        h3: ({ node, ...props }) => (
          <h3
            id={node.properties.id.toString()}
            className={`text-xl font-bold pt-md ${textColor}`}
            {...props}
          ></h3>
        ),
        h4: ({ node, ...props }) => (
          <h4 className={`text-xl pt-md ${textColor}`} {...props}></h4>
        ),
        a: ({ node, ...props }) => (
          <LinkText href={props.href}>{props.children}</LinkText>
        ),
        ul: ({ node, ...props }) => (
          <ul className="list-disc ml-2xl">{props.children}</ul>
        ),
        li: ({ node, ...props }) => (
          <li className={textColor}>{props.children}</li>
        ),
        ol: ({ node, ...props }) => <ol {...props}></ol>,
        img: ({ node, ...props }) => <img className="py-md" {...props}></img>,
      }}
    />
  );
};

export default ReportContent;
