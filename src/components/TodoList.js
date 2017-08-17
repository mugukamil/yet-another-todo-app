import React, {Component} from 'react'
import {connect} from 'react-redux'
import {fetchTodos, toggleTodo, deleteTodo, getVisibleTodos} from '../reducers/todo'

const TodoItem = ({id, name, isComplete, toggleTodo, deleteTodo}) => (
    <li className="d-flex justify-content-between align-items-center">
        <input 
            type="checkbox" 
            checked={isComplete} 
            onChange={() => toggleTodo(id)} 
        />
        {name}
        <span className="delete-item text-right">
            <button className="btn btn-sm btn-link text-danger" onClick={() => deleteTodo(id)}>x</button>
        </span>
    </li>
)

class TodoList extends Component {
    componentDidMount() {
        this.props.fetchTodos()
    }

    render() {
        return (
            <div className="Todo-List">
                <ul>
                {this.props.todos.map(todo => <TodoItem 
                    deleteTodo={this.props.deleteTodo}
                    toggleTodo={this.props.toggleTodo} 
                    {...todo} 
                    key={todo.id} />)}
                </ul>
            </div>
        )
    }
}

export default connect(
    (state, ownProps) => ({todos: getVisibleTodos(state.todo.todos, ownProps.filter)}),
    {fetchTodos, toggleTodo, deleteTodo}
)(TodoList)