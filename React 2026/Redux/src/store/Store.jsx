// This is Component
import { createStore } from "redux"

// actions define
const ADD_TASK = 'task/add'
const DELETE_TASK = 'task/delete'
const UPDATE_TASK = 'task/update'

const initialState = {
    task:[]
}

function reducer(state = initialState,action){
    switch (action.type) {
        case ADD_TASK:
            return {...state , task:[...state.task , action.payload] }

        case DELETE_TASK:
            const filteredArray = state.task.filter((currTask , index) => {
                return index !== action.payload
            })

            return {...state ,task:filteredArray }
    }
}

// Creating a Global Store
export const store = createStore(reducer)
console.log(store) // Object

store.subscribe(() => {
    console.log(store.getState())
})

//action creators
export function addTask(data){
    return {type:ADD_TASK , payload:data}
}

export function deleteTask(id){
    return {type:DELETE_TASK , payload:id}
}


store.dispatch(addTask('Coding'))

store.dispatch(addTask('Gaming'))

store.dispatch(addTask('Cooking'))

store.dispatch(deleteTask(1))
