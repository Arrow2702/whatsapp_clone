import React from 'react';
import Sidebar from './Sidebar';
import Chat from './Chat';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Login from './Login';
import { useStateValue } from './StateProvider';

function App() {
  const [{ user }, dispatch] = useStateValue()
  return (
    //BEM naming conventions
    <div className="app">
      {
        !user ? (
          <Login />
        ) : (
            <div className="app__body">
              <Router>
                <Sidebar />
                <Switch>
                  <Route path="/rooms/:roomId">
                    <Chat />
                  </Route>
                  <Route path="/">
                    <Chat />
                  </Route>
                  {/* <Route exact path="/twilioCallback/:roomId" component={PatientUpload} /> */}
                </Switch>
              </Router>

              {/* Chat */}
            </div >
          )
      }


    </div >
  );
}

export default App;
