import { NavLink } from 'react-router-dom';
import { useContext } from 'react';

import UserContext from '../../context/UserContext';
import AuthHeader from './AuthHeader';
import NonAuthHeader from './NonAuthHeader';

const Header = ({ handleLogout }) => {
  const userData = useContext(UserContext);
  const { isLoggedIn } = userData;
  return (
    <header className="flex fixed w-full items-center justify-between sm:flex-col bg-gray-50 px-20 py-3 shadow-sm rounded-md md:flex-row">
      <NavLink to="/">
        <div className="w-28">
          <img alt="Home.jpeg" src="/images/logo.png"></img>
        </div>
      </NavLink>
      <nav className="flex">
        {isLoggedIn ? (
          <AuthHeader handleLogout={handleLogout} />
        ) : (
          <NonAuthHeader />
        )}
      </nav>
    </header>
  );
};

export default Header;
