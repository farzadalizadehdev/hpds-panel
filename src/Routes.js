import React, {Suspense} from 'react';
import { Route, Switch } from 'react-router-dom';
import LazyLoading from './shared/components/LazyLoading/LazyLoading'

//hpds containers
const Auth = React.lazy(() => import ('./containers/Auth/Auth'));
const Dashboard = React.lazy(() => import ('./containers/Dashboard/Dashboard'));

class Routes extends React.Component {
  render() {
    return (
      <Suspense fallback={<LazyLoading/>}>
        <Switch>
        <Route path='/' exact component={Auth} />
        <Route path='/dashboard' exact component={Dashboard} />
      </Switch>
      </Suspense>
    );
  }
}

export default Routes;