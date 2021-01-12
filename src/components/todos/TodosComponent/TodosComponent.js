import React, { Component, Suspense } from 'react'
import PropTypes from 'prop-types'
import ErrorWindowComponent from '../../ErrorWindowComponent'
import {
  Wrapper,
  RightPanel,
  LeftPanel,
  TodoSpin,
  StyledFormComponent,
  RingSpiner,
} from './StyledTodosComponent'

const LazyTodoList = React.lazy(() => import('../../TodoListComponent'))

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
          <ErrorWindowComponent
            serverError={this.props.serverError}
            closeErrorWindow={this.props.closeErrorWindow}
          />
        </LeftPanel>
        <RightPanel>
          <Suspense fallback={<RingSpiner color="#FFFFFF" />}>
            <LazyTodoList
              todos={this.props.todos}
              onDeleteTodo={this.props.onDeleteTodo}
            />
          </Suspense>
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
