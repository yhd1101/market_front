import {createBrowserRouter} from "react-router-dom";
import {Login, Main, Signup} from "./pages";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main/>
    },
    {
        path: "/login",
        element: <Login/>
    },
    {
        path: "/signup",
        element: <Signup/>
    },


])

export default router