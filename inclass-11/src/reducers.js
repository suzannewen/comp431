
const Reducer = (state =  {
	nextId: 2,
	todoItems: [
	    {id: 0, text: "This is an item", done: false},
	    {id: 1, text: "Another item", done: false}
	]
}, action) => {
	switch(action.type) {
		case 'ADD_TODO':
			return {
				...state,
				todoItems: [...state.todoItems, { id:state.nextId++, text:action.text, done:false }]
			}
		case 'REMOVE_TODO':
			return {
				...state,
				todoItems: state.todoItems.filter(({id, text}) => id != action.id)
			}
		case 'TOGGLE_TODO':
			return {
				...state,
				todoItems: state.todoItems.map((x) => {
					if (x.id === action.id) {
						return { ...x, done:!x.done };
					}
					else {
						return x;
					}
				})
			}
		default: 
			return state;
	}
}

export default Reducer