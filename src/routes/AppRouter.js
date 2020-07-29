import React, { useContext } from "react";
import {
    BrowserRouter as Router,
    Switch,
} from "react-router-dom";

import { LoginScreen } from "../components/login/LoginScreen";
import { DashboardRouter } from "./DashboardRouter";

import { PublicRoute } from "./PublicRoute";
import { PrivateRoute } from "./PrivateRoute";
import { AuthContext } from "../auth/AuthContext";

//AppRouter el el sistema de rutas principales
export const AppRouter = () => {
    const { user } = useContext(AuthContext)

    return (
        <Router>
            <div>

                <Switch>
                    {/* <Route exact path="/login" component={LoginScreen} />
                    <Route path="/" component={DashboardRouter} /> */}
                    <PublicRoute
                        exact
                        path="/login"
                        component={LoginScreen}
                        isAuthenticate={user.logged}
                    />

                    <PrivateRoute
                        path="/"
                        component={DashboardRouter}
                        isAuthenticate={user.logged}
                    />

                </Switch>

            </div>
        </Router>
    )
}
