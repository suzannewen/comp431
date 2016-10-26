import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { Friend } from './friend'
import { updateHeadline } from './headlineAction'

// contains user information as well as info about friends, generated based on array
export const MainBar = ({ username, headline, friends, avatar, updateHeadline }) => {
  
  const _updateHeadline = () => {
    if (headline && headline.value) {
      updateHeadline (headline.value)
    }
  }

  return (
    <div className="off-canvas position-right reveal-for-large" id="profileInfo" data-off-canvas>
        <div className="row column">
          <img className="thumbnail" src={avatar}/>
          <h5>{ username }</h5>
          <p><i id="status">{ headline }</i></p>
          <input type="text" id="update" ref={ (node) => headline = node }/><input type="button" value="Update Status" onClick={ _updateHeadline } /><br /><br /><br />
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
}

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
            updateHeadline: (headline) =>  updateHeadline(headline)(dispatch)
        }
    }
)(MainBar)