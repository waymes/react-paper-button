# React Paper Button v1.0.2

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

### Props

| Name       | isRequired     | Value          |
| ---------- | -------------- | -------------- |
| children   | true           | node           |
| onClick    | false          | func           |
| className  | false          | string         |
| background | false          | string         |
| bubbleColor| false          | string         |