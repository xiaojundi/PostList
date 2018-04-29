import React, {Component} from 'react'
import {fetchPosts} from '../actions/index'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import _ from 'lodash'

class PostsIndex extends Component{

	componentDidMount(){
		this.props.fetchPosts();
	}
	renderPosts(){
		return _.map(this.props.listItems).map((val)=>{
			return (
				<li key={val.id} className="list-group-item">
					{val.title}
				</li>
			)
		})
	}
	render(){
		return (
			<div>
				<div className="text-xs-right">
					<Link className="btn btn-primary" to="/posts/new">
						Add a post
					</Link>
				</div>
				<h3>Posts</h3>
				<ul className="list-group">
					{this.renderPosts()}
				</ul>
			</div>
		)
	}
}

function mapDispatchToProps(dispatch){
	return bindActionCreators({fetchPosts},dispatch)
}

function mapStateToProps(state){
	return {
		listItems: state.posts
	}
}


export default connect(mapStateToProps,mapDispatchToProps)(PostsIndex)