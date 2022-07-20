import React from "react"

import {Link} from "react-router-dom"

// Redux
import {useDispatch, useSelector} from "react-redux";
import {RootState, AppDispatch} from "../../app/store";
import {logout} from "../../features/auth/authSlice";

const Navbar: React.FC = () => {

    const dispatch = useDispatch<AppDispatch>()
    const authenticated = useSelector<RootState>(state => state.auth.token.authenticated)


    const handleLogout = () => {
        dispatch(logout())

    }


    return (
        <nav className="flex justify-between items-center py-6 border-b border-gray-700">
            <div className="font-bold text-2xl text-sky-300 hover:scale-110 transition-all">
                <Link to={"/"}>Evenite</Link>
            </div>
            <div className="flex justify-between items-center font-semibold text-slate-400">
                <span className={"mr-5 cursor-pointer hover:scale-110  transition-all hover:text-sky-300"}> <Link
                    to={"/events"}>Events</Link> </span>
                <span className={"cursor-pointer hover:scale-110 transition-all hover:text-sky-300"}>
                    <Link to="/events/create-event">Create</Link>
                </span>
            </div>
            {!authenticated ? (
                <div className="flex justify-between items-center font-semibold text-slate-400">
                <span className={"mr-5 cursor-pointer hover:scale-110  transition-all hover:text-sky-300"}>
                    <Link to={"/login"}>Login</Link>
                </span>
                    <span className={"cursor-pointer hover:scale-110 transition-all hover:text-sky-300"}>
                    <Link to={"/register"}>Register</Link>
                </span>
                </div>

            ) : (
                <div className="flex justify-between items-center font-semibold text-slate-400">
                <span className={"mr-5 cursor-pointer hover:scale-110  transition-all hover:text-sky-300"}>
                    <Link to={"/profile"}>Profile</Link>
                </span>
                    <span className={"cursor-pointer hover:scale-110 transition-all hover:text-sky-300"}
                          onClick={handleLogout}>
                        Logout
                </span>
                </div>

            )}
        </nav>
    )
}

export default Navbar