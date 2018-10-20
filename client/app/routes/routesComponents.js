import React from 'react'
//Routes o rutas
import * as routes from './route.js'

// User
import Home from '../Components/Home.jsx'
import Login from '../Components/Login.jsx'
import SignUp from '../Components/SignUp.jsx'
import Pestaña from '../Components/Pestaña.jsx'
import Inicio from '../Components/Inicio.jsx'
import Examen1 from '../Components/Examen1.jsx'
import Examen2 from '../Components/Examen2.jsx'
import Examen3 from '../Components/Examen3.jsx'
const RoutesCom = [
    {
        route: routes.SIGNUP,
        components: < SignUp/>
    },
    {
        route: routes.LOGIN,
        components: < Login/>
    },
    {
        route: routes.HOME,
        components: <Home/>
    },
    {
        route: routes.PESTAÑA,
        components: <Pestaña/>
    },
    {
        route: routes.INICIO,
        components: <Inicio/>
    },
    {
        route: routes.EXAMEN1,
        components: <Examen1/>
    },
    {
        route: routes.EXAMEN2,
        components: <Examen2/>
    },
    {
        route: routes.EXAMEN3,
        components: <Examen3/>
    }
]
export default RoutesCom