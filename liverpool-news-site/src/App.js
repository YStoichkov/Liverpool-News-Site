import { Route, Switch } from 'react-router-dom'
import { useState, useEffect } from 'react';

import { Contact } from './components/Contact.js';
import { Gallery } from './components/Gallery.js';
import { Home } from "./components/Home.js";
import { Login } from './components/Login.js';
import { Navigation } from "./components/Navigation.js";
import { AllNews } from './components/news/AllNews.js';
import { AllPlayers } from './components/players/AllPlayers.js';
import { Register } from './components/Register.js';
import { Footer } from './components/Footer.js';

function App() {
  const [userInfo, setUserInfo] = useState({ isAuthenticated: false, username: '' });
  const onLogin = (username) => {
    setUserInfo({
      isAuthenticated: true,
      user: username
    })
  }
  return (
    <div>
      <div id="container">
        <Navigation />
        <main id="site-content"></main>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/news' component={AllNews} />
          <Route path='/players' component={AllPlayers} />
          <Route path='/gallery' component={Gallery} />
          <Route path='/login' component={Login} onLogin={onLogin} />
          <Route path='/register' component={Register} />
          <Route path='/contact-us' component={Contact} />
        </Switch>
        <Footer />
      </div>
    </div>
  );
}

export default App;
