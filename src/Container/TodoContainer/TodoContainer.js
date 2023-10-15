import React , { useState, useEffect } from 'react'
import TodoCard from '../../Component/TodoCard/TodoCard'
import NewTodo from '../../Component/NewTodo/NewTodo'
import axios from 'axios'
import {AddCircleOutline} from '@material-ui/icons'
import { connect } from 'react-redux'
import { UPDATE_TODOS, DONE_TODO } from '../../Store/action'
import Loading from '../../Component/Loading/Loading'
const TodoContainer = (props) => {
    const [newTodoModal,setNewTodoModal] = useState(false);
    // const [Todos,setTodos] = useState(props.todos)  
    const [isLoading,setLoading] = useState(true)
    const user = props.user
    
    useEffect(()=>{
       if(props.todos.length === 0){
            // axios.get(`http://localhost:9000/${user._id}/todos`)
            //     .then(res => {
            //         console.log('Req Called')
            //         // setTodos(res.data)
            //         props.updateTodos(res.data)
            //         setLoading(false)
            //     })
        }else{
            setLoading(false)
        }
        console.log('TodoContainer useEffect')
    },[])
    
    const addNewTodo = (todo) => {
        setLoading(true)
        // axios.post(`http://localhost:9000/${user._id}/todo`,{todo})
        // .then(res => {
        //     const oldTodos = [...props.todos]
        //     oldTodos.push(res.data)
        //     props.updateTodos(oldTodos)
        //     setNewTodoModal(false)
        //     setLoading(false)
        // })
    }
    const deleteTodo = (id) => {
        setLoading(true)
        // axios.delete(`http://localhost:9000/${user._id}/${id}/todo`)
        // .then(res => {
        //     const oldTodos = props.todos.filter(todo => (todo._id).toString() !== id)
        //     props.updateTodos(oldTodos)
        //     setLoading(false)
        // })
        // .catch(err => console.log(err))
    }
    const completeTodo = (id) => {
        // axios.post(`http://localhost:9000/${user._id}/${id}/completetodo`)
        // .then(res => props.completeTodo(id))
        // .catch(err => console.log(err))
    }
    return (
        <div>{ !isLoading ? <div className='Container'>
                <button className="AddButton" onClick={() => setNewTodoModal(true)}> <AddCircleOutline/></button>
                <NewTodo isOpen={newTodoModal} closeModal={()=> setNewTodoModal(false)} todoHandler={(todo) => addNewTodo(todo)}></NewTodo>
                <div>{  
                    props.todos.map(todo => {
                            console.log(todo._id)
                            return <TodoCard key={todo._id} todo={todo} complete={(id) => completeTodo(id)} delete={(id)=>deleteTodo(id)}></TodoCard>}
                            ) 
                    }
                </div>
            </div> : <Loading/>}</div>
    
    )
}
const mapStateToProps = state => {
    return {
        todos : state.todos,
    }
}
const mapDispatchToProps = dispatch =>{
    return {
        updateTodos : todos => dispatch({type : UPDATE_TODOS , val : todos }),
        completeTodo : id => dispatch({type: DONE_TODO , id : id })
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(TodoContainer)