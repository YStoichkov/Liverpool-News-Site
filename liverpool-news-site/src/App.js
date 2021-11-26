import { Route, Switch } from 'react-router-dom'
import { useState, useEffect } from 'react';
import Cookies from 'universal-cookie';

import { Contact } from './components/Contact.js';
import { Gallery } from './components/Gallery.js';
import { Home } from "./components/Home.js";
import Login from './components/Login.js';
import Logout from './components/Logout.js';
import { Navigation } from "./components/Navigation.js";
import { AllNews } from './components/news/AllNews.js';
import { AllPlayers } from './components/players/AllPlayers.js';
import { Register } from './components/Register.js';
import { Footer } from './components/Footer.js';
import { AddPlayer } from './components/players/AddPlayer.js';
import { AddNews } from './components/news/AddNews.js';
import { SingleNews } from './components/news/SingleNews.js';

function App() {
  let cookies = new Cookies();
  const [userInfo, setUserInfo] = useState({ isAuthenticated: false, username: '' });

  useEffect(() => {
    let user = cookies.get('auth_cookie');

    setUserInfo({
      isAuthenticated: Boolean(user),
      user
    })
  }, []);

  const onLogin = (username) => {
    setUserInfo({
      isAuthenticated: true,
      user: username
    })
  }

  const onLogout = () => {
    setUserInfo({
      isAuthenticated: false,
      user: ''
    })
  }

  return (
    <div>
      <div id="container">
        <Navigation {...userInfo} />
        <main id="site-content"></main>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/news/all' component={AllNews} />
          <Route path='/news/add' exact component={AddNews} />
          <Route path='/news/details/:newsId' exact component={SingleNews} />
          <Route path='/players/all' component={AllPlayers} />
          <Route path='/add-player' component={AddPlayer} />
          <Route path='/gallery' component={Gallery} />
          <Route path='/login' component={Login} onLogin={onLogin} />
          <Route path='/logout' component={Logout} onLogout={onLogout} />
          <Route path='/register' component={Register} />
          <Route path='/contact-us' component={Contact} />
        </Switch>
        <Footer />
      </div>
    </div>
  );
}
export default App;
