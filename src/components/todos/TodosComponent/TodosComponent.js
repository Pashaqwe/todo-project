import React, { Component } from 'react'
// import 'antd/dist/antd.css'
import PropTypes from 'prop-types'
import {
  Wrapper,
  RightPanel,
  LeftPanel,
  TodoSpin,
  StyledFormComponent,
  StyledCard,
  StyledList,
} from './StyledTodosComponent'

class TodosComponent extends Component {
  render() {
    if (!this.props.todos.length) {
      return <TodoSpin/>
    }

    return (
      <Wrapper>
        <LeftPanel>
          <StyledFormComponent
            onCreateTodo={this.props.onCreateTodo}
            serverError={this.props.serverError}
          />
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
