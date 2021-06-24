import { useState, createContext } from 'react';

import ComponentA from './components/ComponentA';

import './App.css';

export const DataContext = createContext()

function App() {

  const [userName, setUserName] = useState('Julio')

  const [loggedIn, setLoggedIn] = useState(false)

  return (
    <div className="App">
      <DataContext.Provider value={{ userName, setLoggedIn, loggedIn }}>
        <h1>Learing React Context</h1>
        {loggedIn ? 'Logged In' : 'Logged Out'}
        <ComponentA />
      </DataContext.Provider>
    </div>
  );
}

export default App;
