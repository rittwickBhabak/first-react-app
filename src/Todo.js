import React from 'react'
import './Todo.css';

export const Todo = ({ todos, deleteTodo }) => {
    
    const todoList = todos.length>0 ? (
        todos.map(todo => {
            return (
                <div className="collection-item" key={todo.id}>
                    <span onClick={ ()=>{ deleteTodo(todo.id) }}>{todo.content}</span>
                </div>
            )
        })
    ) : (
        <p className="center">No todo's left</p>
    );
    return (
        <div className="todos collection">
            { todoList }
        </div>
    )
}
