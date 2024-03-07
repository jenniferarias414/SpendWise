import React, {useContext} from 'react';
import {Navigate, createBrowserRouter, RouterProvider} from 'react-router-dom';
import Auth from './components/Auth/Auth.js';
import App from './App.js';
import AuthContext from './store/AuthContext.js';
import CoffeeMaker from './components/CoffeeMaker.js';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const Router = () => {
    const {state} = useContext(AuthContext);

    const router = createBrowserRouter([
        {
            index: true,
            element: <CoffeeMaker />
        },
        {
            path: '/auth',
            element: !state.token ? <Auth /> : <Navigate to='/app' />
        },
        {
            path: '/app',
            element: state.token ? <App /> : <Navigate to='/' />
        }
    ])
    return (
        <>
        <RouterProvider router={router} />
        <ToastContainer />
        </>
    )
}
export default Router
