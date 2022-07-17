import React, {useState, useEffect} from "react"
import {RootState, AppDispatch} from "../app/store";

// Redux
import {useDispatch, useSelector} from "react-redux";
import {registerAccount, registerReset} from "../features/auth/authSlice";

// Libraries
import {Link, useNavigate} from "react-router-dom"

// Components
import AnimatedPage from "../components/animation/AnimatedPage";
import {toast} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


const Register: React.FC = () => {

    const dispatch = useDispatch<AppDispatch>()
    const navigate = useNavigate()
    const {register} = useSelector<RootState, AuthStateInterface>(state => state.auth)
    const {loading, error, success, message} = register

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

        const {email, username, password1, password2} = formData

        if (password1 !== password2) {
            toast.error("The password doesn't match!")
            setFormData({...formData, password1: "", password2: ""})
            return
        }

        const data = {
            email,
            username,
            password: password1
        }

        dispatch(registerAccount(data))

        setFormData({email: "", username: "", password1: "", password2: ""})
    }


    useEffect(() => {
        if (success) {
            toast.success("Your account has been created.")
        }
        dispatch(registerReset())
    }, [success])

    useEffect(() => {
        if (error) {
            toast.error("Something went wrong")
        }

    }, [error])


    return (
        <AnimatedPage>
            <main>
                <section className={"max-w-md mx-auto"}>
                    <h1 className={"font-bold text-4xl text-sky-300 mb-12 text-center"}>Welcome new guest!</h1>
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
                                type="username"
                                name="username"
                                placeholder="Username"
                                className={"py-4 px-4 rounded bg-slate-800 text-slate-100 w-full"}
                                onChange={handleInput}
                                value={formData.username}
                                required
                                autoComplete="off"
                            />
                        </div>
                        <div className={"my-5"}>
                            <input
                                type="password"
                                name="password1"
                                placeholder="Password"
                                className={"py-4 px-4 rounded bg-slate-800 text-slate-100 w-full"}
                                onChange={handleInput}
                                value={formData.password1}
                                required
                                autoComplete="new-password"
                            />
                        </div>
                        <div className={"my-5"}>
                            <input
                                type="password"
                                name="password2"
                                placeholder="Confirm password"
                                className={"py-4 px-4 rounded bg-slate-800 text-slate-100 w-full"}
                                onChange={handleInput}
                                value={formData.password2}
                                required
                                autoComplete="new-password"
                            />
                        </div>
                        <input type={"submit"} value={"Register"}
                               className={"bg-sky-500 py-3 px-8 rounded font-semibold w-full cursor-pointer"}/>
                        <div className={"my-5 flex justify-between items-center"}>
                            <p style={{fontSize: "0.8rem"}} className={"text-slate-400"}>Already have an account? <span
                                className={"text-sky-300 font-semibold"}><Link to={"/login"}>Login</Link></span></p>
                        </div>
                    </form>
                </section>
            </main>
        </AnimatedPage>
    )
}

export default Register
