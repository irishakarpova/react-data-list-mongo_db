import {createSelector} from 'reselect'

export const selectionSelector = (state) => state.filters.selected

export const filterSelector = (state) => state.filters.selected

export const articleMapSelector = (state) => state.articles.entities

export const articleListSelector = createSelector(
  articleMapSelector,
  (articlesMap) => articlesMap.valueSeq().toArray()
)

export const filtratedArticlesSelector = createSelector(
  selectionSelector,
  articleListSelector,
  (selected, articles) => {
    return articles.filter((article) => {
    	return(
    		(selected !== null)  ? (!selected.length || selected.find((selected) =>
    		  selected.value === article.id)) : (!selected)
    		  )
      })
    }
  )
