import React ,{ Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';
class Home extends Component {
    
    state={
        posts:[]
    }

    componentDidMount(){
        console.log('mount working !');
        axios.get('https://jsonplaceholder.typicode.com/posts').then(response=>{
            this.setState({
                posts:response.data.slice(0,20)
            })
            console.log(this.state.posts)
        })  
    }

    render(){
    
    const {posts}=this.state;
    const postList = posts.length ? (
        
        posts.map(post=>{
            return(
                <div className='post card' key={post.id}> 
                <Link to={'/'+ post.id}>
                    <div className='card-content'>
                        <span className='card-title'>{post.body}</span>
                        <p>{post.body}</p>
                    </div>
                </Link>
                </div>
            )
        })
    ): (
        <div>no data to show </div>
    )
        
    return(
        <div>
            {postList}
        </div>
    )}
}
export default Home;