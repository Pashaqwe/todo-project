import React, { Component } from 'react'
import 'antd/dist/antd.css'
import { Spin, List, Card } from 'antd'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import FormComponent from '../../FormComponents/MainComponent/FormComponent'


const Wrapper = styled.div`
  width: 50%;
  margin: 40px auto 10px;
`

const TodoSpin = styled(Spin)`
  margin-top: 100px;
  display: flex;
  justify-content: center;
`

const StyledCard = styled(Card)`
  font-family: AmaticBold;
  height: 200px;
  font-weight: bold;
  font-size:18px;
  word-wrap: break-word;
  box-shadow: 0 0 15px rgba(0,0,0,0.5);
  border-color:white;
  border-radius:10px;
  margin-bottom:40px;
  &:hover{
      transition: 1s;
    transform: scale(1.05);
  }
  &:not(:hover){
    transition: 1s;
  }
`

class TodosComponent extends Component {
  render() {
    if (!this.props.todos.length) {
      return <TodoSpin />
    }

    return (
      <Wrapper>
        <List
          grid={{ gutter: 40, column: 3, wrap: true }}
          dataSource={this.props.todos}
          renderItem={(item) => (
            <List.Item>
              <StyledCard title={`Заметка №${item.id}`}>{item.name}</StyledCard>
            </List.Item>
          )}
        />
        <FormComponent
          onCreateTodo={this.props.onCreateTodo}
          error={this.props.error}
        />
      </Wrapper>
    )
  }
}

TodosComponent.propTypes = {
  todos: PropTypes.array,
  onCreateTodo: PropTypes.func,
}

export default TodosComponent
