/* eslint-disable react/no-did-update-set-state */
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import Error500 from '../Error500/Error500';

class ErrorBoundary extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      errorPresent: false,
    };
  }

  static getDerivedStateFromError(error) {
    console.log(error.message);
    return { errorPresent: true };
  }

  componentDidUpdate(prevProps, prevState) {
    const { location } = this.props;
    const { errorPresent } = prevState;

    if (errorPresent && location.pathname !== prevProps.location.pathname) {
      this.setState({ errorPresent: false });
    }
  }

  render() {
    const { errorPresent } = this.state;
    const { children } = this.props;

    if (errorPresent) {
      return <Error500 />;
    }

    return children;
  }
}

ErrorBoundary.defaultProps = {
  children: '',
};

ErrorBoundary.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.array]),
  location: PropTypes.objectOf.isRequired,
};

export default withRouter(ErrorBoundary);
