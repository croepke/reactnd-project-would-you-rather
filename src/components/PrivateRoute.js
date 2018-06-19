import React from 'react';
import { Redirect, Route, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';


// See: https://tylermcginnis.com/react-router-protected-routes-authentication/

const PrivateRoute = ({ component: Component, authedUser, ...rest }) => (
  <Route {...rest} render={(props) => (
     authedUser !==null
      ? <Component {...props} />
      : <Redirect to={{
          pathname: '/login',
          state: { from: props.location }
        }} />
  )} />
)

function mapStateToProps( { authedUser }) {
  return {
    authedUser
  }
}

export default withRouter(connect(mapStateToProps)(PrivateRoute));
