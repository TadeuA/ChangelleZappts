import styled from 'styled-components'




export const Div = styled.div`
  display:flex;
  align-items:baseline;
  justify-content:center;
  div{
    background: ${({theme})=>theme.colors['dark-gray']};
    width: 100%;
    height: 1px;
    
  }
  span{
    padding:0;
    margin-right:16px;
    margin-left:16px;
    font:${({theme}) => theme.fonts['muli-regular-14']};
    color:${({theme})=>theme.colors['dark-gray']};
  }
`