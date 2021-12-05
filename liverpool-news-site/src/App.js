import { Route, Switch } from 'react-router-dom'
import { Contact } from './components/Contact.js';
import { Gallery } from './components/Gallery.js';
import { Home } from "./components/Home.js";
import Login from './components/auth/Login.js';
import Logout from './components/auth/Logout.js';
import { Navigation } from "./components/Navigation.js";
import { AllNews } from './components/news/AllNews.js';
import { AllPlayers } from './components/players/AllPlayers.js';
import { Register } from './components/auth/Register.js';
import { Footer } from './components/Footer.js';
import { AddPlayer } from './components/players/AddPlayer.js';
import { AddNews } from './components/news/AddNews.js';
import { SingleNews } from './components/news/SingleNews.js';
import { SinglePlayer } from './components/players/SinglePlayer.js';
import { EditNews } from './components/news/EditNews.js';
import { Error } from './components/Error.js';
import { EditPlayer } from './components/players/EditPlayer.js';
import { AuthContext } from './contexts/AuthContext.js';
import useCookie from './hooks/useCookie.js'


function App() {
  const [user, setUser] = useCookie();

  const login = (authData) => {
    setUser(authData);
  }

  const logout = () => {
    setUser();
  }

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      <div>
        <div id="container">
          <Navigation />
          <main id="site-content"></main>
          <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/news/all' component={() => <AllNews />} />
            <Route path='/news/add' exact component={AddNews} />
            <Route path='/news/details/:newsId' exact component={SingleNews} />
            <Route path='/news/edit/:newsId' exact component={EditNews} />
            <Route path='/players/all' component={AllPlayers} />
            <Route path='/add-player' component={AddPlayer} />
            <Route path='/players/details/:playerId' component={SinglePlayer} />
            <Route path='/players/edit/:playerId' component={EditPlayer} />
            <Route path='/gallery' component={Gallery} />
            <Route path='/login' component={() => <Login />} />
            <Route path='/logout' component={() => <Logout />} />
            <Route path='/register' component={Register} />
            <Route path='/contact-us' component={Contact} />
            <Route path='*' component={Error} />
          </Switch>
          <Footer />
        </div>
      </div>
    </AuthContext.Provider>
  );
}
export default App;
