import React, { createElement, FunctionComponent } from 'react';

interface HInterface {
    size : any,
    children: any
}
export const HeadingComponent : FunctionComponent<HInterface> = ({
    size,
    children
}) => {
    if(!size) {
        throw new Error("Need Size from 1 to 6");
    }

    if(['h1', 'h2', 'h3', 'h4', 'h5', 'h6'].includes(size)) {
        return createElement(size, { className : ''}, children);
    } else {
        throw new Error("Invalid header size");
        
    }
    
}