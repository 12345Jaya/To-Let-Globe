const Signin = ()=>{
    return(
        <div className="flex justify-center bg-black p-5">
            <div className="flex flex-col justify-evenly items-center bg-slate-950 w-72 h-72 rounded-md">
                <h1 className="text-blue-500 font-bold text-2xl">Signin</h1>
                <div className="flex flex-col justify-center items-center w-50 h-20">
                    <label className="text-white w-50 h-4 p-5 m-2" for="username">Username</label>
                    <input className="text-white bg-black w-50 h-4 p-5 m-2 rounded-md text-center" id="username" type="number/email" placeholder="Enter username/email"/>
                </div>
                <div className="flex flex-col justify-center items-center w-50 h-20">
                    <label className="text-white w-50 h-4 p-5 m-2" for="password">Password</label>
                    <input className="text-white bg-black w-50 h-4 p-5 m-2 rounded-md text-center" id="username" type="text" placeholder="Enter password"/>
                </div>
                <button className="text-white bg-sky-600 rounded-md w-20 h-8 hover:bg-blue-700">Signin</button>
            </div>
        </div>
    )
}
export default Signin