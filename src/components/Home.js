import React, { useState, Component } from 'react';
import { Header } from './layout/Header';
import { Content } from './layout/Content';
import { ProjectsProvider, SelectedProjectProvider } from '../context';

class Home extends Component{
  constructor(props)
{
  super(props);
}

render(){
  return (
    <SelectedProjectProvider>
      <ProjectsProvider>
        <main
          data-testid="application"
        >
          <Header />
          <Content />
        </main>
      </ProjectsProvider>
    </SelectedProjectProvider>
  );
}
}
export default Home;