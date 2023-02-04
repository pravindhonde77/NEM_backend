import React from 'react'
import * as actionsTypes from "../actions/actionsTypes"

const todosReducers = (state=[],action) => {
  switch(action.type){
    case actionsTypes.ADDNEW_TODO:
      return [action.payload,...state]



    
    default:
        return state;

  }
}

export default todosReducers