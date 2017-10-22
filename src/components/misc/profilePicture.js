import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Paper from 'material-ui/Paper';
import Avatar from 'material-ui/Avatar';

import picture from '../assests/fadee.jpg';

class ProfilePicture extends Component {
  render() {
    let size = this.props.size;
    return (
      <div id="avatar" style={this.props.style}>
        <Paper style={{width: size  + 'px', height: size + 'px', padding: '5px'}} zDepth={3} circle={true}>
          <Avatar src={picture} size={size - 10} style={{transition: 'all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms'}}/>
        </Paper>
      </div>
    )
  }
}

ProfilePicture.propTypes = {
  size: PropTypes.number.isRequired,
};

function mapStateToProps(state) {
  return {
    mobileView: state.navigation.mobileView,
  }
}

export default connect(mapStateToProps)(ProfilePicture);
