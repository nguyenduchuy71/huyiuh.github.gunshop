import React, { Component } from 'react';
import Menu from './components/Menu/Menu';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import routes from './routes';
class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Menu />
          {this.showContent(routes)}
        </Router>
      </div>
    );
  }
  showContent = (routes) => {
    var result = null;
    if (routes.length > 0) {
      result = routes.map((route, index) => {
        return <Route
          key={index}
          path={route.path}
          exact={route.exact}
          component={route.main}
        />
      });
    }
    return <Switch>{result}</Switch>
  }
}
export default App;
