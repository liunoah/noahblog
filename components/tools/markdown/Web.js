import React from 'react';
import MD from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import './markStyles.css';
import CopyBody from './CopyBody';
export default function MarkdownView(props) {
  return (
    <MD  rehypePlugins={[rehypeRaw]}>{props.markdown}</MD>
  );
}
