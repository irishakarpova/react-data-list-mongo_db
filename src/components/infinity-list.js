import React, { Component } from 'react'
import Article from './article'
import { connect } from 'react-redux'
import accordion from "../decorators/accordion"
import { filtratedArticlesSelector } from '../selectors'
import { loadAllArticles  } from '../ac'
import EventListener, { withOptions } from 'react-event-listener'
import styles from "./components.modules.css"
import classLister from 'css-module-class-lister'

const classes = classLister(styles)

class InfinityList extends Component {

  state = {
    showItems: 25
  }

  componentDidMount(){
    const { fetchAllArticles } = this.props
    fetchAllArticles && fetchAllArticles()
    console.log('loaded')
  }

  handleScroll = () => {
    const timer = setTimeout(() => {
      this.setState({
        showItems: this.state.showItems  + 1
      });
    }, 1000)
      return () => clearTimeout(timer)
  }

  render() {
    const { articles, openItemId, toggleOpenItem } = this.props
    const getItems = articles.slice(0,this.state.showItems).map((article, key) =>{
      return (
        <li className={classes("article-list-li test_article_li")} key={ article.id}>
          <Article
            article={ article }
            isOpen = {openItemId === article.id}
            toggleOpen = {toggleOpenItem(article.id)}
            cssColor= {openItemId === article.id}
          />
        </li>
      )
    })

    return (
      <div>
        <EventListener
          target="window"
          onScroll={withOptions(this.handleScroll, {passive: true, capture: false})}
        />
        <ul className={classes("article-list")}>
          {getItems}
        </ul>
        <EventListener target={document}/>
      </div>
    )
  }
}

export default connect((state) => {

  return {
    articles: filtratedArticlesSelector(state),
  }

}, {fetchAllArticles: loadAllArticles})(accordion(InfinityList))
