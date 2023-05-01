import { createBrowserRouter } from "react-router-dom";
import Main from "../MainLayout/Main";
import Home from "../Pages/Home/Home";
import News from "../Pages/News/News";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";


const router = createBrowserRouter([
    {
        path: '/',
        element:<Main/>,
        children:[
            {
                path:'/',
                element:<Home/>,
                loader: ()=> fetch(`http://localhost:5000/travelData`)
            },
            {
                path:'/news',
                element:<News/>
            },
            {
                path:'/login',
                element:<Login/>
            },
            {
                path:'/register',
                element:<Register/>
            }
        ]
    }
])

export default router;