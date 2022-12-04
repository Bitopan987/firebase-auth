import { NavLink } from 'react-router-dom';
import { useContext } from 'react';

import UserContext from '../../context/UserContext';
import Avatar from 'react-avatar';

const AuthHeader = (props) => {
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
};

export default AuthHeader;
