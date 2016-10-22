const Reducer = (state =  {
  location: 'MAIN_PAGE'
  friends:
}, action) => {
  switch(action.type) {
    case 'PROFILE_PAGE':
      return { ...state,
        location: 'PROFILE_PAGE'}]
      }
    case 'REMOVE_TODO':
      return { ...state, 
        todoItems: state.todoItems.filter(({id}) => id != action.id)
      }
    case 'TOGGLE_TODO':
      return { ...state, 
        todoItems: state.todoItems.map(({ id, text, done }) => (
          { id, text, done: action.id === id ? !done : done }
        ))
      }
    case 'SET_VISIBILITY_FILTER':
      return { ...state, visibilityFilter: action.filter }
    default: 
      return state
  }
}

export default Reducer