

import ReactMarkdown from 'react-markdown'

export default function MarkdownComponent({ content }) {
    return (
      <ReactMarkdown
        children={content}
        // todo add styling here for markdown
        components={{
          ul: ({ node, children }) => <ul className="list-style"  >{children}</ul>,
          li: ({ node, children }) => <li className="pb-sm"  >{children} </li>,
          p: ({ node, children }) => <p className="pb-md"  >{children} </p>,
        }}
      />
    );
  };
