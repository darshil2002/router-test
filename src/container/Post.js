import React, {Component} from "react";
import { useParams } from 'react-router-dom';
import axios from "axios";

class Post extends React.Component{
    state={
        post:null
    }
    componentDidMount(){
        const {post_id}= this.props.post_id

        axios.get('https://jsonplaceholder.typicode.com/posts/' + post_id).then(res=>{
            console.log('api response is ', res.data )
            this.setState({
                post:res.data
            })
        })
        
    }
    render(){
        const post = this.state.post ? (
            <div className="post card">
            <div className="card-content">
                <span className="card-title">{this.state.post.title}</span>
                <p>{this.state.post.body}</p>
            </div>
            </div>
        ):(
            <div>
                Loader...
            </div>
        )

        return(
            <div>
                {post}
            </div>
        )
    }
}

function AddPostParams(){
    const post_id=useParams()
    return(

        <Post post_id={post_id}/>
    ) 
}

export default AddPostParams