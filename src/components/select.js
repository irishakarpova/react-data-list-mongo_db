import React, { Component } from 'react'
import Select from 'react-select'
import {connect} from 'react-redux'
import changeSelection from '../ac'
import {articleListSelector, selectionSelector} from '../selectors'
import PropTypes from 'prop-types';
import styles from "./components.modules.css"
import globalStyles from '../UI/bootstrap.module.css'
import classLister from 'css-module-class-lister'

const classes = classLister(styles, globalStyles)

class SelectFilter extends Component{

  static propTypes = {
    articles: PropTypes.array.isRequired
  }

  get options(){
    return this.props.articles.map((article) =>({
      label: article.title,
      value: article.id,
    }))
  }

  handleChange = (selected, articles) => {
    return this.props.changeSelection(selected)
  }

  render(){
  const placeholder = "Search..."

  const styles = {
    control: styles => ({ ...styles,
        backgroundColor: 'white',
        borderRadius: '0',
        border:'1px solid black',
        ':hover': {border:'1px solid black'},
        boxShadow:'0',
       }),
    multiValueLabel: () => ({
      color: 'white',
      backgroundColor: 'black',
      fontSize:'12px',
      fontFamily:'Roboto Mono',
      padding:'5px'
    }),
    multiValueRemove: () => ({
      display: 'none'
    }),
    option: () => ({
      color: 'black',
      borderRadius: '0',
      backgroundColor: '#fec85b',
      fontSize:'12px',
      fontFamily:'Roboto Mono',
      padding:'10px 10px',
      ':hover':
      {
        backgroundColor:'white',
        borderLeft:'5px solid #fec85b',
        borderRight:'5px solid #fec85b',
        padding:'10px 5px'
      },
    }),
    input: styles => ({
      fontSize:'12px',
      fontFamily:'Roboto Mono',
     }),
    noOptionsMessage: styles => ({
       fontSize:'12px',
       fontFamily:'Roboto Mono',
       textAlign:"center"
      }),
    menuList: styles => ({...styles,
        borderRadius: 0,
        padding: 0,
       }),
    menu: styles => ({...styles,
        borderBottom:'1px solid black',
        borderRadius: 0,
       }),
    placeholder: styles => ({...styles,
        fontSize:'12px',
        fontFamily:'Roboto Mono',
        color:'black'
       }),
    indicatorSeparator: styles => ({...styles,
         display:'none'
        }),
    dropdownIndicator: styles => ({...styles,
          color:'black',
          ':hover': {color:'black'},
        }),
  }

    return(

				<div className={classes("container")}>
					<div className={classes("row p-0 pb-3 justify-content-md-center")}>
						<div className={classes("col-md-10 col-12 test_select_open")}>
				      <Select options={this.options}
				              value={this.props.selected}
				              onChange={this.handleChange}
				              styles={styles}
				              placeholder={placeholder}
				              isMulti
				      />
						</div>
					</div>
				</div>

		)
  }
}

export default connect(
  (state) =>({
    selected: selectionSelector(state),
    articles: articleListSelector(state)
  }),
  { changeSelection }
 )(SelectFilter)
