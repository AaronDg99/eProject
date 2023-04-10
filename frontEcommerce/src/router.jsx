import { createBrowserRouter} from  'react-router-dom'
import AuthLayout from './layouts/AuthLayout'
import Layout from './layouts/layout'
import Inicio from './views/Inicio'
import Login from './views/Login'
import Registro from './views/Registro'

const router = createBrowserRouter([
        {
            path: '/',
            element: <Layout />,
            children:[{
                index: true, 
                element: <Inicio />
            },
            
        ]
        },
        
        {
             //se agrega la ruta de Login y posteriormente el componente de Login
            path: '/auth',
            element: <AuthLayout />,
            children:[{
                path: '/auth/Login',
                element: <Login />
            },
            {
                //se agrega la ruta de registro y posteriormente el componente de registro
                path: '/auth/Registro',
                element: <Registro/>
            },
        ]
        }
    ])

export default router