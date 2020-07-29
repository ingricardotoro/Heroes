import React, { useReducer, useEffect } from 'react'
import { AppRouter } from './routes/AppRouter'
import { AuthContext } from './auth/AuthContext'
import { authReducer } from './auth/authReducer'

//valor inicial del objeto , este valor se pasara al state
const init = () => {
    return JSON.parse(localStorage.getItem('user')) || { logged: false }
}

export const HeroesApp = () => {

    const [user, dispatch] = useReducer(authReducer, {}, init)

    //la siguiente funcion permite mantener el valor en localstore hasta que cambie el valor de user
    useEffect(() => {
        localStorage.setItem('user', JSON.stringify('user'))
    }, [user])
    return (

        <AuthContext.Provider value={{ user, dispatch }}>
            <AppRouter />
        </AuthContext.Provider>
    )
}
