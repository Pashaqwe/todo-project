import styled from 'styled-components'
import { Spin, Card } from 'antd'
import FormComponent from '../../FormComponents/MainComponent/FormComponent'

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  min-height: 100vh;
`

export const RightPanel = styled.div`
  width: 70%;
  min-height: 100vh;
  padding: 50px;
  background-color: #ee7f72;
`

export const LeftPanel = styled.div`
  width: 30%;
  background-color: #8e9aaf;
  min-height: 100vh;
`

export const TodoSpin = styled(Spin)`
  margin-top: 100px;
  display: flex;
  justify-content: center;
`
export const StyledFormComponent = styled(FormComponent)`
  margin-top: 40px;
`
export const StyledCard = styled(Card)`
  height: 200px;
  display: flex;

  padding: 20px;
  margin: 20px;

  box-shadow: -15px -15px 0px 0px rgb(240,150,139);
  border-radius: 10px;
  animation-name: shadow-show;
  animation-duration: 1.5s;

  transition-timing-function: cubic-bezier(0.795, 0, 0.165, 1);
`