import './App.css';
import Cards from './components/Cards.jsx';
import Nav from './component/Nav'
import { useState } from 'react';

function App() {
   return (
      <div className='App'>
         <Nav />
         <Cards characters={characters} />
      </div>
   );
}

export default App;
