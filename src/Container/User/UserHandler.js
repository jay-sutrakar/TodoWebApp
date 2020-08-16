import React,{ useState, useEffect } from 'react'
import {connect} from 'react-redux'
import {Route} from 'react-router'
import SignIn from './Signin'
import SignUp from './Signup'
import mobileImage from '../../assests/image2.jpg'
import desktopImage from '../../assests/image3.jpg'
import styles from './UserHandler.module.css'
const UserHandler = () => {
    const [signinModal,setSigninModal] = useState(true)
    const [signupModal,setSignupModal] = useState(false)
    const [windowWidth , setWindowwidth] = useState(window.innerWidth)
    const imageUrl = windowWidth >=450 ? desktopImage : mobileImage
    useEffect(()=>{
        const handleWindowResize = () => {
            setWindowwidth(window.innerWidth)
        }
        window.addEventListener('resize',handleWindowResize)
        return (()=>{
            window.removeEventListener('resize',handleWindowResize)
        })
    })
    const closeHandler = () => {
        setSigninModal(!signinModal)
        setSignupModal(!signupModal)
    }
    return (
        <div  className={styles.Background} style={{backgroundImage : `url(${imageUrl})`}}>
            
            <SignIn isOpen={signinModal} close={()=> closeHandler()}/>
            <SignUp isOpen={signupModal} close={()=> closeHandler()}/>

        </div>
    )
}
// const mapStateToProps = state => {
//     user = state.user
// }
export default connect()(UserHandler)