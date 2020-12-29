import styled from 'styled-components'

export const Div = styled.div`
  display: grid; 
  grid-template-columns: 1fr 1fr; 
  @media (max-width:800px){
    display:flex;
    flex-direction: column-reverse;
    
  }
`


export const Main = styled.main`
  width: 100%;
  background: #FFF;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-right: 124px;
  padding-left: 124px;
  padding-top: 70px;
  padding-bottom:70px;
  @media (max-width:1350px){
    padding-right: 90px;
    padding-left: 90px;
  }
  @media (max-width:800px){
    max-width:800px;
    padding-right: 120px;
    padding-left: 120px;
  }
  @media (max-width:700px){
    max-width:800px;
    padding-right: 100px;
    padding-left: 100px;
  }
  @media (max-width:500px){
    padding-right: 70px;
    padding-left: 70px;
  }
`