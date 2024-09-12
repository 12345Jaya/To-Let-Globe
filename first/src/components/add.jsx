import {useState} from 'react'
import {Link} from 'react-router-dom'
const Add = (props) => {
    const fun=()=>{
        props.setShowForm(!props.showForm);
    }
    return(
        <>
            <div className="h-14 bg-black flex justify-center">
            <Link to="/login"><button className="text-white bg-sky-600 w-24 h-10 p-1 rounded-md hover:bg-blue-700" onClick={fun}>Add Blog</button></Link>
            </div>
        </>
    )
}
export default Add