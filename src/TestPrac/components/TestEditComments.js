import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'

const TestEditComments = (props) => {
    const { commentDetails, updateComment } = props
    const [editedComments, setEditedComments] = useState({})
   
    useEffect(() => {
        const { id } = props.match.params
        const findComment = commentDetails.find(item => item.id == id)
        // console.log(findComment,'findcomment')

        setEditedComments(findComment)
        // console.log(editedComments,'editedComments')

    }, [])

    const handleChange = (e) => {
        setEditedComments({...editedComments, [e.target.name]: e.target.value })
    }
    return(   
   <div>
         {Object.keys(editedComments).length > 0 && <div>
                <div> Name : <input type='text' name='name'  value={editedComments.name} onChange={handleChange} /> </div>
                <div>Email :<input type='text' name='email' value={editedComments.email} onChange={handleChange} /> </div>
                <div>Body : <input type='text' name='body' value={editedComments.body} onChange={handleChange} /> </div>
                <button onClick={() => { updateComment(editedComments); props.history.push('/comment') }}>Submit</button>
            </div>}
        </div>
    )

}
const mapStateToProps = state => ({ commentDetails: state.commentDetails ? state.commentDetails : [] })
const mapDispatchToProps = dispatch => ({ updateComment: val => dispatch({ type: 'UPDATE_COMMENTS', payload: val }) })
export default connect(mapStateToProps, mapDispatchToProps)(TestEditComments)