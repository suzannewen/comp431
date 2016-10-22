import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

//write if/else logic here to determine which component part to render

export const Component = ({ location }) => {
    if (location == "MAIN_PAGE") {
        return (
                <Header />
                <Main />
                <Footer />
        )
    }
    if (location == "PROFILE_PAGE") {
        return (
                <Header />
                <Profile />
                <Footer />
        )
    }
    else if (location == "LOGIN_PAGE") {
        return (
                <Landing />
                <Footer />
        )
    }
}

Component.propTypes = {
    location: PropTypes.string.isRequired,
}

// export const AddTodo = ({ addTodo }) => {
    
//     const _addTodo = () => {
//         if (newTODO && newTODO.value) {
//             addTodo(newTODO.value)
//             newTODO.value = ''
//         }
//     }

//     return (<span>
//         <input type="text" placeholder="To Do" ref={ (node) => newTODO = node } />
//         <button onClick={_addTodo}>Add Item</button>
//     </span>)
// }

//connects state to html

export default connect(
    (state) => {
        return {
            location: state.location
        }
    }, 
    (dispatch) => {
        return {
            addTodo: (text) => dispatch({ type: 'ADD_TODO', text })
        }
    }
)(Component)