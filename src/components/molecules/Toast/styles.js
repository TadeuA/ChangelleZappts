import styled, { css } from 'styled-components';
import { animated } from 'react-spring';

const toastTypeVariations = {
  info: css`
    background:${({theme})=>theme.colors['weak-blue']};
    color: ${({theme})=>theme.colors['blue']};
  `,
  success: css`
    background: ${({theme})=>theme.colors['cyan']};
    color: ${({theme})=>theme.colors['blue-green']};
  `,
  error: css`
    background: ${({theme})=>theme.colors['salmon']} ;
    color: ${({theme})=>theme.colors['red']} ;
  `,
};

export const Container = styled(animated.div)`
  width: 360px;
  position: relative;
  padding: 16px 30px 16px 16px;
  border-radius: 10px;
  box-shadow: 2px 2px 8px ${({theme})=>theme.colors['shadow']};
  display: flex;
  & + div {
    margin-top: 8px;
  }
  ${({type}) => toastTypeVariations[type || 'info']}
  > svg {
    margin: 4px 12px 0 0;
  }
  div {
    flex: 1;
  }
  button {
    position: absolute;
    right: 16px;
    top: 19px;
    border: 0;
    background: ${({theme})=>theme.colors['transparent']};
    color: inherit;
  }
  ${({hasDescription}) =>
    !hasDescription &&
    css`
      align-items: center;
      svg {
        margin-top: 0;
      }
    `}

`;

export const Message = styled.p`
  margin-top: 4px;
  font: ${({theme})=>theme.fonts['muli-regular-14']};
  color:${({theme}) => theme.colors['dark-gray']};
  opacity: 0.8;
  line-height: 20px; 
  ${({type}) => toastTypeVariations[type || 'info']}
 `
