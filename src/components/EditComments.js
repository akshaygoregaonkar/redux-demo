import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
const EditComments = (props) => {
    const { commentDetails, updateComments } = props
    const [editedComments, setEditedComments] = useState({})

    useEffect(() => {
        const { id } = props.match.params
        const findComment = commentDetails.find(item => item.id==id)
        setEditedComments(findComment)
    }, [])
    const handleChange = (e) => {
        setEditedComments({...editedComments, [e.target.name]: e.target.value })
       

    }

    return (
        <div>
            {Object.keys(editedComments).length > 0 && <div>

                <div><input type='text' name='name' value={editedComments.name} onChange={handleChange} /></div>
                <div> <input type='text' name='email' value={editedComments.email} onChange={handleChange} /> </div>
                <div> <input type='text' name='body' value={editedComments.body} onChange={handleChange} /></div>
                <button onClick={() =>{ updateComments(editedComments); props.history.push('/comment')}}> Submit</button>
            </div>}

        </div>
    )


}
const mapStateToProps = state => ({ commentDetails: state.commentDetails ? state.commentDetails : [] })
// const mapStateToProps = state => ({ commentDetails: state.commentDetails ? state.commentDetails : [] })
const mapDispatchToProps = dispatch => ({
    updateComments: (val) => dispatch({ type: 'UPDATE_COMMENT', payload: val })
})

export default connect(mapStateToProps, mapDispatchToProps)(EditComments)
