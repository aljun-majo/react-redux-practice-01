import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createPost } from '../actions/postActions';


class PostForm extends Component {
  constructor() {
      super();
      this.state = {
          title: '',
          body: ''
      }

      this.onChange = this.onChange.bind(this);
      this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
      this.setState({
          [e.target.name]: e.target.value
      });
  }
  onSubmit(e) {
      e.preventDefault();

      const post = {
          title: this.state.title,
          body: this.state.body
      };

    // move this into postActions.js
    //   fetch('https://jsonplaceholder.typicode.com/posts', {
    //     method: 'POST',
    //     headers: {
    //         'content-type': 'application/json'
    //     },
    //     //const post body as json
    //     //use as results(res) fron input/textarea value 
    //     body: JSON.stringify(post)
    //   })
    //   .then(res => console.log('res: ',res) || res.json())
    //   .then(data => console.log('PostForm data ni:',data));
    
    // Call Action
    //add this from postActions.js
    // this will display the Title and Body in posts
    this.props.createPost(post);


    }
 
  render() {
    return (
      <div>
        <h2>Post Form</h2>
        <form onSubmit={this.onSubmit}>
            <div>
                <label>Title: </label>
                <br />
                <input type="text" name="title"
                    onChange={this.onChange}
                    value={this.state.title}
                />
            </div>
            <br />
            <div>
                <label>Body: </label>
                <br />
                <textarea name="body" 
                    onChange={this.onChange}
                    value={this.state.body}
                />
            </div>
            <br />
            <button type="submit">Submit</button>

        </form>
      </div>
    )
  }
}

//export default PostForm

PostForm.propTypes = {
    createPost: PropTypes.func.isRequired
  };
  
  export default connect(null, { createPost })(PostForm);
  