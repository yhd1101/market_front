import {createBrowserRouter} from "react-router-dom";
import {ForgotPassword, Login, Main, Signup, Profile, ProductDetail} from "./pages";

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
    {
        path: "/profile",
        element: <Profile/>
    },
    {
        path: "/product/:productid",
        element: <ProductDetail/>
    },



])

export default router