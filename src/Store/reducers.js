import { DONE_TODO, UPDATE_TODOS , UPDATE_REMINDER ,SIGNIN, SIGNOUT } from './action'

// This is the initial store value, which is also representing the structure of 
// stored json 

const InitialState = {
    todos : [],
    reminders : [],
    user : {
        username : null,
        email : null,
        _id : null
    },
    isSignedIn : false,
    
}

let updatedState = null
// This function return the new state based on the action provided 
// this function need to be a pure function without any side effect 
const reducer = ( state = InitialState , action) => {


    switch(action.type){
        case UPDATE_TODOS : 
            updatedState = {
                ...state,
                todos : [...action.val]
            }
            return updatedState
        
        case DONE_TODO :
            let oldtodos = [...state.todos] 
            oldtodos.forEach(todo => {
            if((todo._id).toString() === action.id ){
                todo.completed = true
            }
            });
            updatedState =  {
                ...state,
                todos : oldtodos
            }
            return updatedState
        
        case UPDATE_REMINDER : 
            updatedState = {
                ...state,
                reminders : action.val
            }
            return updatedState

        case SIGNIN :
            return {
                ...state,
                user: {
                    username : action.val.username,
                    email : action.val.email,
                    _id : action.val._id,
                },
                isSignedIn : true
            }
            
        case     SIGNOUT : 
            localStorage.clear()
            return {
                todos : [],
                reminders : [],
                user : {
                    username : null,
                    email : null,
                    _id : null
                },
                isSignedIn : false,
            }
        default : 
            return state
    }
}
export default reducer