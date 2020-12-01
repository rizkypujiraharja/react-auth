import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import ApiService from '../api-service'
import swal from 'sweetalert'

const Register = () => {

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [email, setEmail] = useState("")

    const changeEmail = data => {
        setEmail(data.target.value)
    }

    const changeUsername = data => {
        setUsername(data.target.value)
    }

    const changePassword = data => {
        setPassword(data.target.value)
    }

    const register = () => {
        ApiService.post("register", {
            email, password, username
        }).then(response => {
            swal("Good job!", "Berhasil Register!", "success").then(() => {
                console.log("redirect to login")
            });
        })
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full space-y-8">
                <div>
                    <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
                        Register
                    </h2>
                </div>
                <form className="mt-8 space-y-6" action="#" method="POST">
                    <div className="shadow-sm -space-y-px">
                        <div>
                            <label for="email-address" className="sr-only">Email address</label>
                            <input id="email-address" onChange={changeEmail} name="email" type="email" autocomplete="email" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Email address" />
                        </div>
                        <div className="mt-1">
                            <label for="username" className="sr-only">Username</label>
                            <input id="username" onChange={changeUsername} name="username" type="text" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Username" />
                        </div>
                        <div>
                            <label for="password" className="sr-only">Password</label>
                            <input id="password" onChange={changePassword} name="password" type="password" autocomplete="current-password" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Password" />
                        </div>
                    </div>

                    <div>
                        <button type="button" onClick={register} className="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                            Register
                        </button>
                        <Link to="/login">
                            <button type="button" className="mt-2 w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">
                                Sign in
                            </button>
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Register;
