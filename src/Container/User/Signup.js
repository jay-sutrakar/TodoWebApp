import React ,{ useState } from 'react'
import styles from './UserHandler.module.css'
import axios from 'axios'
import {toast,} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
const SignUp = (props) => {
    
    const [email,setEmail] = useState('')
    const [username,setUsername] = useState('')
    const [password,setPassword] = useState('')
    
    const toastHandler = () => {
        toast('This is fuccking toast',{
            className:'custom-taost',
            draggable:false,
            position:toast.POSITION.TOP_CENTER
        })
    }
    const usernameHandler = (e) => {
        setUsername(e.target.value)
    } 
    const emailHandler = (e) => {
        setEmail(e.target.value)
    }
    
    const passwordHandler = (e) => {
        setPassword(e.target.value)
    }
    
    const closeHandler = () => {
        props.close('Close')
    }
    
    const submitHandler = (e) => {
        e.preventDefault()
        toastHandler()
    
        axios.post('http://localhost:9000/signup',{username,email,password})
        .then(res => {
            console.log(res)
            if(res.status===400){
                toastHandler('Something went wrong :(')
            }else if(res.status===403){
                toastHandler('User already exists Please go to signin')
            }else{
                toastHandler('Register successfully ')
            }
        })
        .catch(err => toastHandler('Something went wrong'))
    }
    return (
        <div> 
            <div className={styles.Modal} open={props.isOpen} onClose={closeHandler}>
            {
            props.isOpen ?
                <form className={styles.Form} onSubmit={submitHandler}>
                    <h1>Sign up</h1>

                    <input type='text' placeholder='Username' required onChange={usernameHandler}/>
                    <input type='email' placeholder='Email' required onChange={emailHandler}/>
                    <input tyep='password' placeholder='Password' required onChange={passwordHandler}/>
                    <input type='submit'/>
                    <p onClick={closeHandler}>Sign in</p>
                </form>
                : null }
            </div>
        </div>
    )
}
export default SignUp