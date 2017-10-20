import React from 'react';
import Header from './header';
import About from './about';
import Showcase from './showcase';
import muiThemeable from 'material-ui/styles/muiThemeable';
import Navbar from '../../components/navbar/index';

const HomePage = () => (
  <div className="App">
    <Navbar />
    <Header />
    <About />
    <Showcase />
  </div>
);

export default muiThemeable()(HomePage);
