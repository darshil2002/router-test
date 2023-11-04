
import React from "react";
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';

class Post extends React.Component {
    render() {
        const { posts, post_id } = this.props;
        const post = posts.find(post => post.id === post_id);

        if (!post) {
            return (
                <div>
                    Loader...
                </div>
            );
        }

        return (
            <div className="post card">
                <div className="card-content">
                    <span className="card-title">{post.title}</span>
                    <p>{post.body}</p>
                </div>
            </div>
        );
    }
}

const PostContainer = ({ posts }) => {
    const { post_id } = useParams();

    return <Post posts={posts} post_id={post_id} />;
};

const mapStateToProps = (state) => {
    return {
        posts: state.posts,
    };
}

export default connect(mapStateToProps)(PostContainer);

