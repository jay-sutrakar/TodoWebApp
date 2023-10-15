import React from 'react'
import styles from './TodoCard.module.css'
const TodoCard = (props) => {
    const todo = props.todo
    const deleteTodo = () => {
        props.delete(todo._id)
    }
    const completeTodo = () => {
        props.complete(todo._id)
    }
    return (
        <div className={styles.Card}>
            Todo card
            {/* <div className={styles.Content} style={{display:'flex',flexDirection:'row',justifyContent:'space-between'}}>
                <div >
                    <div className={styles.Title}>{todo.title}</div> 
                    <div className={styles.Description}>{todo.description}</div>
                </div>
                <div>{todo.completed ? <Done/> : null}</div>
            </div>
                <div className={styles.Actions}>
                    <button className={styles.Done} onClick={completeTodo}><Done/></button>
                    <button className={styles.Delete} onClick={deleteTodo}><Delete/></button>
                </div> */}
        </div>
    )
}
export default TodoCard