import React, { Component } from 'react';
import AllPosts from './components/AllPosts/AllPosts'
import AllComments from './components/AllComments/AllComments'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

export default class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <div>
           <Link to='/posts'>posts</Link>
          </div>

          <div>
            <Link to='/comments'>comments</Link>
          </div>
          
        </div>

        <Switch>
          <Route path={'/posts'} render={() => {
            return <AllPosts/>
          }}/>

          <Route path={'/comments'} render={() => {
            return <AllComments/>
          }} />
        </Switch>
      
      </Router>
    )
  }
}
