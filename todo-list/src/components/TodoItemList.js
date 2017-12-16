import React, { Component } from 'react';
import TodoItem from "./TodoItem";

class TodoItemList extends Component {
  render() {
    const { todos, onToggle, onRemove } = this.props;

    return (
      <div>
        <TodoItem text="1번 텍스트"/>
        <TodoItem text="2번 텍스트"/>
        <TodoItem text="3번 텍스트"/>
      </div>
    );
  }
}

export default TodoItemList;