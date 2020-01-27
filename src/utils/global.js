import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
:root {
    --bgColor: ${props => props.theme.colors.bgColor};
    --bgColorDark: ${props => props.theme.colors.bgColorDark};
    --bgColorLight: ${props => props.theme.colors.bgColorLight};
    --mainColor: ${props => props.theme.colors.mainColor};
    --secColor: ${props => props.theme.colors.secColor};
    --whiteColor: ${props => props.theme.colors.whiteColor};
    --blackColor: ${props => props.theme.colors.blackColor};
    --shadowOne: ${props => props.theme.shadows.shadowOne};
    --shadowTwo: ${props => props.theme.shadows.shadowTwo};
    --shadowThree: ${props => props.theme.shadows.shadowThree};
    --shadowFour: ${props => props.theme.shadows.shadowFour};
}

html {
    font-size: 62.5%;
    box-sizing: border-box;
       
    @media ${props => props.theme.mediaQueries.smallest} {
        font-size: 55%;        
    }
    @media ${props => props.theme.mediaQueries.small} {
        font-size: 60%;
    }
    @media ${props => props.theme.mediaQueries.medium} {
        font-size: 65%;
    }
    @media ${props => props.theme.mediaQueries.large} {
        font-size: 70%;
    }
    @media ${props => props.theme.mediaQueries.largest} {
        font-size: 75% !important;
    }
}

*, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

body {
    font-family: 'Martel Sans', sans-serif;
    font-weight: 400;
    line-height: 1.6;
    color: white;    
}

html, body, #root {
    height: 100%;
    background-color: rgb(14, 19, 23);
}

a, input, textarea, button {
    outline: none;
    text-decoration: none;
    font-family: inherit;    
}
li {
    list-style: none;
    color: inherit;
}

#root {
    display: flex;
    width: 100%;
    height: 100%;
    justify-content: center;
}

*::-webkit-scrollbar {
    display: none;
}
`;
