const Reducer = (state =  {
  location: 'LANDING_PAGE'
}, action) => {
  switch(action.type) {
    case 'NAVIGATION':
      return { ...state, location: action.location }
    // case 'MAIN':
    //   return { ...state, location: action.location }
    // case 'PROFILE':
    //   return { ...state, location: action.location }
    default: 
      return state
  }
}

export default Reducer