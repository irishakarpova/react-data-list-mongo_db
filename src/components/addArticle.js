import React, {Component} from 'react'
import {connect} from 'react-redux'
import {addArticle} from '../ac'
import styles from "./components.modules.css"
import globalStyles from 'bootstrap'
import classLister from 'css-module-class-lister'

const classes = classLister(styles, globalStyles)

class AddArticle extends Component{

	state={
		title:'',
		members:'',
		description:'',
		location:'',
		years:'',
		submitValue: 'Submit your article',
		errorTitle: '',
		errorMembers: '',
		errorText: '',
		errorLocation: '',
		errorYears: ''
	}

	render(){

	const {title, members, description, location, years, errorText, errorMembers, errorTitle, errorLocation,errorYears} = this.state

	return(
		<div className={classes("container-fluid p-0 m-0")}>
			<div className={classes("container")}>
				<div className={classes("row d-flex justify-content-center test_create_open")}>
					<div className={classes("form col-md-10 col-12")}>
						<h3 className={classes("new-article-title")}>Add new article </h3>
						<form className={classes("d-flex flex-column")}
								onSubmit={this.handleSubmit}>
							<input className={classes("form-field")}
								placeholder="Name of group"
								value={title}
								onChange={this.handleChange('title')}
							/>
							{errorTitle}

							<input className={classes("form-field")}
								placeholder="Members"
								value={members}
								onChange={this.handleChange('members')}
							/>
				  		{errorMembers}
							<input className={classes("form-field")}
								placeholder="Location"
								value={location}
								onChange={this.handleChange('location')}
							/>
						  {errorLocation}
							<input className={classes("form-field")}
								placeholder="Years"
								value={years}
								onChange={this.handleChange('years')}
							/>
							{errorYears}
							<input className={classes("form-description")}
								placeholder="Description"
								value={description}
								onChange={this.handleChange('description')}
							/>
							{errorText}
							<input type='submit' value='SUBMIT YOUR ARTICLE'/>
						</form>
					</div>
				</div>
			</div>
		</div>
	)}

   handleSubmit = (ev) => {

	   ev.preventDefault()

	   const errorMessage =
		   <p className={classes("error_messages")}>this field can't be blank</p>
	   const errorMessageDescr =
			<p className={classes("error_messages")}>this field must be at least 50 characters minimum</p>

	   let errors = {
	   	 errorTitle: null,
		   errorMembers: null,
		   errorText: null,
			 errorYears: null,
			 errorLocation: null
	   }

	   let hasError = false

			if (!this.isValidField('title')){
				errors.errorTitle = errorMessage
				hasError = true
			}

		   if (!this.isValidField('members')){
				errors.errorMembers = errorMessage
			    hasError = true

			}
		   if (!this.isValidField('description')){
				errors.errorText = errorMessageDescr
				hasError = true
			}
			if (!this.isValidField('years')){
			 errors.errorYears = errorMessage
			 hasError = true
		 }
		 if (!this.isValidField('location')){
			errors.errorLocation = errorMessage
			hasError = true
		}

			this.setState(errors)
				if (hasError) {
					return
			}

		this.props.addArticle(this.state)

		return(
			this.setState({
				title: '',
				members: '',
				description: '',
				location:'',
				years:'',
				submitValue: 'The article is submitted'
			})
		)
   }

	isValidField = (type) => this.state[type].length >= limits[type].min

	handleChange = (type) => (ev) =>{
		const {value} = ev.target
		if(value.length>limits[type].max) return
			this.setState({
				[type]: value
			})
		}
}

const limits =  {
	title: { min:1, max:200},
	members: { min:1 , max:100},
	description: { min:5, max:350},
	location: { min:5, max:500},
	years: {min:4, max:500}
}

export default connect(null, (dispatch, ownProps) => ({
	addArticle: (article) => dispatch(addArticle(article, ownProps.articleId))
}))(AddArticle)
