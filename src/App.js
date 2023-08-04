import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Catalog from './components/Catalog';
import CollectionList from './components/CollectionList';
import Cart from './components/Cart';
import About from './components/About';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/catalog" component={Catalog} />
        <Route path="/collections" component={CollectionList} />
        <Route path="/cart" component={Cart} />
        <Route path="/about" component={About} />
      </Switch>
    </Router>
  );
}

export default App;
