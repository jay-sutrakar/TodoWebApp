import React from 'react'
import  { Redirect,Route } from 'react-router-dom'
const PrivateRoute = ({component:Component , user,isSignedIn , ...rest}) => {
    return (
         <Route {...rest} render={props => {
            if(isSignedIn) 
                return <Component user {...props}/> 
            else {
            return  <Redirect to={
                    {
                        pathname:'/signin',
                        state : {
                            from : props.location
                        }
                    }
                }
        
                />
            }
         }}></Route>
    )
}

export default PrivateRoute