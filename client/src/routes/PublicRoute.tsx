import React from "react";

import {Navigate} from "react-router-dom";

import {useSelector} from "react-redux";
import {RootState} from "../app/store";


interface PublicRouteInterface {
    children: JSX.Element
}

const PublicRoute: React.FC<PublicRouteInterface> = (props) => {
    const authenticated = useSelector<RootState>(state => state.auth.token.authenticated)

    if (authenticated) {
        return <Navigate to={"/profile"} replace/>
    }

    return props.children
}

export default PublicRoute
