import React from 'react'
//Routes o rutas
import * as routes from './route.js'

// User
import Home from '../Components/Home.jsx'
import Login from '../Components/Login.jsx'
import SignUp from '../Components/SignUp.jsx'

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
    }
]
export default RoutesCom