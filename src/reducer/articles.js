import { Record } from 'immutable'
import { ADD_ARTICLE, LOAD_ALL_ARTICLES, LOAD_ARTICLE } from '../constants'
import { arrToMap } from './utils'

const ArticleRecord = Record({
	id: null,
	title: null,
	description: null,
	location: null,
	members: null,
	years: null
})
const ReducerRecord = Record({
	entities: arrToMap([], ArticleRecord)
})

export default (articlesState = new ReducerRecord(), action) =>{

  const { type, payload, randomId, response } = action

  switch (type){

	case ADD_ARTICLE:
		  return articlesState.setIn(['entities', randomId], {
			  ...payload.article, id:randomId })

	case LOAD_ALL_ARTICLES:
			return articlesState.set('entities', arrToMap(response, ArticleRecord))

	case LOAD_ARTICLE :
			return articlesState.set(['entities', payload.id], new ArticleRecord(response))

    default:
        return articlesState
  }

}
