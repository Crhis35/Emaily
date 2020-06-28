import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';

import { connect } from 'react-redux';

import { fetchUser } from './redux/auth/auth.actions';

// import Header from './components/header/header.component';
import Landing from './components/landing/landing.component';
import Dashboard from './components/dashboard/dashboard.component';
import Header from './components/header/header.component';
import SurveyNew from './components/surveynew/surveynew.component';

class App extends React.Component {
  componentDidMount() {
    this.props.fetchUser();
  }
  render() {
    return (
      <BrowserRouter>
        <div className="container">
          <div>
            <Header />
            <Route exact path="/" component={Landing} />
            <Route exact path="/surveys" component={Dashboard} />
            <Route path="/surveys/new" component={SurveyNew} />
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default connect(null, { fetchUser })(App);
