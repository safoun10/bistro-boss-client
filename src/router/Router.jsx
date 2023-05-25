import { Navigate, createBrowserRouter } from "react-router-dom";
import AuthContainer from "../layout/pages/authContainer/AuthContainer";
import Login from "../layout/components/login/Login";
import Register from "../layout/components/register/Register";
import Home from "../layout/pages/home/Home";

export const router = createBrowserRouter([
	{
		path: "/",
		element: <AuthContainer></AuthContainer>,
		children: [
			{
				path: "/",
				element: <Navigate to={"/home"}></Navigate>,
			},
			{
				path: "login",
				element: <Login></Login>,
			},
			{
				path: "register",
				element: <Register></Register>,
			},
		],
	},
	{
		path: "home",
		element: <Home></Home>,
	},
]);

// {
// 		path: "/",
// 		element: <Auth></Auth>,
// 		children: [
// 			{
// 				path: "/",
// 				element: <Navigate to={"/home"}></Navigate>,
// 			},
// 			{
// 				path: "login",
// 				element: <Login></Login>,
// 			},
// 			{
// 				path: "register",
// 				element: <Register></Register>,
// 			},
// 		],
// 	},
// 	{
// 		path: "home",
// 		element: <Home></Home>,
// 	},