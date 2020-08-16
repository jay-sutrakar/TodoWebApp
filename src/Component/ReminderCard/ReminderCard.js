import React , { useState, useEffect } from 'react'
import styles from './ReminderCard.module.css'
const ReminderCard = (props) => {
    const [remainingTime,setRemainingTime] = useState(null)

    const remainingTimeSetup = async () => {
      var distance = new Date(props.date+"T"+props.timer+":00").getTime() - new Date().getTime() 
      var days = Math.floor(distance / (1000 * 60 * 60 * 24));
      var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((distance % (1000 * 60)) / 1000);
      setRemainingTime(days+"-Days "+hours+"-Hours "+minutes+"-Minutes "+seconds+"-Seconds")
    }
    useEffect(() => {
      const timer = setInterval(()=>{
        remainingTimeSetup()
      },1000)
      return () => {
        clearTimeout(timer)
      }
    },[])
    const deleteHandler = () => {
      props.delete(props.id);
    }
    return (

        <div variant='outlined' className={styles.Card}>
                <div className={styles.Content}>
                    <div className={styles.Title}>{props.title}</div>
                    <div className={styles.Date}>{props.date}</div>
                    <div className={styles.Time}>{props.timer}</div>
                    <div>Time Remaining :{ remainingTime } </div>
                </div>
                <div className={styles.Actions}>
                    <button className={styles.Done}>Done</button>
                    <button className={styles.Delete} onClick={deleteHandler}>Delete</button>
                </div>
        </div>
    )
}
export default ReminderCard