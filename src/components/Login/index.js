import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase';
import { validations } from '../../utils/validations';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({ email: '', password: '' });
  const handleErrors = ({ target }) => {
    let { name, value } = target;
    let errorsClone = { ...errors };
    validations(errorsClone, name, value);
    setErrors(errorsClone);
  };

  const handleSubmission = (event) => {
    event.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then(async (res) => {
        window.location.href = '/';
      })
      .catch((err) => {
        setErrors({ ...errors, email: 'Email or Password is incorrect!' });
      });
  };

  return (
    <main className=" pt-20">
      <section className="py-20">
        <form
          className="w-1/3 mx-auto border bg-gray-100  p-8 rounded-md shadow-md"
          onSubmit={handleSubmission}
        >
          <div className="text-center">
            <legend className="text-2xl font-bold">Sign In</legend>
            <Link to="/signup">
              <span className="text-gray-700 text-lg text-center">
                {' '}
                New here?{' '}
              </span>
            </Link>
          </div>
          <fieldset className="my-3">
            <input
              className="block w-full my-3 py-2 px-3 border border-gray-400 rounded-md"
              type="text"
              placeholder="Enter Email"
              value={email}
              name="email"
              onChange={(e) => {
                setEmail(e.target.value);
                handleErrors(e);
              }}
            />
            <span className="text-red-500">{errors.email}</span>

            <input
              className="block w-full my-3 py-2 px-3 border border-gray-400 rounded-md"
              type="password"
              placeholder="Enter Password"
              value={password}
              name="password"
              onChange={(e) => {
                setPassword(e.target.value);
                handleErrors(e);
              }}
            />
            <span className="text-red-500">{errors.password}</span>
            <input
              type="submit"
              value="Log In"
              className="rounded block mt-6 py-2 w-full btn-gray  font-bold cursor-pointer"
              disabled={errors.password || errors.email}
            />
          </fieldset>
        </form>
      </section>
    </main>
  );
};

export default Login;
