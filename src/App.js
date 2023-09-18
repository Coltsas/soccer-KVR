import Navbar from './Navbar';
import Home from './Home';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import LeagueDetails from './LeagueDetails';
import NotFound from './NotFound';
import Footer from './Footer';
import Areas from './Areas';
import ZoneDetails from './ZoneDetails';


function App() {
  return (
    <Router>
    <div className="App">
      <Navbar />
      <div className="content">
        <Switch>
          <Route exact path="/"> 
            <Home />
          </Route>
          <Route path="/leagues/:id"> 
            <LeagueDetails />
          </Route>
          <Route exact path="/areas"> 
            <Areas />
          </Route>
          <Route  path="/areas/:id"> 
            <ZoneDetails />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </div>
      <Footer />
    </div>
    </Router>
  );
}

export default App;
