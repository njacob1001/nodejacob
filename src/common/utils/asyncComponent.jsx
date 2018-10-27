import React, { PureComponent, Fragment } from 'react';
import LoadingIndicator from '../ui/loading';

export default class extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      Component: null
    };
  }

  componentWillMount() {
    if (!this.state.Component) {
      this.props.moduleProvider()
        .then(({ Component }) => this.setState({ Component }));
    }
  }

  render() {
    const { Component } = this.state;
    const { match } = this.props || null;
    //The magic happens here!
    return (
      <Fragment>
        {Component ? <Component match={match} /> : <LoadingIndicator />}
      </Fragment>
    );
  }
}
