import React from "react"

import {Link} from "react-router-dom"

const Navbar: React.FC = () => {
    return (
        <nav className="flex justify-between items-center py-6">
            <div className="font-bold text-2xl text-sky-300 hover:scale-110 transition-all">
                <Link to={"/"}>Evenite</Link>
            </div>
            <div className="flex justify-between items-center font-semibold text-slate-400">
                <span className={"mr-5 cursor-pointer hover:scale-110  transition-all hover:text-sky-300"}>
                    <Link to={"/login"}>Login</Link>
                </span>
                <span className={"cursor-pointer hover:scale-110 transition-all hover:text-sky-300"}>
                    <Link to={"/register"}>Register</Link>
                </span>
            </div>
        </nav>
    )
}

export default Navbar