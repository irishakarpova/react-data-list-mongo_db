import React from 'react'
import toggleDecorator from '../decorators/toggleDecorator'
import addArticleIcon from '../icons/create-article.svg'
import styles from './buttons.modules.css'
import classLister from 'css-module-class-lister'

const classes = classLister(styles)

const ToggleCreate = ({ toggleAnimation, padding, transformL, transformR, opacity } ) => {

	const styles = {transition: 'all .3s ease-out'}

	return(

		<button className={classes('btn-animation-create')}
			onClick={toggleAnimation} style={{padding: padding, ...styles}}>
		  <div style={{transform:transformL, ...styles}} className={classes('devL')}></div>
		  <div style={{transform:transformR, ...styles}} className={classes('devR')}></div>
		  <div style={{opacity:opacity, float:'left', ...styles}}>
				<img src={addArticleIcon}   alt="search-icon" />
		  </div>
		</button>
	)

}
export default toggleDecorator(ToggleCreate)
