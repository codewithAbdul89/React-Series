import React, { useState } from 'react';
import authService from '../appWrite/Auth';
import { useNavigate, Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Logo, Button } from './index';
import { login as authLogin } from '../Store/authSlice';

function SignUp() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });
  const [error, setError] = useState({});

    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    };

  const validate = () => {
    const errors = {};
    if (!formData.name) {
      errors.name = 'Please enter your name';
    } else if (formData.name.length < 3) {
      errors.name = 'At least 3 character name';
    }

    if (!formData.email) {
      errors.email = 'Please enter your email';
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      errors.email = 'Invalid email';
    }

    if (!formData.password) {
      errors.password = 'Password is required';
    } else if (formData.password.length < 8) {
      errors.password = 'Password must be at least 8 characters';
    }

    setError(errors);
    return Object.keys(errors).length === 0;
  };


  const createAccount = async (e) => {
    e.preventDefault();
    if (validate()) { 
      console.log(formData);
      // Uncomment and fix this when ready
      try {
        const userData = await authService.createAccount(formData);
        if (userData) {
          const currentUser = await authService.getCurrentUser();
          if (currentUser) {
            dispatch(authLogin(currentUser));
            navigate('/');
          }
        }
      } catch (error) {
        setError({ general: error.message });
      }
    }
  };

  return (
    <div className="flex items-center justify-center">
      <div className="mx-auto w-full max-w-lg bg-gray-100 rounded-xl p-10 border border-black/10">
        <div className="mb-2 flex justify-center">
          <span className="inline-block w-full max-w-[100px]">
            <Logo width="100%" />
          </span>
        </div>
        <h2 className="text-center text-2xl font-bold leading-tight">Sign up to create account</h2>
        <p className="mt-2 text-center text-base text-black/60">
          Already have an account?&nbsp;
          <Link
            to="/login"
            className="font-medium text-primary transition-all duration-200 hover:underline"
          >
            Sign In
          </Link>
        </p>

        <form className="space-y-5 capitalize flex flex-col gap-3" onSubmit={createAccount}>
          <div className="flex flex-col gap-1">
            <input
              type="text"
              name="text"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Enter your name"
              className="px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full"
            />
            {error.name && <p className="text-red-500 text-sm">{error.name}</p>}
          </div>
          <div className="flex flex-col gap-1">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Enter your email"
              className="px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full"
            />
            {error.email && <p className="text-red-500 text-sm">{error.email}</p>}
          </div>
          <div className="flex flex-col gap-1">
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              placeholder="Enter password"
              className="px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full"
            />
            {error.password && <p className="text-red-500 text-sm">{error.password}</p>}
          </div>
          <Button
            type="submit"
            className="w-full text-white hover:opacity-60"
            children="Sign Up"
          />
        </form>
      </div>
    </div>
  );
}

export default SignUp;