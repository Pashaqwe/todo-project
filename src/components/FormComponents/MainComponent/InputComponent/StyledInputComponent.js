import styled from 'styled-components'

const StyledInput = styled.input`
  border-radius: 6px 0 0 6px;
  outline: none;
  border: ${(props) =>
    props.errorInput ? '3px solid #EE6C4D' : '3px solid #E5FFDE'};
  height: 32px;
  width: 80%;
`

export const Wrapper = styled.div`
  display: flex;
`

export const StyledButton = styled.button`
  cursor: pointer;
  padding-left: 20px;
  padding-right: 20px;
  border: 1px solid #e5ffde;
  background-color: #e5ffde;
  color: #9590a8;
  outline: none;
  border-radius: 0 6px 6px 0;
  height: 40px;
`
export default StyledInput
