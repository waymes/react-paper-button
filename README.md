# React Paper Button v0.0.7

### Installation

```
  npm i react-paper-button
```

### Adding to your react project

```javascript
import React from 'react';
import { render } from 'react-dom';
import PaperButton from 'react-paper-button';

render(
  <PaperButton
    onClick={() => console.log('Clicked!')}
  >
    <span>Click me</span>
  </PaperButton>,
  document.getElementById('root')
);
```