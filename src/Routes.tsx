import Navbar from 'components/Navbar';
import Home from 'pages/Home';
import { BrowserRouter, Switch, Route } from 'react-router-dom';


const Routes = () => (
  <BrowserRouter> 
  <Navbar />
  <Switch>
    <Route path="/" exact>
      <Home />
    </Route>
   </Switch>
</BrowserRouter>
);

export default Routes;