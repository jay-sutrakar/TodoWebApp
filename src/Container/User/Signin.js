import React ,{ useState , useEffect } from 'react'
import styles from './UserHandler.module.css'
import axios from 'axios'
import { SIGNIN } from '../../Store/action'
import {connect} from 'react-redux'
import {toast} from 'react-toastify'
import {Alert, Button,Form} from 'reactstrap'
import {AccountCircle} from '@material-ui/icons'
import 'react-toastify/dist/ReactToastify.css'

/**
 * SignIn Component
 * This componet reads the user inputs and send it to backend service
 * @param {} props 
 * @returns 
 */
const SignIn = (props) => {
    
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError]= useState('')

    useEffect(()=>{
        console.log("Use effect called.")
        return (()=>{
            setError('')
        })
    },[])

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

        e.preventDefault() // this method prevent the page refresh after submitting the request
        console.log("Submit handler called")
        // axios.post('http://localhost:9000/signin',{email,password})
        // .then(res => {
        //     console.log(res)
        //     if(res.status==404){
        //         console.log('user not exist')
        //     }else{
        //         toastHandler('Login successfully ')
        //         const user = {
        //             _id : res.data._id,
        //             username : res.data.username,
        //             email : res.data.email,
        //             password : res.data.password,
        //         }
        //         localStorage.setItem('usertoken',JSON.stringify(user))
        //         props.userlogin(res.data)
        //     }
        // })
        // .catch(err => {
        //     setError('User not Exists')
        //     setTimeout(()=>{
        //         setError('')
        //     },5000)
        // })
    }
    
    return (
        <div>Sign In page</div>
        
        // <div className={styles.Modal} open={props.isOpen}>
        //     {props.isOpen ?
        //     <div>
        //     <Form className={styles.Form} onSubmit={submitHandler}>
        //         <AccountCircle style={{width:'100px',height:'100px',margin:'0px'}}/>
        //         <h3>Sign In</h3>
        //         <input type='text' placeholder='Email' required  onChange={emailHandler}/>
        //         <input type='password' placeholder='Password'  required onChange={passwordHandler}/>
        //         <Button type='submit'>Sign in</Button><br/>
                
        //         <Button onClick={closeHandler} color='link'>Sign up</Button>
        //         {
        //          error.length!== 0 ?
        //         <Alert color="danger">
        //             User Not Exists !
        //         </Alert>: null
                
        //         }
        //     </Form>
            
        //     </div>
        //     : null}
        // </div>
    )
}
const mapDispatchToProps = dispatch => {
    return {
        userlogin : user => dispatch({type:SIGNIN,val:user})
    }
}
export default connect(null,mapDispatchToProps)(SignIn)