import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function Login() {
  const [valueInput, setValueInput] = useState({ email: '', password: '' })
  const handleChangeInput = (e) => {
    const { name, value } = e.target
    const userInput = { ...valueInput, [name]: value }
    setValueInput(userInput)
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(valueInput, '<<<<<<<<<< Submit')
  }
  return (
    <div className="font-sans h-screen bg-gray-400">
      <div className="container mx-auto pt-20">
        <div className="flex justify-center items-center">
          <div className="w-full xl:w-3/4 lg:w-11/12 flex">
            <div
              className="w-full h-auto bg-gray-400 hidden lg:block lg:w-1/2 bg-cover rounded-l-lg"
              style={{ backgroundImage: `url(https://3pillarsofagile.github.io/assets/image/kanban-board-for-a-project.jpeg)` }}
            ></div>
            <div className="w-full lg:w-1/2 bg-white p-5 rounded-lg lg:rounded-l-none">
              <h3 className="pt-4 text-2xl text-center">Sign in</h3>
              <form className="px-8 pt-6 pb-8 mb-4 bg-white rounded">
                <div className="mb-4">
                  <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="username">
                    Email
								</label>
                  <input
                    className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                    id="username"
                    type="email"
                    name="email"
                    onChange={(e) => handleChangeInput(e)}
                    placeholder="Email"
                  />
                </div>
                <div className="mb-4">
                  <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="password">
                    Password
								</label>
                  <input
                    className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border  rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                    id="password"
                    type="password"
                    name="password"
                    onChange={(e) => handleChangeInput(e)}
                    placeholder="******"
                  />
                  {/* <p className="text-xs italic text-red-500">Please choose a password.</p> */}
                </div>
                <div className="mb-4">
                  <input className="mr-2 leading-tight" type="checkbox" id="checkbox_id" />
                  <label className="text-sm" htmlFor="checkbox_id">
                    Remember Me
								</label>
                </div>
                <div className="mb-6 text-center">
                  <button
                    className="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline"
                    type="submit"
                    onClick={(e) => handleSubmit(e)}
                  >
                    Sign In
								</button>
                </div>
                <hr className="mb-6 border" />
                <div className="text-center">
                  <Link
                    className="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800"
                    to="./register"
                  >
                    Create an Account!
								</Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Login