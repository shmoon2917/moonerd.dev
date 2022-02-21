import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    html, body {
        padding: 0;
        margin: 0;
        font-family: Pretendard, -apple-system, BlinkMacSystemFont, system-ui;
        text-rendering: optimizeLegibility;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        -webkit-tap-highlight-color: transparent;
    };
    
    html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video
    {
        margin: 0;
        padding: 0;
        border: 0;
        font: inherit;
        font-size: 100%;
        vertical-align: baseline;
    };

    article, aside, details, figcaption, figure, footer, header, hgroup, menu, nav, section {
        display: block;
    };

    button {
        padding: 0;
        margin: 0;
        border: none;
        background: none;
        &:hover {
            cursor: pointer;
        };  
        &:focus, &:active {
            outline: none;
        };
    };

    body {
        line-height: 1;
    };

    ol, ul {
        list-style: none;
    };

    blockquote, q {
        quotes: none;
    };

    blockquote:before, blockquote:after, q:before, q:after {
        content: '';
    };

    table {
        border-collapse: collapse;
        border-spacing: 0;
    };
`;