import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

const imgUrl = 'me.jpg'
const divStyle = {
  backgroundImage: 'url('+imgUrl+')'
}
export const Info = ({  }) => (
    <div className="small-12 large-6 columns">
      <div className="boxes">
        <div className="profilePic" style={divStyle}></div><input type="button" value="Upload profile picture" />
        <div className="info">
          <h4 id="nameCurrent">Suzanne Wen</h4>
          <i>I love COMP 431!</i>
          <p>
            <i className="fi-mail"></i> <nobr id="emailCurrent">suz.wen@yahoo.com</nobr><br />
            <i className="fi-telephone"></i> <nobr id="phoneCurrent">(254)-592-5421</nobr><br />
             <i className="fi-home"></i> <nobr id="zipCurrent">76016</nobr><br />
            </p>
        </div>
      </div>
    </div>
)

export default connect(
    (state) => {
        return {
            location: state.location
        }
    },
    (dispatch) => {
        return {
            placeholder:  () => dispatch({ type: "NAVIGATION"})
        }
    }
)(Info)