import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { setSession } from '../../actions/sessionActions';

class Callback extends PureComponent {
  static propTypes = {
    handleAuth: PropTypes.func.isRequired
  }
  componentDidMount() {
    this.props.handleAuth();
  }
  render() {
    return <h1></h1>;
  }
}

const mapDispatchToProps = (dispatch, props) => ({
  handleAuth() {
    const action = setSession();
    dispatch(action);
    action.payload.then(() => {
      props.history.push('/');
    });
  }
});

export default connect(
  null,
  mapDispatchToProps
)(Callback);
