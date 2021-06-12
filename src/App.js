import React from 'react';
import Header from './components/Header/Header';
import Locations from './components/Locations/Locations';
import Food from './components/Food/Food';


const App = (props) => {
  return (
    <div>
      <Header />
      <Locations />
      <Food />
    </div>
  );
}

export default App;
