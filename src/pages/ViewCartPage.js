import React, { Component } from 'react';
import { connect } from 'react-redux'

const mapStateToProps = (state) => {
    console.log('mapping state to props', state);
    return {};
}

class ViewCartPage extends Component {
  render() {
    return (
      <div>hi</div>
    );
  }
}

export default connect(
  mapStateToProps
)(ViewCartPage);
