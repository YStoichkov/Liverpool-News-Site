import { Route, Switch } from 'react-router-dom'
import { Contact } from './components/Contact.js';

import { Footer } from "./components/Footer.js";
import { Home } from "./components/Home.js";
import { Login } from './components/Login.js';
import { Navigation } from "./components/Navigation.js";
import { AllNews } from './components/news/AllNews.js';
import { AllPlayers } from './components/players/AllPlayers.js';
import { Register } from './components/Register.js';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/news' component={AllNews} />
        <Route path='/players' component={AllPlayers} />
        <Route path='/login' component={Login} />
        <Route path='/register' component={Register} />
        <Route path='/contact-us' component={Contact} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
