import React ,{ Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'
class Home extends Component {
    
    render(){
    
    console.log(this.props)

    const {posts}=this.props;
    const postList = posts.length ? (
        
        posts.map(post=>{
            return(
                <div className='post card' key={post.id}> 
                <Link to={'/post/'+ post.id}>
                    <div className='card-content'>
                        <span className='card-title'>{post.title}</span>
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
    )

    }
}

const mapStateToProps = (state) => {
    return{
        posts: state.posts
    }
}

export default connect(mapStateToProps)(Home);