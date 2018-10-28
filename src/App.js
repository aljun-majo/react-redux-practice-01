import React, { Component } from 'react';
import Posts from './components/posts';
import PostForm from './components/PostForm'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import store from './store';
import { Provider } from 'react-redux';

//move this into store.js || just simple illustration
//const store = createStore(() => [], {}, applyMiddleware());

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="container">
          <header>
              <h1>Learn React</h1>
          </header>
          <PostForm />
          <hr />
          <Posts />
          
        </div>
      </Provider>
    );
  }
}

export default App;
