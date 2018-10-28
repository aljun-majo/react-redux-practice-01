import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/postActions';

class Posts extends Component {
    //*replace with redux
    // constructor() {
    //     super();
    //     this.state = {
    //         posts: []
    //     }
    // }

    // componentWillMount() {
    //     fetch('https://jsonplaceholder.typicode.com/posts')
    //     .then(res => res.json())
    //     .then(data => console.log('Data: ',data) || this.setState({ posts: data }));
    // }

    //componentWillMount() {
    componentDidMount() {
        this.props.fetchPosts();
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.newPost) {
            //unshift() add the the value Title and Body
            //at the beginning/start of post contents
            this.props.posts.unshift(nextProps.newPost);
        }
    }    

  render() {
    // const postItems = this.state.posts.map(post => (
    //     <div key={post.id}>
    //         <h3>{post.title}</h3>
    //         <p>{post.body}</p>
    //     </div>
    // ));
 
    const postItems = this.props.posts.map(post => (
        <div key={post.id}>
          <h3>{post.title}</h3>
          <p>{post.body}</p>
        </div>
      ));

    return (
      <div>
        <h1>Posts Here...</h1>
        {postItems}
      </div>
    )
  }
}

//export default Posts;

Posts.propTypes = {
    fetchPosts: PropTypes.func.isRequired,
    posts: PropTypes.array.isRequired,
    newPost: PropTypes.object
  };
  
  const mapStateToProps = state => console.log('mapStateToProps: ', state.posts.items) || ({
    //'posts' declared in reducers/index.js
    // 'items' 'item' from postsReducers payload
    // redux state source
    posts: state.posts.items,
    newPost: state.posts.item
    
  });
  
  export default connect(mapStateToProps, { fetchPosts })(Posts);
  