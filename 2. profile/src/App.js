import React, { Component } from 'react';
import Profile from './components/profile.component';
import Projects from './components/projects.component';


App extends Component {

  render() {
    return (
      <>
        <Profile />
        <hr />
        <Projects />
      </>
    )
  }
}

export default App;

