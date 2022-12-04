import { NavLink } from 'react-router-dom';
import { useContext } from 'react';
import UserContext from '../../context/UserContext';
import Avatar from 'react-avatar';

function Header({ handleLogout }) {
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
}

function AuthHeader(props) {
  const userData = useContext(UserContext);
  const { user } = userData;
  let { handleLogout } = props;
  return (
    <nav className="flex sm:flex-col  md:flex-row justify-between flex-wrap items-center">
      <NavLink
        to={{
          user: props.user,
          pathname: `/profiles/${user.username}`,
        }}
        className="btn mr-5 mt:5 md:mt-0"
      >
        <span className="flex items-center text-xl mx-3">
          <Avatar
            name={user}
            size="28"
            textSizeRatio={0.8}
            textMarginRatio={0.28}
            round={true}
          />
          <span className="ml-2 text-gray-400 font-medium">{user}</span>
        </span>
      </NavLink>
      <NavLink
        to="/"
        className={({ isActive }) =>
          `btn mr-5 mt:5 md:mt-0 ${isActive ? 'btn-active' : undefined}`
        }
      >
        Home
      </NavLink>
      <NavLink
        to="/products"
        className={({ isActive }) =>
          `btn mr-5 mt:5 md:mt-0 ${isActive ? 'btn-active' : undefined}`
        }
      >
        Products
      </NavLink>
      <button className="btn mt-5 lg:mt-0" onClick={handleLogout}>
        Logout
      </button>
    </nav>
  );
}

function NonAuthHeader(props) {
  return (
    <nav className="flex">
      <NavLink
        to="/"
        className={({ isActive }) =>
          `btn mr-5 mt:5 md:mt-0 ${isActive ? 'btn-active' : undefined}`
        }
      >
        Home
      </NavLink>
      <NavLink
        to="/products"
        className={({ isActive }) =>
          `btn ${isActive ? 'btn-active' : undefined}`
        }
      >
        Products
      </NavLink>
      <NavLink
        to="/signup"
        className={({ isActive }) =>
          `btn ${isActive ? 'btn-active' : undefined}`
        }
      >
        Sign-Up
      </NavLink>
      <NavLink
        to="/login"
        className={({ isActive }) =>
          `btn ${isActive ? 'btn-active' : undefined}`
        }
      >
        Log-In
      </NavLink>
    </nav>
  );
}

export default Header;
