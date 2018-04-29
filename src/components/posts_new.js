import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import { Field , reduxForm } from 'redux-form'
import {connect} from 'react-redux'
import {creatPost} from '../actions/index'

class PostsNew extends Component{
	renderField(field){
		return (
			<div className="form-group">
			<label>{field.label}</label>
				<input 
				type="text"
				{...field.input}
				/>
				<div className="text-help">
					{field.meta.touched?field.meta.error:""}
				</div>
				
			</div>
		)
	}
	onSubmit(values){
		this.props.creatPost(values, ()=>{
			this.props.history.push('/')
		})
	}
	render(){
		const {handleSubmit} = this.props
		return(
			<form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
				<Field 
					label="Title"
					name="title"
					component={this.renderField}
				/>
				<Field 
					label="Categories"
					name="Categories"
					component={this.renderField}
				/>
				<Field 
					label="Post Content"
					name="Content"
					component={this.renderField}
				/>
				<button type="submit" className="btn btn-primary">Submit</button>
				<Link className="btn btn-danger" to="/">Go Back</Link>
			</form>
		)
	}
}

function validate(values){
	const errors ={}
	if(!values.title){
		errors.title = "Enter a title"
	}
	if(!values.Categories){
		errors.Categories = "Enter a Categories"
	}
	if(!values.Content){
		errors.Content = "Enter a Content"
	}
	return errors
}

export default reduxForm({
	validate,
	form: 'PostsNewForm'
})(
connect(null, {creatPost})(PostsNew)
)



