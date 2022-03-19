type styleProps = 'dark' | 'light' | 'blue' | 'green';

type keyToElementType = {
  [key in styleProps]: string;
};

export type borderToElementProps = {
  element: HTMLElement,
  style: styleProps,
  width: number
}

export const addBorderToElement = ({element, style, width}: borderToElementProps) => {
  const colors: keyToElementType = {
    'dark': '#000',
    'light': '#fff',
    'blue': '#0000FF',
    'green': '#00FF00',
  }

  element.style.border = `${width}px solid ${colors[style]}`
  return element;
};
