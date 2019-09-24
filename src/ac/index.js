import {
  CHANGE_SELECTION, ADD_ARTICLE,
  LOAD_ALL_ARTICLES,
  LOAD_ARTICLE
 } from '../constants'

export default function changeSelection(selected){
  return{
    type: CHANGE_SELECTION,
    payload: {selected}
  }
}

export function addArticle(article){
	return{
		type: ADD_ARTICLE,
		payload: article,
		generateId: true,
    callAPI: '/api/article',
	}
}
export function loadAllArticles(){
  return{
    type: LOAD_ALL_ARTICLES,
    callAPI: '/api/article'
  }
}

export function loadArticleById(id){
  return (dispatch) => {
    dispatch({
      type: LOAD_ARTICLE,
      payload: {id}
    })
    fetch(`/api/article/${id}`)
      .then(res => res.json())
      .then(response => dispatch({
        type: LOAD_ARTICLE,
        payload: {id}
      }))
  }
}
