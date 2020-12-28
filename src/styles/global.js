import { createGlobalStyle } from 'styled-components';
import {Theme} from './themes/default'
export default createGlobalStyle`
  *{
    margin:0;
    padding:0;
    outline:0;
    box-sizing:border-box;
  }

  body{
  
    background:${Theme.colors['black']};
    color: ${Theme.colors['dark-gray']};

    --webkit-font-smoothing: antialiased;
  }

  body, input, button{
    font: ${Theme.fonts['muli-regular-16']};
  }
  #root{
    
    margin: 0 auto;
    padding:0;
  }

  button{
    cursor: pointer;
  }
  a{
    color :${Theme.colors['cyan']}
  }
`;