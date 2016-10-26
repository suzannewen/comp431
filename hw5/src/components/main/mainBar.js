import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { Friend } from './friend'

export const MainBar = ({ username, headline, friends, avatar, addTodo }) => (

<div className="off-canvas position-right reveal-for-large" id="profileInfo" data-off-canvas>
    <div className="row column">
      <img className="thumbnail" src={avatar}/>
      <h5>{ username }</h5>
      <p><i id="status">{ headline }</i></p>
      <input type="text" id="update" /><input type="button" value="Update Status" onClick={ addTodo } /><br /><br /><br />
      <h6><b>YOUR FRIENDS</b></h6>
      
      <div>
            {friends.map(({ id, friendName, friendHeadline }) => (
                <Friend key={ id } name={ friendName } headline={ friendHeadline} />
            ))}
        </div>

      <input type="text" /><input type="button" value="Add as friend" />
    </div>
  </div>

)

export default connect(
    (state) => {
        return {
            username: state.username,
            headline: state.headline,
            friends: state.friends,
            avatar: state.avatar
        }
    }, 
    (dispatch) => {
        return {
            addTodo: (text) => dispatch({ type: 'ADD_TODO', text })
        }
    }
)(MainBar)