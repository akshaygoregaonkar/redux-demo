import React, {createContext,useReducer} from 'react'
import reducer from '../Reducer/reducer'

export const DataContext = createContext()

const intailVal={
    userDetails:['Tommy','Jack'],
    CommentDetails:[]
}


const DataProvider=({ children })=>{
    const [state, dispatch] = useReducer(reducer,intailVal )
    return (
        <DataContext.Provider value={{state, dispatch }}>
             {children}
        </DataContext.Provider>
    )
}
export default DataProvider