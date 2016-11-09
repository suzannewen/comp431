import { resource } from './resource'
import { connect } from 'react-redux';

let arr = ''

//separate function called for each chunk of data needed 

function fetchData( dispatch ) {
      getHeadline(dispatch)
      .then ( getFriends(dispatch) )
      .then ( getAvatar()(dispatch) )
      .then ( getArticles()(dispatch) )
      .then ( getProfile()(dispatch) )
} 

function getHeadline (dispatch) {
       return resource('GET', 'headlines')
      .then ( r1 => {
        console.log(r1)
        console.log("testtesttest")
        dispatch({ type: 'HEADLINE', username: r1.headlines[0].username, headline: r1.headlines[0].headline })
        } )
}

function getFriends (dispatch) {
      return resource('GET', 'following')
      .then ( r2 => {
          arr = 'headlines/'
          r2.following.forEach( (element, index, array) => {
            arr += element + ','
          })
          return resource('GET', arr)
      })
      .then ( r3 =>  {
            r3.headlines.forEach( (element, index, array) => {
              dispatch( { type: 'FRIEND', name: element.username, headline: element.headline } ) 
            })
      })
}

const getAvatar = () => (dispatch) => {
      return resource('GET', 'avatars')
      .then ( r4 => dispatch( { type: 'AVATAR', avatar: r4.avatars[0].avatar } ) )
}

const getArticles = () => (dispatch) => {
      return resource('GET', 'articles')
      .then ( r5 => dispatch( { type: 'ARTICLES', articles: r5.articles } ) )
}

const getProfile = () => (dispatch) => {
      return resource('GET', 'email')
      .then ( r6 => dispatch( { type: 'EMAIL', email: r6.email } ))
      .then ( r7 => resource('GET', 'zipcode') )
      .then ( r7 => dispatch( { type: 'ZIPCODE', zipcode: r7.zipcode } ))
}


export default connect()(fetchData);

export { fetchData, getArticles, getProfile, getFriends }