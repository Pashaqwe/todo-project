import styled from 'styled-components'

export const StyledList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin: 0 auto;
`

export const StyledCard = styled.li`
  height: 150px;
  width: 20%;
  list-style-type: none;
  background-color: #ffffff;
  padding: 30px;
  margin: 30px 50px;
  box-shadow: -15px -15px 0px 0px rgb(240, 150, 139);
  border-radius: 10px;
  animation-name: shadow-show;
  animation-duration: 1.5s;
  position: relative;
  transition-timing-function: cubic-bezier(0.795, 0, 0.165, 1);
`

export const StyledParagraph = styled.p`
  margin-top: 0;
`

export const StyledButton = styled.button`
  position: absolute;
  right: 15px;
  bottom: 15px;
  border-radius: 6px;
  outline: none;
  border: none;
  background-color: #ffffff;
  &:hover {
    border: 2px solid #ee7f72;
  }
`
