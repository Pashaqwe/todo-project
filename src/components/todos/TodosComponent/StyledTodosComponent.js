import styled from 'styled-components'
import{Heart} from 'react-spinners-css'
import FormComponent from '../../FormComponents/MainComponent/FormComponent'

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  min-height: 100vh;
`

export const RightPanel = styled.div`
  width: 70%;
  min-height: 100vh;
  padding-top: 50px;
  background-color: #ee7f72;
`

export const LeftPanel = styled.div`
  width: 30%;
  background-color: #8e9aaf;
  min-height: 100vh;
`

export const TodoSpin = styled(Heart)`
  position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    margin: auto;
  
`
export const StyledFormComponent = styled(FormComponent)`
  margin-top: 40px;
`
export const StyledList= styled.ul`
display:flex;
flex-wrap:wrap;
margin: 0 auto;
`

export const StyledCard = styled.li`
  height: 150px;
  width: 20%;
  display: flex;
  background-color: #FFFFFF;
  padding: 30px;
  margin: 30px 50px;

  box-shadow: -15px -15px 0px 0px rgb(240,150,139);
  border-radius: 10px;
  animation-name: shadow-show;
  animation-duration: 1.5s;

  transition-timing-function: cubic-bezier(0.795, 0, 0.165, 1);
`