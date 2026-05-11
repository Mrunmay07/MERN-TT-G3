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
const store = createStore(reducer)
console.log(store) // Object

store.subscribe(() => {
    console.log(store.getState())
})

store.dispatch({type:ADD_TASK , payload:'Coding'})

store.dispatch({type:ADD_TASK , payload:'Gaming'})

store.dispatch({type:ADD_TASK , payload:'Cooking'})

store.dispatch({type:DELETE_TASK , payload:1})
