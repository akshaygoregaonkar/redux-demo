import React,{ useState,useEffect}from 'react'
import { connect } from 'react-redux'
import axios from 'axios'


const TestCommentDetails = (props) => {
    const {commentDetails,addComments}=props

useEffect(()=>{
    if(commentDetails.length==0){
        axios.get('https://jsonplaceholder.typicode.com/comments').then(res=>addComments(res.data)).catch(err=>console.log("Errorr",err))
    }

},[])

const handleClick=(id)=>{
    props.history.push(`/comment/${id}`)

}
    return (
        <div>
            {commentDetails.map((item,index)=><div key={index} style={{float:'left',width:'350px'}}>
                <div> Name : {item.name}</div>
                <div>Email : {item.email}</div>
                <div> Body : {item.body}</div>
                <button onClick={()=>handleClick(item.id)}>Edit</button>
                </div>)}
   
        </div>)
}

const mapStateToProps = state => ({ commentDetails: state.commentDetails? state.commentDetails:[] })

const mapDispatchToProps = dispatch => ({
    addComments: val => dispatch({ type: "ADD_COMMENTS", payload: val }),
   

})

export default connect(mapStateToProps,mapDispatchToProps)(TestCommentDetails)