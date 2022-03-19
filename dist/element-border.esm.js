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

export { addBorderToElement };
//# sourceMappingURL=element-border.esm.js.map
