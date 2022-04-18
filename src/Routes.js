import React, {Suspense} from 'react';
import { Route, Switch } from 'react-router-dom';
import LazyLoading from './shared/components/LazyLoading/LazyLoading'

//hpds containers
const Auth = React.lazy(() => import ('./containers/Auth/Auth'));
const User = React.lazy(() => import ('./containers/User/User'));
class Routes extends React.Component {
  render() {
    return (
      <Suspense fallback={<LazyLoading/>}>
        <Switch>
        <Route path='/' exact component={Auth} />
        <Route path='/user' exact component={User} />
      </Switch>
      </Suspense>
    );
  }
}

export default Routes;