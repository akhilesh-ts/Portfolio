import { createBrowserRouter } from "react-router-dom";
import Proffession from "../component/Proffession";
import Projects from "../component/Projects";
import Experience from "../component/Experience";
import Tools from "../component/Tools";
import Certificates from "../component/Certificates";
import Home from "../page/Home";

const AppRoute=createBrowserRouter([
    {
        path:'/',
        element:<Home/>,
        children:[
            {
                path:'',
                element:<Proffession/>

        },
            {
                path:'Projects',
                element:<Projects/>
            },
            {
                path:'Experience',
                element:<Experience/>
            },
            {
                path:'Tools',
                element:<Tools/>
            },
            {
                path:'Certificates',
                element:<Certificates/>
            }
        ]
    }
])

export default AppRoute