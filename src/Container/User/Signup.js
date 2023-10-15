import React ,{ useState } from 'react'
import styles from './UserHandler.module.css'
import axios from 'axios'
import 'react-toastify/dist/ReactToastify.css'
const SignUp = (props) => {
    
    const [email,setEmail] = useState('')
    const [username,setUsername] = useState('')
    const [password,setPassword] = useState('')
    const [error , setError ] = useState('')
    const [success,setSuccess] = useState('')

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
    const errorHandler = (str) => {
        setError(str);
        console.log(str)
        setTimeout( ()=> {
            console.log('timeoutcalled')
            setError('')
        },5000)
    }
    const submitHandler = (e) => {
        e.preventDefault()
        if(password.length< 8){
            setError('Password length should be greater than 8')
            return
        }
        if(username.length<4){
            setError('Username should at least of 3 letters ')
            return 
        }
        // axios.post('http://localhost:9000/signup',{username,email,password})
        // .then(res => {
        //     console.log(res)
        //     if(res.status===400){
        //         errorHandler('Something went wrong :(')
        //     }else if(res.status === 403){
        //         errorHandler('User already exists Please go to signin')
        //     }else{
        //         setSuccess('Register successfully ')
        //     }
        // })
        // .catch(err =>{
        //     errorHandler('User already exist with this email')
        // })
    }
    return (
        <div> 
            Sign Up page
            {/* <div className={styles.Modal} open={props.isOpen} onClose={closeHandler}>
            {
            props.isOpen ?
                <form className={styles.Form} onSubmit={submitHandler}>
                <AccountCircle style={{width:'100px',height:'100px',margin:'0px'}}/>
                
                    <h3>Sign up</h3>

                    <input type='text' placeholder='Username' required onChange={usernameHandler}/>
                    <input type='email' placeholder='Email' required onChange={emailHandler}/>
                    <input type='password' placeholder='Password' required onChange={passwordHandler}/>
                    <Button type='submit'>Sign up</Button>
                    <Button onClick={closeHandler} color='link'>Sign in</Button>
                    {
                        error.length !== 0 ?
                        <Alert color='danger'>{error}</Alert>
                        : success.length !==0 ? <Alert color='primary'>success</Alert>:null
                     
                    }
                </form>
                : null }
            </div> */}
        </div>
    )
}
export default SignUp