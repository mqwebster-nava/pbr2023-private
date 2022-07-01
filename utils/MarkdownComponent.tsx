

import { LinkText } from 'components/atom'
import ReactMarkdown from 'react-markdown'

export default function MarkdownComponent({ content, removePadding=false }) {
 
    return (
      <ReactMarkdown
        children={content}
        // todo add styling here for markdown
        components={{
          a: ({ node, children }) =>  <LinkText href={`${node.properties.href}`} variant={"underlined"}>{children}</LinkText>,
          ul: ({ node, children }) => <ul className="list-style"  >{children}</ul>,
          li: ({ node, children }) => <li className="pb-sm"  >{children} </li>,
          p: ({ node, children }) => <p className={ `${!removePadding && "pb-md"}`}  >{children} </p>,
        }}
      />
    );
  };
