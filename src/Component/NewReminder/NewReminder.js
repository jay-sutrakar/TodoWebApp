import React , { useState } from 'react'
import styles from './NewReminder.module.css'
const NewReminder = (props) => {
    
    const [Title,setTitle] = useState('')
    const [Date,setDate] = useState(null)
    const [Timer,setTimer] = useState(null)
    
    const reminderHandler = (e) => {
        e.preventDefault()
        if(Title.length === 0 || Date === null || Timer === null)
            alert('Input field should not be Empty :) ')
        else
            props.newReminderHandler({title : Title,date : Date,timer :Timer})
    }
    
    const closeHandler = (e) => {
        props.closeModal()
    }
    
    return (
        <div>

            {/* <Modal className={styles.Modal} open={props.isOpen} onClose={closeHandler}>
                <form className={styles.Form} onSubmit={reminderHandler}>
                    <input type="text" placeholder="Reminder title" onChange={(e)=>setTitle(e.target.value)} />
                    <input type='date' onChange={e => setDate(e.target.value)} />
                    <input type='time' onChange={e => setTimer(e.target.value)} />
                    <input type='submit'/>
                </form>
            </Modal> */}
        </div>
    )
}
export default NewReminder