import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { login } from '../../services/auth';

export const withSession = Component => {
  class WithSession extends PureComponent {
    static propTypes = {
      token: PropTypes.string.isRequired
    }

    componentDidMount() {
      if(!this.props.token) {
        login();
      }
    }

    render() {
      if(!this.props.token) return <h1></h1>;
      return <Component />;
    }
  }
};
