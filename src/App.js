import React from 'react';

import {
  Button,
  Container,
} from 'semantic-ui-react';
import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter';
import {dark} from 'react-syntax-highlighter/dist/esm/styles/prism';

import './semantic.less';
import './App.css';

function App() {
  return (
    <div className="App">
      <Container>

        <h1>Welcome to React Semantic</h1>

        <p>
          <SyntaxHighlighter language="less" style={dark}>
          {`@textColor: red !important;`}
          </SyntaxHighlighter>
        </p>

        <br/>
        <p>Any <code>Button</code> in the app should now have its text in Red.</p>
        <Button onClick={() => alert('Hello, World!')}>Hello World</Button>
        <br/>



        <h2>Feature-level Customizations</h2>
        <p>Implementing one-off customizations for specific features should be done by adding specific CSS classes next to the rest of the feature's CSS code.</p>

        <h4>Example: Button Background Color</h4>
        <p>
          Assume the feature <code>Foo</code> renders a button with a background color that's 50% lighter than the site's primary color.
        </p>

        <p><code>src/features/Foo/Foo.less</code></p>

      </Container>
    </div>
      );
}

export default App;
