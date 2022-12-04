import { Routes, Route } from 'react-router-dom';
import { UserProvider } from './context/UserContext';
import { getAuth, signOut } from 'firebase/auth';
import Home from './components/Home/index';
import Signup from './components/Signup/index';
import Login from './components/Login/index';
import Products from './components/Products/index';
import NoMatch from './components/NoMatch/index';
import Header from './components/Header/index';
import { useEffect, useState } from 'react';
import { auth } from './firebase';
const authSignOut = getAuth();

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setUser(user.displayName);
        setIsLoggedIn(true);
      }
    });
  });

  const handleLogout = () => {
    signOut(authSignOut)
      .then(() => {
        setIsLoggedIn(false);
        setUser(null);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <UserProvider
      value={{
        isLoggedIn: isLoggedIn,
        user: user,
        setUser: setUser,
        setIsLoggedIn: setIsLoggedIn,
      }}
    >
      <Header handleLogout={handleLogout} />
      {isLoggedIn ? <AuthenticatedApp /> : <UnAuthenticatedApp />}
    </UserProvider>
  );
};

function AuthenticatedApp(props) {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<Products />} />
      <Route path="*" element={<NoMatch />} />
    </Routes>
  );
}

function UnAuthenticatedApp(props) {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<Products />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="*" element={<NoMatch />} />
    </Routes>
  );
}

export default App;
