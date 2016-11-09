import { resource } from './resource'
import { getArticles } from '../actions/dataAction'

const newPost = ( message ) => (dispatch) =>
  resource('POST', 'article', { text: message })
  .then ( getArticles()(dispatch) )

const editPost = ( message, id ) => (dispatch) =>
  resource('PUT', 'articles/' + id, { text: message })
  .then ( getArticles()(dispatch) )

export { newPost, editPost }