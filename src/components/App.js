import React, {Component} from 'react';
import Header from './Header';
import Main from './Main';
import Upload from './UploadComponents/Upload';
import '../styles/App.css';
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <div>
        <Header/>
          <Switch>
            <Route path={"/main"} exact render={() => {return <Redirect to="/main/1"/>}}/>
            <Route path={"/"} exact render={() => {return <Redirect to="main/1"/>}}/>
            <Route path={"/main/:id"} exact render={() => {return <Main/>}}/>
            <Route path={"/upload"} exact component={Upload}/>
          </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
