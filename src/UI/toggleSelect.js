import React from 'react'
import toggleDecorator from '../decorators/toggleDecorator'
import selectIcon from '../icons/search-sign.svg'
import styles from './buttons.modules.css'
import classLister from 'css-module-class-lister'

const classes = classLister(styles)

const ToggleSelect =({ toggleAnimation, padding, transformL, transformR, opacity, display}) => {

	const styles = {transition: 'all .3s ease-out'}

	return(

		<button className={classes('btn-animation-select')}
			 onClick={ toggleAnimation }
			 style={{padding:padding, display: display, ...styles}}>

			 <div style={{transform:transformL, ...styles}} className={classes('devL')}></div>

			 <div style={{transform:transformR, ...styles}} className={classes('devR')}></div>

			 <div style={{opacity:opacity, float:'left', ...styles}}>
			   <img src={selectIcon} alt="select-icon" />
			 </div>
		</button>
	)

}
export default toggleDecorator(ToggleSelect)
