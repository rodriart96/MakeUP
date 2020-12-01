import React, {useEffect}from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
//components
import Landing from './components/layout/Landing';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import Alert from './components/layout/Alert';
import Dashboard from './components/dashboard/Dashboard';
import CreateProfile from './components/profile-form/CreateProfile';
import PrivateRoute from './components/routing/PrivateRoute';
import EditProfile from './components/profile-form/edit-profile';
import shopping from './components/shopCart/shopping';
import catalogo from './components/Catalogo/catalogo';
import Product from './components/Product/product';

//redux
import {Provider} from 'react-redux';
import store from './store';
import {loadUser} from './actions/auth';
import setAuthToken from './utils/setAuthToken';

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {
  useEffect(() =>{
    store.dispatch(loadUser());
  }, []);

  return(
  <Provider store={store}>
      <Router>
      <div>
        <Route exact path='/' component={Landing}/>
        <section className='container'>
          <Alert/>
          <Switch>
            <Route exact path='/register' component={Register}/>
            <Route exact path='/login' component={Login}/>
            <Route exact path ='/store' component={catalogo}/>
            <Route exact path ='/product' component={Product}/>

            <PrivateRoute exact path='/dashboard' component={Dashboard}/>
            <PrivateRoute exact path='/shopping' component={shopping}/>
            <PrivateRoute exact path='/create-profile' component={CreateProfile}/>
            <PrivateRoute exact path='/edit-profile' component={EditProfile}/>
          </Switch>
        </section>
      </div>
    </Router>
  </Provider>
)
  }
export default App;
