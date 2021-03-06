import { resource } from './resource'
import { fetchData, getHeadline } from '../actions/dataAction'

const register = ( username, email, dob, zipcode, password ) => (dispatch) =>
  resource('POST', 'register', { username: username, email: email, dob: dob, zipcode: zipcode, password: password})
  .then( r => {
      dispatch({ type: 'NAVIGATION', location: 'MAIN_PAGE'})
      fetchData( username, dispatch )
  })
  .catch( () => {alert ("Your username or password is incorrect.")}  )    

const login = ( username, password ) =>  (dispatch) => 
  resource('POST', 'login', { username: username, password: password })
    .then(r => {
      dispatch({ type: 'NAVIGATION',  location: 'MAIN_PAGE' })
      fetchData( username, dispatch )
      })
    .catch( () => {alert ("Your username or password is incorrect.")}  )     

const initialVisit = ( ) =>  (dispatch) => {
    getHeadline( dispatch )
    .then(r => { 
      dispatch({ type: 'NAVIGATION',  location: 'MAIN_PAGE' })
    })
}

const logout = ( ) =>  (dispatch) => 
  resource('PUT', 'logout')
    .then( 
      dispatch({ type: 'LOGOUT' }) 
    )
    .catch() 

export { register, login, logout, initialVisit }