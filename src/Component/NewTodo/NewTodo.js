import React, { useState } from 'react'
import styles from './NewTodo.module.css'
const NewTodo = (props) => {
    const [Title,setTitle] = useState('')
    const [Description,setDescription] = useState('')
    const handleClose = () => {
        props.closeModal()
    }
    const submitHandler = (e) => {
        e.preventDefault()  
        if(Title === ''){
            alert('Title is Empty !')
        }else{
            props.todoHandler({title : Title , description : Description })
        }
    }
    return (
        <div>
            New todo model
            {/* <Modal className={styles.Modal} open={props.isOpen} onClose={handleClose}>
                <form className={styles.Form}onSubmit={submitHandler}>
                    <input type="text" onChange={(e)=>setTitle(e.target.value)}placeholder="Title"/>
                    <input type="text" onChange={(e)=>setDescription(e.target.value)}placeholder="Description"/>
                    <input type='submit'/>
                </form>
            </Modal> */}
        </div>
    )
}
export default NewTodo