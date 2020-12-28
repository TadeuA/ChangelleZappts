import styled from 'styled-components'
let Width;
let screenHeight
function sizeOfThings() {
  // eslint-disable-next-line no-restricted-globals
  const screenWidth = screen.width;
  // eslint-disable-next-line no-restricted-globals
  screenHeight = screen.height;

  Width = screenWidth/2
}

sizeOfThings();

window.addEventListener("resize", function () {
  sizeOfThings();
});

export const Div = styled.section`
  width: ${Width};
  height: ${screenHeight};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items:center;
  background: ${({theme})=>theme.colors['cyan']};
  
`