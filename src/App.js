import React from 'react';
import Header from './components/Header/Header';
import Food from './components/Food/Food';
import Locations from './components/Locations/Locations';


const App = (props) => {
  return (
    <div>
      <Header />
      <Food />
      <Locations />
    </div>
  );
}

export default App;
