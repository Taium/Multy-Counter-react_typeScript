import React, { useReducer } from 'react';
import { UpdateAction } from './Counter.types';

type CounterState = {
  count: number
}



type ResetAction = {
  type: 'reset'
}

type CounterAction = UpdateAction | ResetAction

const initialState = {
                        count: 0 }

function reducer(state: CounterState, action: CounterAction) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 }
    case 'decrement':
      return { count: state.count - 1 }
    case 'addcounter':
      return { count: state.count + 1 }
    case 'reset':
      return initialState
    default:
      return state
  }
}

const Count = () => {
    const [state, dispatch] = useReducer(reducer, initialState)
    const increment = () => {
        dispatch({
            type: 'increment',
            
        });
    };
    const addcounter = () => {
        dispatch({
            type: "addcounter",
        });
    };

    const decrement = () => {
        dispatch({
            type: 'decrement',
            
        });
    };
    const reset = () => {
        dispatch({
            type: 'reset',
            
        });
    };



    return (
        <div className="border border-dark rounded">
             <h1 className='text-success'>  {   state.count   }</h1>
        <div className="flex space-x-3">
        <button className="btn btn-danger" onClick={decrement}>
          Decrement
        </button>
        
       
        <button className="btn btn-primary margin" onClick={increment}>
          Increment
        </button>
        </div>
        <br />
        <button className="btn btn-warning" onClick={() =>reset() }>Reset</button>
      
        </div>
    );
};

export default Count;