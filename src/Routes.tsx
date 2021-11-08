import Navbar from 'components/Navbar';
import Before from 'pages/Before';
import Home from 'pages/Home';
import { BrowserRouter, Switch, Route } from 'react-router-dom';


const Routes = () => (
  <BrowserRouter> 
  <Navbar />
  <Switch>
    <Route path="/" exact>
      <Home />
    </Route>
    <Route path="/before">
      <Before />
    </Route> 
   </Switch>
</BrowserRouter>
);

export default Routes;