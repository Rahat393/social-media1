import { createBrowserRouter } from "react-router-dom";
import About from "../Components/About/About";
import Media from "../Components/Media/Media";
import Message from "../Components/Message/Message";
import Main from "../Layouts/Main";
import Home from "../Pages/Home/Home";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/media',
                element: <Media></Media>
            },
            {
                path: '/message',
                element: <Message></Message>
            },
            {
                path: '/about',
                element: <About></About>
            }

        ]
    }
])