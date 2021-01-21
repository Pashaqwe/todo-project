import React, { Component } from 'react'
import { ErrorWindow, CloseButton } from './StyledErrorWindow'

class ErrorWindowComponent extends Component {
  render() {
    return (
      <ErrorWindow styledServerError={this.props.serverError}>
        <h3>Ой, что то пошло не так... &#128552;</h3>
        <p>Ошибка сервера. Пожалуйста, попробуйте позднее</p>
        <CloseButton
          onClick={() => this.props.closeErrorWindow()}
        ></CloseButton>
      </ErrorWindow>
    )
  }
}

export default ErrorWindowComponent
