'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var addBorderToElement = function addBorderToElement(_ref) {
  var element = _ref.element,
      style = _ref.style,
      width = _ref.width;
  var colors = {
    'dark': '#000',
    'light': '#fff',
    'blue': '#0000FF',
    'green': '#00FF00'
  };
  element.style.border = width + "px solid " + colors[style];
  return element;
};

exports.addBorderToElement = addBorderToElement;
//# sourceMappingURL=element-border.cjs.development.js.map
