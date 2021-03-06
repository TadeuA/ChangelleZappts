import styled from 'styled-components'

export const Button = styled.button`
  border:none;
  border-radius: 100px;
  font:${({theme}) => theme.fonts['muli-regular-16']};
  color:${({theme}) => theme.colors['white']};
  background:${({theme}) => theme.colors['dark-gray']};
  min-width: 175px;
  min-height:45px;
  padding-left:30px;
  padding-right:30px;
  padding-top:8px;
  padding-bottom:8px;
  &.alternative{
    background:${({theme})=>theme.colors['transparent']};
    box-shadow: 0px 3px 6px ${({theme})=>theme.colors['shadow']};
    color:${({theme}) => theme.colors['black']};
    display:flex;
    align-items:center;
    justify-content:center;
    font:${({theme}) => theme.fonts['lato-regular']};
    img{
      width:29px;
      height:29px;
      margin-right:20px;
    }
  }

  &.subAction{
    font:${({theme}) => theme.fonts['muli-regular-14']};
    color:${({theme}) => theme.colors['dark-gray']};
    background:${({theme}) => theme.colors['transparent']};
    padding-left:0;
    padding-right:0;
    min-width:0;
  }
`