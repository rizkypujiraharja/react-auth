import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import ApiService from '../api-service'
import swal from 'sweetalert'

const Login = () => {

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const changeUsername = data => {
        setUsername(data.target.value)
    }

    const changePassword = data => {
        setPassword(data.target.value)
    }

    const login = () => {
        ApiService.post("login", {
            password, username
        }).then(response => {
            localStorage.setItem('token', response.data.data.token)
            swal("Good job!", "Berhasil Login!", "success").then(() => {
                console.log("redirect to home")
            });
        })
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full space-y-8">
                <div>
                    <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
                        Sign in to your account
                    </h2>
                </div>
                <form className="mt-8 space-y-6" action="#" method="POST">
                    <div className="rounded-md shadow-sm -space-y-px">
                        <div>
                            <label htmlFor="email-address" className="sr-only">Username</label>
                            <input id="email-address" onChange={changeUsername} name="username" type="text" className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Username" />
                        </div>
                        <div>
                            <label htmlFor="password" className="sr-only">Password</label>
                            <input id="password" onChange={changePassword} name="password" type="password" className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Password" />
                        </div>
                    </div>

                    <div>
                        <button type="button" onClick={login} className="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">
                            Sign in
                        </button>
                        <Link to="/register">
                            <button type="button" className="mt-2 w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                                Register
                            </button>
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login;
