//data layer
//to track the basket
//

import React, {createContext, useContext, useReducer } from 'react';

//wrap app with this in index.js (this file and Reducer.js goes 2gether)
//data layer here
export const StateContext = createContext();

export const StateProvider = ({reducer, initialState, children}) => (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
)

export const useStateValue = () => useContext(StateContext);