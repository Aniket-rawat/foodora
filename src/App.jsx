import React from 'react'
import AppLayout from './components/Layout/AppLayout'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ToastContainer } from 'react-toastify'       // ✅ Import ToastContainer
import 'react-toastify/dist/ReactToastify.css'        // ✅ Import Toastify styles

import Home from './pages/Home';
import Menu from './pages/Menu';
import Contact from './pages/Contact';
import Cart from './pages/Cart';
import Login from './pages/Login';
import PlaceOrder from './pages/PlaceOrder';
import Orders from './pages/Orders';
import Verify from './pages/Verify';

const router = createBrowserRouter([
  {
    path: "/",
    Component: AppLayout,

    // errorElement: <ErrorPage />,
    children: [
      { index: true, Component: Home },
      { path: "menu", Component: Menu },
      { path: "contact", Component: Contact },
      { path: "cart", Component: Cart },
      { path: "login", Component: Login },
      { path: "place-order", Component: PlaceOrder },
      { path: "orders", Component: Orders },
      { path: "verify", Component: Verify },


    ],
  },
]);

const App = () => {
  return <>
    <RouterProvider router={router}> </RouterProvider>
    <ToastContainer
      position="top-right"
      autoClose={2000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss={false}
      draggable
      pauseOnHover
      theme="light"
    />
  </>
}

export default App
