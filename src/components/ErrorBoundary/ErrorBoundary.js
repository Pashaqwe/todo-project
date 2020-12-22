import React, { Component } from 'react'
import { Input } from 'antd'
import styled from 'styled-components'

const StyledInput = styled(Input)`
  display: flex;
  border-color: red;
`

const StyledParagraph = styled.p`
  color: red;
`

class ErrorBoundary extends Component {
  render() {
    console.log(this.props.error)
    if (this.props.error) {
      return (
        <div>
          <StyledInput></StyledInput>
          <StyledParagraph>Извините, что то пошло не так...</StyledParagraph>
        </div>
      )
    } else {
      return this.props.children
    }
  }
}

export default ErrorBoundary
