import App from 'App';
import { BrowserRouter, Switch, Route } from 'react-router-dom';


const Routes = () => (
  <BrowserRouter> 
  <Switch>
    <Route path="/" exact>
      <App />
    </Route>
   </Switch>
</BrowserRouter>
);

export default Routes;