import rehypeSlug from "rehype-slug";
import classNames from "classnames";
import ReactMarkdown from "react-markdown";
import { LinkText, PullQuote } from "../../../../atom";
import { ReportThemeInterface } from "shared_interfaces/report_theme_interface";
import { ReportBlockQuote } from "components/blocks_reports/old/NewReportContent/ReportBlockQuote/ReportBlockQuote";

type Size = "small" | "medium" | "large";
export interface ReportContentInterface {
  content: string;
  theme?: ReportThemeInterface;
  isGreenBG?: boolean;
  headerSize?: Size;
  headerColor?: {
    [HeaderTagName: string]: String;
  };
  paragraphSize?: Size;
}


const defaultTheme = {
  sage: {
    text: "",
  },
  default: {
    text: "",
  },
};

const ReportContent: React.FC<ReportContentInterface> = ({
  content,
  theme,
  isGreenBG = false,
  headerSize = "medium",
  headerColor = null,
}) => {
  const contentTheme = theme ? theme : defaultTheme;
  const textColor = classNames({
    [contentTheme.sage.text]: isGreenBG,
    [contentTheme.default.text]: !isGreenBG,
  });

  const getHeaderColor = (node) => {
    if (!headerColor) return textColor;
    return headerColor[node.tagName];
  };

  const getHeaderSize = (node) => {
    const sizes = {
      medium: {
        h1: "type-preset-3",
        h2: "type-preset-3",
        h3: "type-preset-4",
        h4: "type-preset-5",
      },
      large: {
        h1: "type-preset-2",
        h2: "type-preset-3",
        h3: "type-preset-4",
        h4: "type-preset-5",
      },
    };
    return sizes[headerSize][node.tagName];
  };

  return (
    <ReactMarkdown
      children={content}
      rehypePlugins={[rehypeSlug]}
      components={{
        code: ({ node, ...props }) => (
          <p
            className="text-gray-900 font-serif py-md type-preset-5"
            {...props}
          ></p>
        ),
        p: ({ node, ...props }) => (
          <p className={`${textColor} font-serif type-preset-5 py-md`} {...props}></p>
        ),
        h1: ({ node, ...props }) => (
          <p
            className={`${getHeaderSize(node)} font-bold pt-md ${getHeaderColor(
              node
            )}`}
            {...props}
          ></p>
        ),
        h2: ({ node, ...props }) => (
          <h2
            className={`${getHeaderSize(node)} font-bold pt-md ${getHeaderColor(
              node
            )}`}
            {...props}
          ></h2>
        ),
        h3: ({ node, ...props }) => (
          <h3
            id={node.properties.id.toString()}
            className={`${getHeaderSize(node)} font-bold pt-md ${getHeaderColor(
              node
            )}`}
            {...props}
          ></h3>
        ),
        h4: ({ node, ...props }) => (
          <h4
            className={`${getHeaderSize(node)} pt-md ${getHeaderColor(node)}`}
            {...props}
          ></h4>
        ),
        blockquote: ({ node, ...props }) => {
          // By default, we use the pull quote style. In markdown,
          // the ">>" symbols designate a blockquote. This logic
          // differentiates between ">" and ">>".
          const content = props.children[1]["props"].children;
          const isPullQuote = content && content.length === 1;
          return isPullQuote ? (
            <PullQuote>{props.children}</PullQuote>
          ) : (
            <ReportBlockQuote>{content[1].props.children}</ReportBlockQuote>
          );
        },
        a: ({ node, ...props }) => (
          <LinkText href={props.href} variant={"underlined"}>{props.children}</LinkText>
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


