import React, { useEffect, useState } from 'react'
import {connect} from 'react-redux'
import {Navbar, Nav, NavItem,NavLink as Tab ,Button} from 'reactstrap'
import {Route,NavLink} from 'react-router-dom'
import TodoContainer from './Container/TodoContainer/TodoContainer'
import ReminderContainer from './Container/ReminderContainer/ReminderContainer'
import  classnames from 'classnames'
import {SIGNOUT} from './Store/action'
const Home = (props) => {
    const day = ['Sunday','Monday','Tuesday','Thursday','Friday','Saturday']
    const [date , setDate ] = useState(new Date())   
    const [activeTab ,setActiveTab ] = useState("1")
    const toggle = tab => {
        if(activeTab !==tab)
            setActiveTab(tab)
    }
    
    useEffect(()=> {
        // const interval = setInterval(()=>{
        //     setDate(new Date())
        // },1000)

        // return (()=> {
        //     clearTimeout(interval)
        // })
    },[])
    console.log('Home.js called') 
    return (
        <div className="App">
            <div>
                {/* <Jumbotron className="App-header">
                    <h1>Stay organized</h1>
                    <h2>Plan for work, home & everything in between</h2>
                    <h3>My Day</h3>
                    <div>
                    <h3>{date.toLocaleTimeString()}<span>  </span>{day[date.getUTCDay()]}</h3>
                    <h3>{date.toLocaleDateString()}</h3>
                    </div>
                </Jumbotron> */}
                <Navbar className="Toolbar" color='dark'>
                        <Nav tabs>
                            <NavItem>
                            <NavLink to="/">
                               <Tab className={classnames({
                                   active : activeTab === '1'})}
                                   onClick={()=> {toggle('1')}}
                                > Todos </Tab>
                            </NavLink>

                            </NavItem>
                            <NavItem>
                            <NavLink to="/reminder" activeClassName="active" >
                                <Tab className={classnames({
                                   active : activeTab === '2'})}
                                   onClick={()=> {toggle('2')}}
                                   > Reminders</Tab>
                                   </NavLink>
                            </NavItem>
                            <NavItem>
                            {/* <Button onClick={() => props.logOut()}><ExitToAppRounded /></Button> */}
                        </NavItem>

                        </Nav>
                </Navbar>
                <div className="Body">
                    {/* <Switch>
                        <Route path='/' exact><TodoContainer user={props.user} ></TodoContainer></Route>
                        <Route path='/reminder' exact><ReminderContainer user={props.user}></ReminderContainer></Route>
                        <Route path="*" component={()=>"404 Not Found"}/>
                    </Switch> */}

                </div>

            </div>
        </div>
    )
}
const mapStateToProps = state => {
    return {
        user : state.user
    }
}
const mapDispatchToProps = dispatch => {
    return {
        logOut : () => dispatch({type:SIGNOUT})
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Home)