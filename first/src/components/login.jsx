import {Link} from 'react-router-dom'
const Login = () => {
    return(
        <div className="flex justify-center bg-black p-10">
            <div className="flex flex-col justify-evenly items-center bg-slate-950 w-72 h-96 rounded-md">
                <h1 className="text-blue-500 font-bold text-2xl">Login</h1>
                <div className="flex flex-col justify-center items-center w-50 h-20">
                    <label className="text-white w-50 h-4 p-5 m-2" for="username">Username</label>
                    <input className="text-white bg-black w-50 h-4 p-5 m-2 rounded-md text-center" id="username" type="number/email" placeholder="Enter username/email"/>
                </div>
                <div className="flex flex-col justify-center items-center w-50 h-20">
                    <label className="text-white w-50 h-4 p-5 m-2" for="password">Password</label>
                    <input className="text-white bg-black w-50 h-4 p-5 m-2 rounded-md text-center" id="username" type="text" placeholder="Enter password"/>
                </div>
                <div className="text-white rounded-md flex flex-col items-center justify-evenly w-60 h-32">
                    <button className="text-white bg-sky-600 rounded-md w-20 h-8 p-3 m-1 flex items-center justify-center hover:bg-blue-700">login</button>
                    <h1 className="text-white m-2 w-60 flex justify-center h-6">Don't have account? signin</h1>
                    <Link to="/signin"><button className="text-white bg-sky-600 rounded-md w-20 h-8 p-3 m-1 flex items-center justify-center hover:bg-blue-700">Signin</button></Link>
                </div>
            </div>
        </div>
    )
}
export default Login