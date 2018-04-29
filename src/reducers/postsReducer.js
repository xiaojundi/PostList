import {FETCHPOST} from '../actions/index'
import _ from 'lodash'

export default (state={}, action)=>{
	switch(action.type){
		case FETCHPOST:
		return _.mapKeys(action.payload.data, 'id')
		default:
		return state
	}
}