import styled from 'styled-components'

export const Input = styled.input`
  border:none;
  border-bottom:2px solid ${({ theme }) => theme.colors['dark-gray']};
  padding-left:20px;
  padding-top:11px;
  padding-bottom:11px;
  letter-spacing: 0px;
  font: ${({ theme }) => theme.fonts['muli-regular-16']};
  color: ${({ theme }) => theme.colors['black']};
  margin-bottom:16px;
`