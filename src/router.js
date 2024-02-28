import React, {useContext} from 'react';
import {Navigate, createBrowserRouter, RouterProvider} from 'react-router-dom';
import Auth from './components/Auth/Auth.js';
import App from './App.js';
import AuthContext from './store/AuthContext.js';



const Router = () => {
    const {state} = useContext(AuthContext);

    const router = createBrowserRouter([
        {
            index: true,
            element: state.token ? <Navigate to='/app' /> : <Auth />
        },
        {
            path: '/app',
            element: state.token ? <App /> : <Navigate to='/' />
        }
    ])
    return (
        <RouterProvider router={router} />
    )
}
export default Router
