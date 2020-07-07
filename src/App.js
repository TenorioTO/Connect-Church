import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './components/header/header.component';
import Footer from './components/footer/footer.component';

import HomePage from './pages/homepage/homepage.component';
import UsPage from './pages/us/us.component';
import NewsPage from './pages/news/news.component';
import AgendaPage from './pages/agenda/agenda.component';
import Login from './pages/login/login.component';
import { auth } from './firebase/firebase.util'

import { fab } from '@fortawesome/free-brands-svg-icons'
import { faMoneyBill } from '@fortawesome/free-solid-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'



import './App.css';

class App extends Component{
  constructor(props){
    super(props);

    this.state = {
      currentUser: null
    }
  }

  unsubscribeFromAuth = null

  componentDidMount(){
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({ currentUser: user });
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render(){
    library.add(fab, faMoneyBill);

    return(
      <div className="App">
        <Header />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/us' component={UsPage} />
          <Route exact path='/news' component={NewsPage} />
          <Route exact path='/agenda' component={AgendaPage} />
          <Route exact path='/login' component={Login} />
        </Switch>
        <Footer />
      </div>
    )
  }
}

export default App;