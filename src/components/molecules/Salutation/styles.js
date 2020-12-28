import styled from 'styled-components'

export const H1 = styled.h1`
  align-self: "flex-end";
  font:${({theme}) => theme.fonts['avenir-heavy']};
  color:${({theme}) => theme.color['black']};
`

export const H2 = styled.h2`
  margin-bottom: 77;
  margin-top: 63;
  font:${({theme}) => theme.fonts['muli-regular-30']};
  color:${({theme}) => theme.color['dark-gray']};
`