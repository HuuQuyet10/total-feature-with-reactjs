import { useState } from 'react';
import { Menu, SliderPicture, BtnAdd } from './components';
import './App.scss'

function App() {

  return (
    <div className="App">
      <Menu />
      <SliderPicture />
      <BtnAdd />
    </div>
  )
}

export default App
