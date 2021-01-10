import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  *{
    margin:0;
    padding:0;
    outline:0;
    box-sizing:border-box;
  }

  body{
  
    background:${({theme})=>theme.colors['black']};
    color: ${({theme})=>theme.colors['dark-gray']};

    --webkit-font-smoothing: antialiased;
  }

  body, input, button{
    font: ${({theme})=>theme.fonts['muli-regular-16']};
  }
  #root{
    
    margin: 0 auto;
    padding:0;
  }

  button{
    cursor: pointer;
  }
  a{
    color :${({theme})=>theme.colors['cyan']}
  }
`;