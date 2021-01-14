import styled from 'styled-components'

export const ErrorWindow = styled.div`
  display: ${(props) => (props.styledServerError ? 'box' : 'none')};
  background-color: #ffffff;
  width: 80%;
  margin: 0 10%;
  height: 100px;
  border-radius: 6px;
  position: absolute;
  top: 200px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);
`

export const ErrorWindowHeding = styled.h3`
  margin-left: 20px;
`
export const ErrorWindowDescription = styled.p`
  margin-left: 20px;
`

export const CloseButton = styled.button`
  position absolute;
  right:10px;
  top:0;
  border:none;
  outline: none;
  background-color: #FFFFFF;
  width:20px;
  height:20px;
  cursor: pointer;
  opacity: 0.3;
  &:hover{
    opacity: 1;
  }
  &:before, &:after {
    position: absolute;
    content: ' ';
    height: 15px;
    width: 3px;
    background-color: #333;
    }
    &:before {
    transform: rotate(45deg);
    }
    &:after {
    transform: rotate(-45deg);
    }
`