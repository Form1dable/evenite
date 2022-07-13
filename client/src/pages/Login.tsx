import React, {useState, useEffect, SyntheticEvent} from "react"

import {Link} from "react-router-dom"


const Login: React.FC = () => {

    const [formData, setFormData] = useState({
        email: "",
        password: ""
    })

    const handleInput = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setFormData({...formData, [e.target.name]: e.target.value})
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        console.log(formData)
        setFormData({email: "", password: ""})
    }

    return (
        <main className={"flex justify-center items-center"}>
            <section className={""}>
                <h1 className={"font-bold text-4xl text-sky-300 mb-12 text-center"}>Lets get right in!</h1>
                <form onSubmit={handleSubmit}>
                    <div className={"my-5"}>
                        <input
                            type="email"
                            name="email"
                            placeholder="Email address"
                            className={"py-4 px-4 w-96 rounded bg-slate-700 text-slate-100"}
                            onChange={handleInput}
                            value={formData.email}
                            required
                            autoComplete="off"
                        />
                    </div>
                    <div className={"my-5"}>
                        <input
                            type="password"
                            name="password"
                            placeholder="Email address"
                            className={"py-4 px-4 w-96 rounded bg-slate-700 text-slate-100"}
                            onChange={handleInput}
                            value={formData.password}
                            required
                            autoComplete="off"
                        />
                    </div>

                    <div className={"my-5 flex justify-between items-center"}>
                        <input type={"submit"} value={"Login"}
                               className={"bg-sky-500 py-3 px-8 rounded font-semibold"}/>
                        <p style={{fontSize: "0.8rem"}} className={"text-slate-400"}>Don't have an account? <span
                            className={"text-sky-300 font-semibold"}><Link to={"/register"}>Register</Link></span></p>
                    </div>
                </form>
            </section>
        </main>
    )
}

export default Login
