import React ,{ useState } from 'react'
import styles from './UserHandler.module.css'
import axios from 'axios'
import { SIGNIN } from '../../Store/action'
import {connect} from 'react-redux'
import {toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
const SignIn = (props) => {
    
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    
    const toastHandler = (str) => {
        console.log(str)
        toast(str,{
            className:'custom-toast',
            draggable:false,
            position:toast.POSITION.TOP_CENTER
        })
    }
    const emailHandler = (e) => {
        setEmail(e.target.value) 
    } 
    const passwordHandler = (e) => {
        setPassword(e.target.value)
    }
    const closeHandler = () => {
        props.close('close');

    }
    const submitHandler = (e) => {
        e.preventDefault()
        axios.post('http://localhost:9000/signin',{email,password})
        .then(res => {
            console.log(res)
            if(res.status==404){
                toastHandler('user not exist')
            }else{
                toastHandler('Login successfully ')
                const user = {
                    _id : res.data._id,
                    username : res.data.username,
                    email : res.data.email,
                    password : res.data.password,
                }
                localStorage.setItem('usertoken',JSON.stringify(user))
                props.userlogin(res.data)
            }
        })
    }
    toastHandler('Hello ')
    return (
        <div className={styles.Modal} open={props.isOpen}>
            {props.isOpen ?
            <form className={styles.Form} onSubmit={submitHandler}>
                <h1>Sign In</h1>
                <input type='text' placeholder='Email' required onChange={emailHandler}/>
                <input type='password' placeholder='Password' required onChange={passwordHandler}/>
                <input type='submit'/>
                <p onClick={closeHandler}>Sign up</p>
            </form>
            : null}
        </div>
    )
}
const mapDispatchToProps = dispatch => {
    return {
        userlogin : user => dispatch({type:SIGNIN,val:user})
    }
}
export default connect(null,mapDispatchToProps)(SignIn)