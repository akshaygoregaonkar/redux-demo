import axios from 'axios'
import React,{useEffect,useContext}from 'react'
import DataProvider, { DataContext } from './ContextApi/ContextApi'

 const Comments=(props )=>{

     const {state,dispatch}= useContext(DataContext)

     const{ CommentDetails}=state
useEffect(() => {
    if(CommentDetails.lengh==0)
    axios.get('https://jsonplaceholder.typicode.com/comments').then(res=>dispatch({type:'ADD_COMMENTS',payload:res.data})).catch(err=>console.log('something went Wrong'))
}, [])
    return(
        <div>

            {CommentDetails.map((item,index)=><div key={index} style={{float:'left',width:'350px'}}>
               <div>Name : {item.name}</div>
               <div>Email : {item.email}</div>
               <div>Body : {item.body}</div>
             <div>
             </div>
           </div>)}



        </div>
    )
}
export default Comments


