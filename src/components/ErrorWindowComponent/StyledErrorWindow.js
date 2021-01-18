import styled from 'styled-components'

export const ErrorWindow = styled.div`
  display: ${(props) => (props.styledServerError ? 'box' : 'none')};
  background-color: #ffffff;
  border-radius: 6px;
  position:relative;
  padding:5px 5px 5px 15px;
  top: 100px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);
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