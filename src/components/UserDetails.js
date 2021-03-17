import React from 'react'
import { connect } from 'react-redux'

class UserDetails extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        const { UserInfo,updateUserName,editUser } = this.props
        return (

            <div>
                {UserInfo.map((item,index)=><h2 key={index}>  {item} <button onClick={()=>{editUser({index,name:'Akshay'})}}>Edit</button></h2>)}
                <button onClick={()=>updateUserName('Adam')}>Update Adam</button>
            </div>
        )

    }

}
const mapStateToProps=(state)=>{
    return {
        UserInfo: state.userDetails
    }
}

const mapDispatchToProps=(dispatch)=>{
    return{
        updateUserName:(val)=>{dispatch({type:'ADD_USER', payload:val})},
        editUser:(val)=>{dispatch({type:'UPDATE_USER',payload:val})} 

           }
    }


export default connect(mapStateToProps,mapDispatchToProps)(UserDetails)