import React from 'react'
import { Route } from 'react-router'
import NavigationBar from '../containers/NavigationBar';
import Home from '../containers/Home';
import ExportUsers from '../containers/ExportUsers';
import ImportUsers from '../containers/ImportUsers';
import ExportGroups from '../containers/ExportGroups'
import ImportGroups from '../containers/ImportGroups';
import SignInLanding from '../containers/SignInLanding';
import SignInCallback from '../containers/SignInCallback';

const App = () => (
  <div>
    <NavigationBar />
    <div className="container">
      <Route exact path="/" component={Home} />
      <Route exact path="/users/export" component={ExportUsers} />
      <Route exact path="/users/import" component={ImportUsers} />
      <Route exact path="/groups/export" component={ExportGroups} />
      <Route exact path="/groups/import" component={ImportGroups} />
      <Route exact path="/signin" component={SignInLanding} />
      <Route exact path="/signin/callback" component={SignInCallback} />
    </div>
    <div className="mt-5 p-3 bg-dark">
      <p>Keycloak Bulk</p>
    </div>
  </div>
)

export default App
