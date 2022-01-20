import React from 'react';
import { Switch, Route } from 'react-router-dom';
// Cmps
import { AppHeader } from './cmps/AppHeader';
import { PopoverSideMenu } from './cmps/PopoverSideMenu.jsx'

// Routes
import routes from './routes.js';

export class RootCmp extends React.Component {
  render() {
    return (
      <div>
        <AppHeader />
        <main>
          <Switch>
            {routes.map(route => (
              <Route key={route.path} component={route.component} path={route.path} />
            ))}
          </Switch>
        </main>

        <PopoverSideMenu />
      </div>
    );
  }
}

export default RootCmp;
