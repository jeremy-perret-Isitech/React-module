import React, { Fragment } from 'react';
import './App.css';
import { HeaderComponent } from './components/features/header/HeaderComponent';
import { BodyComponent } from './components/features/body/BodyComponent';

const App = () => {
  return (
    <Fragment>
      <HeaderComponent></HeaderComponent>
      <BodyComponent></BodyComponent>
    </Fragment>
  )
}

export default App;
