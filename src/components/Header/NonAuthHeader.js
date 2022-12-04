import { NavLink } from 'react-router-dom';

const NonAuthHeader = () => {
  return (
    <nav className="flex">
      <NavLink
        to="/"
        className={({ isActive }) =>
          `btn mt:5 md:mt-0 ${isActive ? 'btn-active' : undefined}`
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
        to="/login"
        className={({ isActive }) =>
          `btn ${isActive ? 'btn-active' : undefined}`
        }
      >
        Log-In
      </NavLink>
    </nav>
  );
};

export default NonAuthHeader;
