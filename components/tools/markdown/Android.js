import React from 'react';
import { WebView } from 'react-native-webview';
import * as Showdown from 'showdown';

export default class MarkdownView extends React.Component {
  constructor(props) {
    super(props);
    this.converter = new Showdown.Converter();
  }

  render() {
    const html = this.converter.makeHtml(this.props.markdown);
    return (
      <WebView
        source={{ html: html }}
        style={{ flex: 1 }}
      />
    );
  }
}
