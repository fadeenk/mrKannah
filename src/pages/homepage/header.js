import React, { Component } from 'react';
import { connect } from 'react-redux';
import muiThemeable from 'material-ui/styles/muiThemeable';
import ParticlesBackground from '../../components/visualEffect/index';
import ProfilePicture from '../../components/misc/profilePicture';


class Header extends Component {
  render() {
    let size = this.props.mobileView ? 100 : 200;
    let height = this.props.mobileView ? '200px' : '350px';
    return (
      <div className="AppHeader" style={{backgroundColor: this.props.muiTheme.palette.alternateCanvasColor, 
        height, color: this.props.muiTheme.palette.alternateTextColor}}>
        <ParticlesBackground style={{position: 'absolute', left: 0}} height={height}/>
        <div style={{display: 'table', width: '80vw', maxWidth: '600px', height: '100%', margin: '0 auto'}}>
          <ProfilePicture size={size} style={{
            width: size + 20,
            display: 'table-cell',
            verticalAlign: 'middle',
            position: 'relative',
            padding: '10px'
          }}/>
          <div id="TextHolder" style={{display: 'table-cell', 
            verticalAlign: 'middle',
            position: 'relative',
            fontSize: this.props.mobileView ? '0.8em' : '1em',
            transition: 'all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms',
          }}>
            <h1 style={{fontSize: this.props.mobileView ? '1.5em' : '2em'}}>What am I doing...??</h1>
            <p>Too many thing:</p>
            <ul>
              <li>CourseKey's CTO by day</li>
              <li>Developer & gamer by night</li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    mobileView: state.navigation.mobileView,
  }
}

export default muiThemeable()(connect(mapStateToProps)(Header));
