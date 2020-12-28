import styled from 'styled-components'

export const Label = styled.label`
  margin-top:16px;
  font:${({theme}) => theme.fonts['muli-regular-14']};
  color:${({theme}) => theme.colors['dark-gray']};
`