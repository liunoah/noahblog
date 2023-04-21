import React from 'react';
import MD from 'react-markdown';

export default function MarkdownView(props) {
  return (
    <MD>{props.markdown}</MD>
  );
}
