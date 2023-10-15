import React, { useEffect, useState } from 'react';
import './App.css';
import  { Route, Redirect ,Switch } from 'react-router-dom'
import UserHandler from './Container/User/UserHandler'
import {connect} from 'react-redux'
import { SIGNOUT } from './Store/action';
import PrivateRoute from './privateRoute'
import Home from './Home'
import Axios from 'axios';
import Signin from './Container/User/Signin';
import SignUp from './Container/User/Signup';
import NewReminder from './Component/NewReminder/NewReminder';
const App  = () => {

  const [error , setError ] = useState('')
  
  useEffect(()=> {
    //Calling backend service to get the stored data
    // Axios.get('http://localhost:9000')
    // .then(res => console.log(res.data))
    // .catch(err => setError(console.log(err)))
  },[])
  
 console.log('App.js Render Called')

 return (
  <div><Signin/></div>
  /*  
  switch will check for the first matching path of 
  the request and stop rendering rest of the componets
  // */
  //  <Switch>
  //     <Route exact render={()=>{
  //       if(!props.isSignedIn) 
  //               return <UserHandler/> 
  //           else {
  //           return  <Redirect to={
  //                   {
  //                       pathname:'/',
  //                       state : {
  //                           from : props.location
  //                       }
  //                   }
  //               }
        
  //               />
  //           }

  //     }} path='/signin'/>
      
  //     {/** This private route protect direct access of page 
  //      * if user is not authorized then it re-route the user to login page 
  //      */}
  //     <PrivateRoute 
  //       component={Home}
  //       isSignedIn={props.isSignedIn}
  //       path='/'
  //     />
  //  </Switch>
 )
}
const mapStateToProps = state => {
  return {
    user : state.user,
    isSignedIn : state.isSignedIn
  }
}
const mapDispatchToProps = dispatch => {
  return {
    signOut : () => dispatch({ type:SIGNOUT }),
  }
}
// export default connect(mapStateToProps,mapDispatchToProps)(withRouter(App));
export default App












// const signOutHandler = () => {
//   this.props.history.push('/')
//   this.props.signOut()
// } 
//  return (
//   <div className="App">
//   {
//     this.props.storestate.username !== null ?
//         <div>
//           <div className="App-header">
//             <h1>Stay organized</h1>
//             <h2>Plan for work, home & everything in between</h2>
//             <h3>My Day</h3>
//             <h3>{this.state.date.getDate()}<span>  </span>{day[this.state.date.getDay()-1]}</h3>
//           </div>
        
//         <div>
//           <Toolbar className="Toolbar">
//             <div>
//                 <NavLink to="/" activeClassName="active" style={{fontWeight:'300',fontSize:'30px'}}>Todos</NavLink>
//             </div>
//             <div>
//             <NavLink to="/reminder" activeClassName="active" style={{fontWeight:'300',fontSize:'30px'}}>Reminders</NavLink>
//             </div>
//             <div>
//               <ExitToApp onClick={signOutHandler}/>
//             </div>    
//           </Toolbar>
//         </div>
//         <div className="Body">
//         <Switch>
//           <Route path='/' exact><TodoContainer user={{_id : this.props.storestate._id}} ></TodoContainer></Route>
//           <Route path='/reminder' exact><ReminderContainer user={{_id : this.props.storestate._id}}></ReminderContainer></Route>
//         </Switch>
//         </div>
//         </div> : <div><UserHandler/></div>
//   }
//   </div> 
     
// );