import React, {Component} from 'react'
import {fetchPost, deletePost} from '../actions/index'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
class PostsShow extends Component{
	componentDidMount(){
		const id = this.props.match.params.id
		this.props.fetchPost(id)
	}
	deletePost=()=>{
		this.props.deletePost(this.props.match.params.id, ()=>{
			this.props.history.push("/")
		})
	}
	render(){
		const value = this.props.post[this.props.match.params.id]
		if(!value){
			return <div>Loading</div>
		}
		return(
			<div>
			hello
				<h3>{value.title}</h3>
				<h6>{value.categories}</h6>
				<Link to="/">Go back</Link>
				<button className="btn btn-danger" onClick={this.deletePost}>Delete this post</button>
			</div>
		)
	}
}

function mapStateToProps(state){
	return {
		post: state.posts
	}
}

export default connect(mapStateToProps,{fetchPost,deletePost})(PostsShow)