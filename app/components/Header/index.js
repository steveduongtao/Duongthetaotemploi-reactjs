import React from 'react';
import { FormattedMessage } from 'react-intl';

import A from './A';
import HeaderLink from './HeaderLink';
import messages from './messages';
import NavBar from './NavBar';

function Header() {
  return (
    <div>
      <A href="https://www.reactboilerplate.com/">
        {/* <Img src={Banner} alt="react-boilerplate - Logo" /> */}
      </A>
      <NavBar>
        <HeaderLink to="/">
          <FormattedMessage {...messages.home} />
        </HeaderLink>
        <HeaderLink to="/city">
          <FormattedMessage {...messages.city} />
        </HeaderLink>
        <HeaderLink to="/features">
          <FormattedMessage {...messages.features} />
        </HeaderLink>
        <HeaderLink to="/lazy_loading">
          <FormattedMessage {...messages.lazyLoading} />
        </HeaderLink>
      </NavBar>
    </div>
  );
}

export default Header;
