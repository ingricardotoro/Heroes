import React from 'react'
import PropTypes from 'prop-types'

import { Route, Redirect } from 'react-router-dom'



export const PrivateRoute = ({
    isAuthenticate,//boleano para ver si esta autenticado
    component: Component,//este es el componente que intenta acceder
    ...rest //el resto de las props
}) => {

    //almacenamos la ultima Url que ha navegado, y la almacenamo en lasPath, 
    //para cuabdo haga login vuelva a ella
    localStorage.setItem('lastPath', rest.location.pathname)
    return (
        //retornamos el componente Route si esta log, sino al login
        <Route {...rest}
            component={(props) => (
                (isAuthenticate)
                    ? (<Component {...props} />)
                    : (<Redirect to='login' />)
            )}
        />
    )
}

PrivateRoute.prototype = {
    isAuthenticate: PropTypes.bool.isRequired,
    component: PropTypes.func.isRequired
}