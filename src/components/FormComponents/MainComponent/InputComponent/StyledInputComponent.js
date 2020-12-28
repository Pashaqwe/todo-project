import styled from 'styled-components'

const StyledInput = styled.input`
  border-radius: 6px 0 0 6px;
  outline:none;
  border: ${(props) =>
    props.errorInput ? '3px solid #EE6C4D' : '3px solid #E5FFDE'};
  height:40px;
  width:70%;
`
export default StyledInput