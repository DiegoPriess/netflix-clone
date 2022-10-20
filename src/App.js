import AppInitial from './pages/AppInitial';
import AppMain from './pages/AppMain';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { useState } from 'react';

function App() {
  const [userId, setUserId] = useState();

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/'>
            <AppInitial />
        </Route>
        <Route exact path='/browse/:userId'>
        
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
