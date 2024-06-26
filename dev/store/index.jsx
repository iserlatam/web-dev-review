import React from "react";
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from "react-router-dom"

import Home from "./src/pages/Home";

const router = createBrowserRouter([
    {
        path: '/',
        element: <h1>Hello World</h1>
    },
    {
        path: '/home',
        element: <Home />
    },
    {
        path: '/*',
        element: <div>not found</div>
    }
])

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
)