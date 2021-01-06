import React from 'react'
import SelectFilter from './select'
import AddArticle from './addArticle'
import toggleOpenDecorator from '../decorators/toggleOpenDecorator'
import logo from '../icons/logo.svg'
import Menu from '../UI/menu'
import styles from "./components.modules.css"
import globalStyles from 'bootstrap'
import classLister from 'css-module-class-lister'

const classes = classLister(styles, globalStyles)

function Header(props){

return(
    <header>
      <div className={classes("container-fluid bg-container_dark p-0")}>
        <div className={classes("container")}>
          <div className={classes("row justify-content-center")}>
            <div className={classes("col-md-3 bg-logo")}>
              <img src={logo} className={classes('app-logo')} alt="logo" />
            </div>
            <div className={classes("col-md-7 d-none d-md-block p-0")}>
              <div className={classes("title")}>
                <h1>FOR THE VOICE</h1>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={classes("container-fluid  bg-sub-title")}>
        <div className={classes("container")}>
          <div className={classes("row justify-content-center d-flex flex-row")}>
            <div className={classes("col-md-3 p-0")}>
              <div className={classes("logo-years")}>
                <p>1910-1920</p>
              </div>
            </div>
            <div className={classes("col-8 d-block d-md-none p-0")}>
              <div className={classes("title-sm")}>
                <h1>FOR THE VOICE</h1>
              </div>
            </div>
            <div className={classes("col-md-7 col-4 p-0")}>
              <div className={classes("sub-title")}>
                <h2>AVANGARD RUSSIAN BOOK</h2>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={classes("container-fluid bg-container_dark section-book-cont p-0")}>
        <div className={classes("container")}>
          <div className={classes("row justify-content-between")}>
            <div className={classes("col-md-9 col-8 section-book")}>
              <h3>ASSOCIATIONS, GROUPS AND PUBLISHING HOUSES</h3>
            </div>
            <div className={classes("col-md-3 col-3 d-flex align-items-center")}>
              <Menu
                handleOpenSelect = {props.toggleOpenSelect}
                handleOpenAdd = {props.toggleOpenAdd}
              />
            </div>
            {openSelect(props)}
            {openAdd(props)}
          </div>
        </div>
      </div>
    </header>
  )
}

 function openSelect(props){
	 return (props.isOpenSelect ? <SelectFilter/> : null)
 }

 function openAdd (props){
	 return (props.isOpenAdd ? <AddArticle /> : null)
 }

export default toggleOpenDecorator(Header)
