import React, { Component } from 'react'
import {
  ErrorWindow,
  ErrorWindowHeding,
  ErrorWindowDescription,
  CloseButton,
} from './StyledErrorWindow'

class ErrorWindowComponent extends Component {
  render() {
    return (
      <ErrorWindow styledServerError={this.props.serverError}>
        <ErrorWindowHeding>
          Ой, что то пошло не так... &#128552;
        </ErrorWindowHeding>
        <ErrorWindowDescription>
          Ошибка сервера. Пожалуйста, попробуйте позднее
        </ErrorWindowDescription>
        <CloseButton
          onClick={() => this.props.closeErrorWindow()}
        ></CloseButton>
      </ErrorWindow>
    )
  }
}

export default ErrorWindowComponent
