import styled from 'styled-components'
import { Heart, Ring } from 'react-spinners-css'
import FormComponent from '../../FormComponents/MainComponent/FormComponent'

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  min-height: 100vh;
`

export const RightPanel = styled.div`
  position: absolute;
  right: 0;
  width: 70%;
  min-height: 100vh;
  padding-top: 50px;
  background-color: #ee7f72;
`

export const LeftPanel = styled.div`
  position: fixed;
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
export const RingSpiner = styled(Ring)`
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

