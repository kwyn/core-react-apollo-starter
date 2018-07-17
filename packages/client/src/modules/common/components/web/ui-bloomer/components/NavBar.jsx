import React from 'react';
import { NavLink } from 'react-router-dom';
import { NavbarMenu, Navbar, NavbarItem, NavbarEnd, NavbarStart } from 'bloomer';

import modules from '../../../../../../modules';
import settings from '../../../../../../../../../settings';

const NavBar = () => (
  <Navbar color="faded">
    <NavbarMenu>
      <NavbarStart>
        <NavLink to="/">{settings.app.name}</NavLink>
        {modules.navItems}
      </NavbarStart>
      <NavbarEnd>
        {modules.navItemsRight}
        {__DEV__ && (
          <NavbarItem>
            <a href="/graphiql" className="nav-link">
              GraphiQL
            </a>
          </NavbarItem>
        )}
      </NavbarEnd>
    </NavbarMenu>
  </Navbar>
);

export default NavBar;
