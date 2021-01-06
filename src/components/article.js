import React, {Component} from "react"
import {connect} from 'react-redux'
import { loadArticleById  } from '../ac'
import styles from "./components.modules.css"
import globalStyles from 'bootstrap'
import classLister from 'css-module-class-lister'


const classes = classLister(styles, globalStyles)

class Article extends Component{

  componentDidUpdate(oldProps){
    const { isOpen, loadArticleById, article } = this.props
    if (isOpen && !oldProps.isOpen) loadArticleById(article.id)
    console.log('loaded2')
  }


  render(){
  const {article, toggleOpen, cssColor} = this.props
  const title = cssColor ? 'articleTitle' : 'articleTitleOn test_open_data'

  return(
  <div>
    <article className={classes("bg-article")}>
      <div className={classes("container p-0")}>
        <div className={classes("row p-0 justify-content-md-center")}>
          <div className={classes("col-md-10 col-12")}>
             <button onClick = {toggleOpen} className= {title}>
              <p>{article.title}</p>
            </button>
            {this.getBody()}
          </div>
        </div>
      </div>
    </article>
  </div>
  )}


  getBody(){
    const {isOpen, article} = this.props

    if (!isOpen) return null
    return(
      <section className={classes("bg-section test_data")}>
        <div className={classes("article-location")}><p>{article.years}</p></div>
        <div className={classes("article-location")}><p>{article.location}</p></div>
        <div className={classes("article-text")}><p>{article.description}</p></div>
        <div className={classes("article-member")}><p>{article.members}</p></div>
      </section>
    )
  }
}

export default connect(
  null,
  { loadArticleById }
)(Article)
