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
  background-color: ${(props) =>
    props.isDisabled ? 'rgb(128,128,128,0.5)' : '#FFFFFF'};
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
export const StyledDate = styled.p`
  position: absolute;
  left: 15px;
  bottom: 15px;
  margin-bottom:10px;
  margin-left:10px;
  font-size:13px;
`

export const StyledButton = styled.button`
  position: absolute;
  right: 15px;
  bottom: 15px;
  border-radius: 6px;
  outline: none;
  border: none;
  background-color: rgba(255, 255, 255, 0);
  &:hover {
    cursor: pointer;
  }
`
