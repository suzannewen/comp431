import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

import { deleteFriend } from './headlineAction'

// generated depending on how many friends you have

export const Friend = ({ name, headline }) => (
    <div>
      <img className="thumbnail"/>
      <h6><i className="fi-x" onClick={() => { deleteFriend(name) } }></i> { name }</h6>
      <p><i>{ headline }</i></p><br />
    </div>
)

export default connect(null, 
    (dispatch) => {
        return {
            deleteFriend: (name) =>  deleteFriend(name)(dispatch)
        }
    }
)(Friend)