const Reducer = (state =  {
  location: 'LANDING_PAGE'
}, action) => {
  switch(action.type) {
    case 'NAVIGATION':
      return { ...state, location: action.location }
    default: 
      // console.log("!" +state.location)
      return state
  }
}

export default Reducer