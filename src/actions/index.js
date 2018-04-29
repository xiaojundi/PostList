import axios from 'axios'

export const FETCHPOST = "FETCH_POSTS"
const URL_Link="http://reduxblog.herokuapp.com/api"
const API_KEY="?key=PAPERCLIP12345"
export function fetchPosts(){
	const request = axios.get(`${URL_Link}/posts${API_KEY}`)
	return {
		type: FETCHPOST,
		payload: request
	}
}

export function creatPost(value, callBack){
	const request = axios.post(`${URL_Link}/posts${API_KEY}`,value)
	.then(()=>callBack())
	return{
		type: "CreatPost",
		payload: request
	}
}


export function fetchPost(id){
	const request = axios.get(`${URL_Link}/posts/${id}${API_KEY}`)
	return{
		type: "fetchPost",
		payload: request
	}
}

export function deletePost(id, callback){
	const request = axios.delete(`${URL_Link}/posts/${id}${API_KEY}`)
	.then(()=>{callback()})
	return{
		type: "deletePost",
		payload: id
	}
}