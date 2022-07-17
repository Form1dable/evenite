import React, {useState, useEffect, SyntheticEvent} from "react"

// Redux
import {getToken, setToken, resetToken} from "../features/auth/authSlice";
import {AppDispatch, RootState} from "../app/store";
import {useDispatch, useSelector} from "react-redux";


// Libraries
import {Link} from "react-router-dom"


// Components
import AnimatedPage from "../components/animation/AnimatedPage";


const Login: React.FC = () => {

    const dispatch = useDispatch<AppDispatch>()
    const token = useSelector<RootState>(state => state.auth.token)

    const [formData, setFormData] = useState({
        email: "",
        password: ""
    })

    const handleInput = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setFormData({...formData, [e.target.name]: e.target.value})
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        dispatch(getToken(formData))

        setFormData({email: "", password: ""})
    }

    return (
        <AnimatedPage>
            <main>
                <section className={"max-w-md mx-auto"}>
                    <h1 className={"font-bold text-4xl text-sky-300 mb-12 text-center"}>Lets get right in!</h1>
                    <form onSubmit={handleSubmit}>
                        <div className={"my-5"}>
                            <input
                                type="email"
                                name="email"
                                placeholder="Email address"
                                className={"py-4 px-4 rounded bg-slate-800 text-slate-100 w-full"}
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
                                className={"py-4 px-4 rounded bg-slate-800 text-slate-100 w-full"}
                                onChange={handleInput}
                                value={formData.password}
                                required
                                autoComplete="off"
                            />
                        </div>

                        <input type={"submit"} value={"Login"}
                               className={"bg-sky-500 py-3 px-8 rounded font-semibold w-full cursor-pointer"}/>
                        <div className={"my-5 flex justify-between items-center"}>
                            <p style={{fontSize: "0.8rem"}} className={"text-slate-400"}>Don't have an account? <span
                                className={"text-sky-300 font-semibold"}><Link to={"/register"}>Register</Link></span>
                            </p>
                            <p style={{fontSize: "0.8rem"}}
                               className={"text-slate-400 text-sky-300 font-semibold"}>Frogot
                                Password</p>
                        </div>
                    </form>
                </section>
            </main>
        </AnimatedPage>
    )
}

export default Login
