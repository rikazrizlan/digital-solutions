import Home from './pages/Home';
import Navbar from './components/Navbar';
import './App.css';

import {Route, Switch} from 'react-router-dom';

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    </>
  );
}

export default App;
