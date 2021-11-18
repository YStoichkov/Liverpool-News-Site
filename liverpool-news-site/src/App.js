import { Footer } from "./components/Footer.js";
import { Header } from "./components/Header.js";
import { Home } from "./components/Home.js";
import { Navigation } from "./components/Navigation.js";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Header />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
