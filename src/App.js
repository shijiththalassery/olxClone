import './App.css';
import Home from './Pages/Home';
import Login from './Pages/Login'
import View from './Pages/ViewPost'
import Signup from './Pages/Signup'
import Create from './Pages/Create'
import Post from './store/PostContext'
import React, { useEffect, useContext } from 'react';
import { AuthContext, FirebaseContext } from './store/Context'
import { BrowserRouter as Router, Route } from 'react-router-dom'




function App() {
  const { setUser } = useContext(AuthContext)
  const { firebase } = useContext(FirebaseContext)
  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      setUser(user)
    })

  })
  return (
    <div>

      <Post>

        <Router>

          <Route exact path='/' >
            <Home />
          </Route>

          <Route path='/signup' >
            <Signup />
          </Route>

          <Route path='/login' >
            <Login />
          </Route>

          <Route path='/create' >
            <Create />
          </Route>

          <Route path='/view' >
            <View />
          </Route>

        </Router>
         
      </Post>
    </div>
  );
}

export default App;
