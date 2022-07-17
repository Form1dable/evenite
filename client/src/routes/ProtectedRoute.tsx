import React from "react";

import {Navigate} from "react-router-dom";

import {useSelector} from "react-redux";
import {RootState} from "../app/store";


interface ProtectedRouteInterface {
    children: JSX.Element
}

const ProtectedRoute: React.FC<ProtectedRouteInterface> = (props) => {
    const authenticated = useSelector<RootState>(state => state.auth.token.authenticated)

    if (!authenticated) {
        return <Navigate to={"/login"} replace/>
    }

    return props.children
}

export default ProtectedRoute