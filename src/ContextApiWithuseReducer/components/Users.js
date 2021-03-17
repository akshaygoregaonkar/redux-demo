import React from 'react'
import { DataContext } from './ContextApi/ContextApi'

export default class Users extends React.Component{
    constructor(props){
        super(props)
    }
   

    render(){
        console.log(this.context)
        const{state, dispatch}=this.context
        const {userDetails}=state
        console.log(userDetails)
        return(
            <div>
                {userDetails.map((item,index)=><div key={index}>{item}</div>)}
    <button onClick={()=>dispatch({type:"ADD_USER",payload:'Akshay'})}> Add User</button>
            </div>
        )
    }
}


Users.contextType=DataContext
