import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import {store} from "./redux/store.ts";
import {Provider} from "react-redux";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Dashboard from "./routes/Dashboard.tsx";
import {TodoApp} from "./routes/TodoApp.tsx";
import {FibonacciApp} from "./routes/FibonacciApp.tsx";
import {todoLoader} from "./loaders/todoLoader.ts"

const router = createBrowserRouter([{
    path: '/', element:  <App/>,
    children: [
        {index: true, element: <Dashboard/>},
        {path: '/todo',element: <TodoApp/>, loader: todoLoader},
        {path: '/fibonacci', element: <FibonacciApp/>}

    ]
}])
createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <Provider store={store}>
            <RouterProvider router={router} />
        </Provider>
    </StrictMode>
);
