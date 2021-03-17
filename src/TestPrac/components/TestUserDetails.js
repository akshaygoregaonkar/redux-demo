import React, { useState } from 'react'
import { connect } from 'react-redux'

const TestUSerDetails = (props) => {
    const { userDetails, AddUser,deleteUsers } = props
    const [tempName, setTempName] = useState('')
    return (
        <div>
            <div>
                <h2>User List</h2>
                <div>
                    {userDetails.map(item => <div>
                        <h2> {item} </h2>
                    </div>)}

                </div>
         Enter User<input onChange={(e) => setTempName(e.target.value)} />
                <button onClick={() => AddUser(tempName)} >Add to UserList</button>
                <button onClick={()=>deleteUsers() }>DeleteALL</button>
            </div>

        </div>)
}

const mapStateToProps = state => ({ userDetails: state.userDetails ? state.userDetails : '' })
const mapDispatchToProps = dispatch => ({
     AddUser: val => dispatch({ type: 'ADD_USER_TO_LIST', payload: val }) ,
     deleteUsers: ()=>dispatch({type:'DELETE_USER'})
    })
export default connect(mapStateToProps, mapDispatchToProps)(TestUSerDetails)