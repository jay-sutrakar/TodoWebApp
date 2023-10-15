import React from 'react'
const PrivateRoute = ({component:Component , user,isSignedIn , ...rest}) => {
    return (
        <div>Private Route</div>
        //  <Route {...rest} render={props => {
        //     if(isSignedIn) 
        //         return <Component user {...props}/> 
        //     else {
        //     return  <Redirect to={
        //             {
        //                 pathname:'/signin',
        //                 state : {
        //                     from : props.location
        //                 }
        //             }
        //         }
        
        //         />
        //     }
        //  }}></Route>
    )
}

export default PrivateRoute