import { resource } from '../actions/resource'
import { fetchData, getFriends } from '../actions/dataAction'

//resource called to 'put' headline into database
const updateHeadline = ( headline ) =>  (dispatch) => 
  resource('PUT', 'headline', { headline: headline })
    .then(r => {
      dispatch({ type: 'UPDATE_HEADLINE',  headline: headline })
      })   

const addFriend = ( newFriend ) =>  (dispatch) => {
  let friendList 

  resource('GET', 'following')
  .then (r => { friendList = r })
  .then ( resource('PUT', 'following/' + newFriend) )
    .then (r => {
        console.log(friendList)
        console.log(r)
    } )
      // .then(getFriends(dispatch))
    // .then(r => {
    //   dispatch({ type: 'FRIEND',  name: newFriend, headline: 'I am your new friend!' })
    //   }) 
}

const deleteFriend = ( deleted ) =>  (dispatch) => 
  resource('DELETE', 'following/' + deleted)
    .then(r => {
      dispatch({ type: 'FRIEND',  name: newFriend, headline: 'I am your new friend!' }) //fix this
      })
    .catch( )    

export { updateHeadline, addFriend, deleteFriend }