declare type styleProps = 'dark' | 'light' | 'blue' | 'green';
export declare type borderToElementProps = {
    element: HTMLElement;
    style: styleProps;
    width: number;
};
export declare const addBorderToElement: ({ element, style, width }: borderToElementProps) => HTMLElement;
export {};
