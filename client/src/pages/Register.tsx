import React, {useState, useEffect} from "react"

import {Link} from "react-router-dom"

const Register: React.FC = () => {

    const [formData, setFormData] = useState({
        email: "",
        username: "",
        password1: "",
        password2: ""
    })

    const handleInput = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setFormData({...formData, [e.target.name]: e.target.value})
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        console.log(formData)
        setFormData({email: "", username: "", password1: "", password2: ""})
    }

    return (
        <main className={"flex justify-center items-center"}>
            <section className={""}>
                <h1 className={"font-bold text-4xl text-sky-300 mb-12 text-center"}>Welcome new guest!</h1>
                <form onSubmit={handleSubmit}>
                    <div className={"my-5"}>
                        <input
                            type="email"
                            name="email"
                            placeholder="Email address"
                            className={"py-4 px-4 w-96 rounded bg-slate-700 text-slate-100"}
                            onChange={handleInput}
                            value={formData.email}
                            autoComplete="off"
                        />
                    </div>
                    <div className={"my-5"}>
                        <input
                            type="username"
                            name="username"
                            placeholder="Username"
                            className={"py-4 px-4 w-96 rounded bg-slate-700 text-slate-100"}
                            onChange={handleInput}
                            value={formData.username}
                            autoComplete="off"
                        />
                    </div>
                    <div className={"my-5"}>
                        <input
                            type="password"
                            name="password1"
                            placeholder="Password"
                            className={"py-4 px-4 w-96 rounded bg-slate-700 text-slate-100"}
                            onChange={handleInput}
                            value={formData.password1}
                            autoComplete="off"
                        />
                    </div>
                    <div className={"my-5"}>
                        <input
                            type="password"
                            name="password2"
                            placeholder="Confirm password"
                            className={"py-4 px-4 w-96 rounded bg-slate-700 text-slate-100"}
                            onChange={handleInput}
                            value={formData.password2}
                            autoComplete="off"
                        />
                    </div>
                    <div className={"my-5 flex justify-between items-center"}>
                        <input type={"submit"} value={"Register"}
                               className={"bg-sky-500 py-3 px-8 rounded font-semibold"}/>
                        <p style={{fontSize: "0.8rem"}} className={"text-slate-400"}>Already have an account? <span
                            className={"text-sky-300 font-semibold"}><Link to={"/login"}>Login</Link></span></p>
                    </div>
                </form>
            </section>
        </main>
    )
}

export default Register
