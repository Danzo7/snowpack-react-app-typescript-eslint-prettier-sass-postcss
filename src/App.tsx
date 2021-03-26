import React from 'react';
import LogoComponent from './logo.svgr.svg';
import './App.scss';
interface AppProps{

}
function App({}:AppProps) {
  return (
    <div className="App">
      <header className="App-header">
        <LogoComponent width="30%" className="App-logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
