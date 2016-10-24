const Reducer = (state =  {
  location: 'LANDING_PAGE',
  username: 'blank',
  headline: 'blank',
  friends: [ 
    {id: 0, friendName: 'blank', friendHeadline: 'blank'}
  ]
}, action) => {
  switch(action.type) {
    case 'NAVIGATION':
      return { ...state, location: action.location }
    case 'HEADLINE':
      return { ...state, username: action.username, headline: action.headline }
    case 'FRIENDS':
      return { ...state, friends: action.following }
    case 'PROFILE':
      return { ...state, pic: action.pic, email: action.email, phone: action.phone, zip: action.zip }
    default: 
      return state
  }
}

export default Reducer