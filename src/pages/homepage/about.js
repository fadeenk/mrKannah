import React, {Component} from 'react';
import { connect } from 'react-redux';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import { withTheme } from '@material-ui/core/styles';


class About extends Component {
  render() {
    const styles = {
      color: this.props.theme.palette.text.primary,
      width: '90%',
      margin: '0 auto',
      fontSize: this.props.mobileView ? '14px' : '16px',
      lineHeight: '1.5em',
      maxWidth: '800px',
    };
    
    return (
      <div id="about" style={{padding: '1em 0'}}>
        <Card style={styles}>
          <CardHeader title="About Me"/>
          <CardContent>
            <p>I currently am the Chief Technology Officer at <a href="https://coursekeyeducation.com/" rel="noopener noreferrer" target="_blank">CourseKey Education</a>, which is where my passion for technology, learning,
              and entrepreneurship converge. Additionally, I am the owner of Kannah Consulting and Software Services (licensed in city of El Cajon) which allows me to work with different companies and startups.</p>
            <p>I studied computer engineering and science at San Diego State University, where I co-founded student software development
              firm called <a target="_blank" rel="noopener noreferrer" href="http://hitechedventures.org/">HiTech EdVentures (HTEV)</a>.
              Over the years, I developed software and consulted for multiple industries, including Healthcare, Home
              Services, Entertainment, Automobile, and Education.</p>
            <p>Currently I am accepting freelance work, I'd love to get coffee and get to know you, so don’t hesitate
              to get in touch.</p>
          </CardContent>
        </Card>
        <Card style={{...styles, marginTop: '1em'}}>
          <CardHeader title="Consulting Services"/>
          <CardContent>
            <p>I do offer consulting services for:</p>
            <ul>
              <li>Software architecture / design consultations</li>
              <li>Team coaching</li>
              <li>Agile coaching</li>
              <li>Personal career coaching and mentorship</li>
              <li>Individual 1-on-1 coaching</li>
              <li>Speaking and training</li>
            </ul>
            <p>Something else? Just ask! I do offer some daily, weekly and monthly retainer rates.</p>
          </CardContent>
        </Card>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    mobileView: state.navigation.mobileView,
  }
}

export default connect(mapStateToProps)(withTheme()(About));
