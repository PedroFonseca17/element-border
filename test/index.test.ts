import { addBorderToElement, borderToElementProps } from '../src';

describe('add border tests', () => {
  const testdiv = document.createElement('div')
  const props: borderToElementProps = {
    element: testdiv,
    style: 'dark',
    width: 2,
  }

  it('Should add the dark border', () => {
    
    addBorderToElement(props);
    expect(testdiv.style).toHaveProperty('border', '2px solid #000');
  });

  it('Should add the light border', () => {
    addBorderToElement({
      ...props,
      style: 'light',
      width: 1,
    });
    expect(testdiv.style).toHaveProperty('border', '1px solid #fff');
  });
});
