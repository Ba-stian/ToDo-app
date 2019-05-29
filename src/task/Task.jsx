import React from 'react';
import task from './Task.module.css';


const Task = ({todos, deleteTodo}) => {

    const todoList = todos.length ? (
        todos.map(todo => {
            return (
                <div key={todo.id} className={task.list}>
                    <div className={task.items}>
                        <span className={task.item}>{todo.content}</span>
                        <span className={task.cross} title="Click when you done" onClick={() => {
                            deleteTodo(todo.id)
                        }}>&#215;</span>
                    </div>
                </div>
            )
        })
    ) : (
        <p className={task.message}>You are good today! Nothing to do</p>
    )

    return (
        <div className={task.wrap}>
            <h1 className={task.header}>Today task's list</h1>
            {todoList}
        </div>
    )
}

export default Task;
