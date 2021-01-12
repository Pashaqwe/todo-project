import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {
  Wrapper,
  RightPanel,
  LeftPanel,
  TodoSpin,
  StyledFormComponent,
  StyledCard,
  StyledList,
  ErrorWindow,
  CloseButton,
  ErrorWindowHeding,
  ErrorWindowDescription,
} from './StyledTodosComponent'

class TodosComponent extends Component {
  render() {
    if (!this.props.todos.length) {
      return <TodoSpin />
    }

    return (
      <Wrapper>
        <LeftPanel>
          <StyledFormComponent
            onCreateTodo={this.props.onCreateTodo}
            serverError={this.props.serverError}
          />
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
        </LeftPanel>
        <RightPanel>
          <StyledList>
            {this.props.todos.map((item) => {
              return <StyledCard key={item.id}>{item.name}</StyledCard>
            })}
          </StyledList>
        </RightPanel>
      </Wrapper>
    )
  }
}

TodosComponent.propTypes = {
  todos: PropTypes.array,
  onCreateTodo: PropTypes.func,
}

export default TodosComponent
