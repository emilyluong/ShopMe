import './App.css';
import { Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Shop from './components/Shop';
import Cart from './components/Cart';
import About from './components/About'
import HomePage from './components/HomePage';

function App() {
  return (
    <div>
      <Switch>
        <Route path="/shop" component={Shop} />
        <Route path="/cart" component={Cart} />
        <Route path="/about" component={About} />
        <Route path="/create" component={HomePage} />
        <Route path="/" component={Home} />
      </Switch>
    </div>
  );
}

export default App;
