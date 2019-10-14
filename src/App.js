
import React, { Component } from 'react';
import './App.css';
import Wrapper from './components/Wrapper';
import Header from './components/Header';
import Row from './components/Row';
import Menu from './components/Menu';
/*import AboutAmy from './components/AboutAmy';
import Portfolio from './components/Portfolio';
import MenuItems from './menu.json';*/

class App extends Component {
 
  render() {
    return(
      <Wrapper>
          <Row sticky = "top">
            <Header/>
            <Menu/>
          </Row>
      </Wrapper>
    )
  }
}
export default App;
