# Element Border
Element border is a simple package that always you to add border's to you HTML Elements and it's really simple to use!

## Installation

To install the package just run:
```
npm install @fonseca/element-border
```

## How to use

To use this package just import it into your file and pass on 3 different sets of data:

- Element: This is the element that will receive the border
- Style: It will apply a dark, white, blue or green border. The value are: 'dark' 'light' 'blue' 'green'
- Width: This is the width of the border:

Snippet:

```
  import { imageBorder } from 'image-border';

  const element = document.createElement('div')
  
  imageBorder(element, 'light', 3);
````
And that's it, hope you like it !