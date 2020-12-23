import React, { Component } from 'react'
import 'antd/dist/antd.css'
import { Spin, List, Card } from 'antd'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import FormComponent from '../../FormComponents/MainComponent/FormComponent'

const Screen = styled.div`
  background-color: #156064;
  height: 100vh;
`

const Wrapper = styled.div`
  width: 60%;
  margin: 0 auto;
  padding-top: 100px;
`

const TodoSpin = styled(Spin)`
  margin-top: 100px;
  display: flex;
  justify-content: center;
`
const StyledFormComponent = styled(FormComponent)`
  position: relative;
  display: flex;
  width: 100%;
`
const StyledCard = styled(Card)`
  background: #00c49a;
  color: white;
  height: 350px;
  font-weight: bold;
  font-size: 18px;
  word-wrap: break-word;
  border-color: #00c49a;
  border-radius: 5px;
  transition: 0.6s;
  transform: rotatex(60deg) translatey(-100px) translatez(-100px);
  box-shadow: 0px 20px 40px rgba(0, 0, 0, 0.5);
  &:hover {
    transform: rotatex(0deg);
    transform: rotatez(0deg);
    transition: 0.6s;
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.3);
  }
`

class TodosComponent extends Component {
  render() {
    if (!this.props.todos.length) {
      return <TodoSpin />
    }

    return (
      <Screen>
        <Wrapper>
          <List
            grid={{ gutter: 100, column: 3, wrap: true }}
            dataSource={this.props.todos}
            renderItem={(item) => (
              <List.Item>
                <StyledCard title={`Заметка №${item.id}`}>
                  {item.name}
                </StyledCard>
              </List.Item>
            )}
          />
          <StyledFormComponent
            onCreateTodo={this.props.onCreateTodo}
            error={this.props.error}
          />
        </Wrapper>
      </Screen>
    )
  }
}

TodosComponent.propTypes = {
  todos: PropTypes.array,
  onCreateTodo: PropTypes.func,
}

export default TodosComponent
