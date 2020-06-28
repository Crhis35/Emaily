import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Checkout from '../checkout/checkout.component';

const Header = ({ currentUser }) => (
  <nav>
    <div className="nav-wrapper">
      {console.log(currentUser)}
      <Link to={currentUser ? '/surveys' : '/'} className="left brand-logo">
        Emaily
      </Link>
      <ul id="nav-mobile" className="right hide-on-med-and-down">
        {currentUser ? (
          [
            <li key="1">
              <Checkout />
            </li>,
            <li key="2" style={{ margin: '0 10px' }}>
              Credits: {currentUser.credits}
            </li>,
            <li key="3">
              <a href="/api/logout">Log Out</a>
            </li>,
          ]
        ) : (
          <li>
            <a href="/auth/google">Login With google</a>
          </li>
        )}
      </ul>
    </div>
  </nav>
);

const mapStateToProps = ({ auth }) => ({
  currentUser: auth.currentUser,
});

export default connect(mapStateToProps)(Header);
