import React from 'react';
import MD from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import rehypeHighlight from 'rehype-highlight'
import './markStyles.css';

export default function MarkdownView(props) {
  
  const renderers = {
    code: ({ language, value }) => {
      return (
        <pre className={`language-${language}`}>
          <code className={`language-${language}`}>{value}</code>
        </pre>
      );
    },
  };
  return (
    <MD renderers={renderers} rehypePlugins={[rehypeRaw]}>{props.markdown}</MD>
  );
}
