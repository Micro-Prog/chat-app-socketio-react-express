import assets from '@/lib/assets/assets';
import React, { useState } from 'react';
import './index.css';

const AuthPage = () => {
  const [currentState, setCurrentState] = React.useState('Sign Up');

  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [bio, setBio] = useState('');

  const [isDataSubmited, setIsDataSubmited] = useState(false);

  const onSubmitHandler = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();

    if (currentState === 'Sign Up' && !isDataSubmited) {
      setIsDataSubmited(true);
      return;
    }
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center flex items-center
        justify-center gap-8 sm:justify-evenly max-sm:flex-col backdrop-blur-2xl"
    >
      {/* left             */}
      <img src={assets.logo_big} alt="" className="w-[min(30vw,250px)]" />

      {/* right         */}
      <form
        className="border-2 bg-formColor-bg text-formColor-text
            border-formColor-border
            flex flex-col p-6 gap-6 rounded-lg shadow-lg"
        onSubmit={onSubmitHandler}
      >
        <h2
          className="text-2xl font-medium flex justify-between 
            items-center"
        >
          {currentState}
          {isDataSubmited && (
            <img
              src={assets.arrow_icon}
              alt=""
              className="w-5 cursor-pointer"
              onClick={() => setIsDataSubmited(false)}
            />
          )}
        </h2>

        {currentState === 'Sign Up' && !isDataSubmited && (
          <input
            type="text"
            className="p-2 border border-formColor-border rounded-md
                        focus:outline-none"
            placeholder="Full Name"
            required
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />
        )}

        {!isDataSubmited && (
          <>
            <input
              type="email"
              value={email}
              className="p-2 border border-formColor-border rounded-md
                focus:outline-none focus:ring-2 focus:ring-formColor-ringFocus"
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              required
            />
            <input
              type="password"
              value={password}
              className="p-2 border border-formColor-border rounded-md
                    focus:outline-none focus:ring-2 focus:ring-formColor-ringFocus"
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              required
            />
          </>
        )}

        {currentState === 'Sign Up' && isDataSubmited && (
          <textarea
            className="p-2 border border-formColor-border rounded-md
                        focus:outline-none focus:ring-2 focus:ring-formColor-ringFocus"
            placeholder="Bio"
            value={bio}
            onChange={(e) => setBio(e.target.value)}
            rows={5}
            required
          />
        )}

        <button
          type="submit"
          className="bg-gradient-to-r bg-gradient-primary
                    text-white py-2 px-4 rounded-md"
        >
          {currentState === 'Sign Up'
            ? isDataSubmited
              ? 'Complete Registration'
              : 'Create Account'
            : 'Login'}
        </button>

        <div className="flex items-center gap-2 text-sm text-gray-500">
          <input type="checkbox" />
          <p>
            Agree to <a href="#">Terms and Conditions</a>
          </p>
        </div>

        <div className="flex flex-col gap-2">
          {currentState === 'Sign Up' ? (
            <p className="text-sm text-textColor-secondary">
              Already have an account?{' '}
              <a
                className="text-formColor-signInsignUp"
                href="#"
                onClick={() => {
                  setCurrentState('Login');
                  setIsDataSubmited(false);
                }}
              >
                Login
              </a>
            </p>
          ) : (
            <p className="text-sm text-textColor-secondary">
              Don't have an account?{' '}
              <a
                className="text-formColor-signInsignUp"
                href="#"
                onClick={() => {
                  setCurrentState('Sign Up');
                }}
              >
                Sign Up
              </a>
            </p>
          )}
        </div>
      </form>
    </div>
  );
};

export default AuthPage;
