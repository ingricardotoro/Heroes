import React from 'react'
import PropTypes from 'prop-types'

import { Route, Redirect } from 'react-router-dom'



export const PublicRoute = ({
    isAuthenticate,//boleano para ver si esta autenticado
    component: Component,//este es el componente que intenta acceder
    ...rest //el resto de las props
}) => {

    return (
        //retornamos el componente Route si esta log, sino al login
        <Route {...rest}
            component={(props) => (
                (!isAuthenticate) /** *******************EN CASO DE NO ESTAR Authenticate */
                    ? (<Component {...props} />)
                    : (<Redirect to='/' />)
            )}
        />
    )
}

PublicRoute.prototype = {
    isAuthenticate: PropTypes.bool.isRequired,
    component: PropTypes.func.isRequired
}