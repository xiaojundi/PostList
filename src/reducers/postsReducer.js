import _ from 'lodash'

export default (state={}, action)=>{
	switch(action.type){
		case "FETCH_POSTS":
		return _.mapKeys(action.payload.data, 'id')
		case "deletePost":
		return _.omit(state,action.payload)
		case "fetchPost":
		const post = action.payload.data
		const newState = {...state}
		newState[post.id] = post
		return newState
		default:
		return state
	}
}

