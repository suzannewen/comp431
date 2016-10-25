const Reducer = (state =  {
  location: 'LANDING_PAGE',
  username: 'blank',
  headline: 'blank',
  nextId: 0,
  friends: [ 
    // {id: 0, friendName: 'blank', friendHeadline: 'blank'},
    // {id: 1, friendName: 'blank', friendHeadline: 'blank'}
  ]
}, action) => {
  switch(action.type) {
    case 'NAVIGATION':
      return { ...state, location: action.location }
    case 'HEADLINE':
      return { ...state, username: action.username, headline: action.headline }
    case 'FRIEND':
      // return { ...state, friends: action.following }
      return { ...state, nextId: state.nextId + 1, 
          friends: [ ...state.friends, 
            { id:state.nextId, friendName: action.name, friendHeadline: action.headline } ] }
    case 'PROFILE':
      return { ...state, pic: action.pic, email: action.email, phone: action.phone, zip: action.zip }
    default: 
      return state
  }
}

export default Reducer