import {createBrowserRouter} from "react-router-dom";
import {ForgotPassword, Login, Main, Signup} from "./pages";

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
    {
        path: "/forgot/password",
        element: <ForgotPassword/>
    },


])

export default router