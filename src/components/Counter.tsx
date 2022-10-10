import React, { useEffect, useState } from 'react';
import { useReducer } from 'react'
import Count from './Count';
import { UpdateAction } from './Counter.types';


type ResetAction = {
  type: 'addCounter'
}
const ADDCOUNTER = 'addCounter';


const initialState = [
  {
      id: Math.random(),
      value: 0,
  }
];
function reducer(state = initialState, action:ResetAction) {

   if (action.type === ADDCOUNTER) {
      return[ 
          ...state,
          {
              id: Math.random(),
              value: 0,
          }
      ]
  }
}
const Counter = () => {
  const[show ,setShow]=useState(false)
  const addCounter= () => {
    setShow(true)
    
  }
  const [state, dispatch] = useReducer(reducer, initialState);

  console.log({state});

  const addcounter = () => {
      dispatch({
          type: ADDCOUNTER,
      });
  };
  
    return (
        <>
        
      {
        state?.map(() =><Count/>)
      }
      
      
      <br />
      <div>
        <br />
        <button className="btn btn-info" onClick={addcounter}>Add new counter</button>
      </div>
      <br />
      </>
    );
};

export default Counter;