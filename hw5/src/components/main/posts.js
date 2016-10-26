import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

// one post div generated for each article
export const Posts = ({ text }) => (
<div>
  <div className="small-9 columns">{ text }<input type="button" value="Edit" id="left"/> <input type="button" value="Leave a comment" id="right" /></div>
</div>
)

export default connect(null, null
)(Posts)