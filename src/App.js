import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import './App.css';
import Home from './component/Home';
import DetailInfo from './component/DetailInfo';
import Navigation from './component/Navigation';
import Results from './component/Results';



function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <header className="App-header">
        <Navigation />
        <Switch>
          <Route path='/' component={Home} exact/>
          <Route path='/DetailInfo' component={DetailInfo}/>
          <Route path='/Results' component={Results} />
        </Switch>
      </header>
    </div>
    </BrowserRouter>
  );
}

export default App;
