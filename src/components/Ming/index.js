import React, { Component } from 'react';
import { HashRouter as Router, Route, Link } from 'react-router-dom';

import styles from './index.css';

const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
);

const About = () => (
  <div>
    <h2>About</h2>
  </div>
);

const Topics = ({ match }) => (
  <div>
    <h2>Topics</h2>
    <ul>
      <li>
        <Link to={`${match.url}/rendering`}>rendering</Link>
      </li>
      <li>
        <Link to={`${match.url}/components`}>components</Link>
      </li>
      <li>
        <Link to={`${match.url}/props-v-state`}>props-v-state</Link>
      </li>
    </ul>
    <hr />

    <Route path={`${match.url}/:topicId`} component={Topic} />
    <Route
      exact
      path={match.url}
      render={() => <h3>Pleace select a topic.</h3>}
    />
  </div>
);

const Topic = ({ match }) => (
  // <Fade in={true}>
  <h3>{match.params.topicId}</h3>
  // </Fade>
);

class Ming extends Component {
  render() {
    return (
      <Router>
        <div>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/topics">Topics</Link>
            </li>
          </ul>
          <hr />
          <div>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/topics" component={Topics} />
          </div>
        </div>
      </Router>
    );
  }
}

export default Ming;
