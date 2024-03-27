import { useState } from 'react'
import './App.css'

import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";

import SignUp from './components/authentication/Signup';
import Login from './components/authentication/Login';
import Home from './components/authentication/Home';


function App() {
  const router = createBrowserRouter([

    {
      path: "/",
      element: <Home />
    },
    {
      path: "/signup",
      element: <SignUp />
    },
    {
      path: "/login",
      element: <Login />
    },

  ]);
  return <RouterProvider router={router} />;

}

export default App
