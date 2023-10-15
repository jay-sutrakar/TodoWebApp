import React , { useState, useEffect } from 'react'
import ReminderCard from '../../Component/ReminderCard/ReminderCard'
import NewReminder from '../../Component/NewReminder/NewReminder'
import Axios from 'axios'
import {AddCircleOutlineSharp} from '@material-ui/icons'
import  { connect } from 'react-redux'
import { UPDATE_REMINDER ,} from '../../Store/action'

const ReminderContainer = (props) => {
    const [Reminders , setReminders] = useState(props.reminders)
    const [ NewReminderModal,setReminderModal] = useState(false)
    const [ user ,setUser] = useState(props.user)

    const ReminderHandler = (newreminder) => {

        // Axios.post(`http://localhost:9000/${user._id}/newreminder`,{newreminder})
        // .then(res => {
        //     const oldReminders = [...props.reminders]
        //     oldReminders.push(res.data)
        //     props.updateReminder(oldReminders)
        //     setReminderModal(false)
        // })
    }
    const fetchReminders = () => {
        // Axios.get(`http://localhost:9000/${user._id}/reminders`)
        // .then(res => {
        //     setReminderModal(false)
        //     setReminders(res.data)
        //     return props.updateReminder(res.data)})
        // .catch(err => console.log(err))
    }
    useEffect(()=>{
       // setUser(props.user)
       if(Reminders.length === 0){
            fetchReminders()
       }
    },[])
    const deleteHandler = (id) => {
        // Axios.delete(`http://localhost:9000/${user._id}/${id}/reminder`)
        // .then(res => {
        //     const oldReminders = props.reminders.filter(reminder => (reminder._id).toString() !== id)
        //     props.updateReminder(oldReminders)
        // })
    }
    return (
        <div className="Container">
             <button className="AddButton" onClick={()=> setReminderModal(true)}><AddCircleOutlineSharp/></button>
            <NewReminder isOpen={NewReminderModal} closeModal={()=>setReminderModal(false)} newReminderHandler={(newreminder) => ReminderHandler(newreminder)} ></NewReminder> 
            <div>{props.reminders.map((reminder,i) => <ReminderCard key={reminder._id} id={reminder._id} title={reminder.title} date={reminder.date} timer={reminder.timer} delete={(id) => deleteHandler(id)} ></ReminderCard>)}</div>
        </div>
    )
}
const mapStateToProps = state => {
    return {
        reminders : state.reminders
    }
}
const mapDispatchToProps = dispatch => {
    return {
        updateReminder : reminders => dispatch({type : UPDATE_REMINDER ,val : reminders })
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(ReminderContainer)