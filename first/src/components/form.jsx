import {useState} from 'react';
import Section2 from './section2.jsx'
import Card from './card.jsx'
const Form = ({listitem,setListitem,showForm,setShowForm}) =>{
    const [name,setName] = useState("")
    const [role,setRole] = useState("")
    const [title,setTitle] = useState("")
    const [category,setCategory] = useState("")
    const [intro,setIntro] = useState("")
    const [image,setImage] = useState("")
    const [content,setContent] = useState("")
    const [url,setUrl] = useState("");
    const handlename = (event) =>{
        setName(event.target.value)
    }
    const handlerole = (event) =>{
        setRole(event.target.value)
    }
    const handletitle = (event) =>{
        setTitle(event.target.value)
    }
    const handlecategory = (event) =>{
        setCategory(event.target.value)
    }
    const handleintro = (event) =>{
        setIntro(event.target.value)
    }
    const handleimage = (event) =>{
        setImage(event.target.value)
    }
    const handlecontent = (event) =>{
        setContent(event.target.value)
    }
    // const handleUrl = (event) =>{
    //     setUrl(event.target.value)
    // }
    const fun = (event) => {
        event.preventDefault();
        const a=(<Card name={name} role={role} title={title} category={category} intro={intro} image={image} content={content} url={url}/>)
        // console.log(a)
        setListitem([...listitem,a])
        // console.log(listitem)
        setShowForm(!showForm);
    }
    const obj={n:{name},r:{role},t:{title},c:{category},i:{intro},im:{image},co:{content}}
    console.log(obj)
    return(
        <div className="w-full flex justify-center text-white bg-black" >
            <div className="w-1/3">
                <h1 className="text-2xl text-center">Create Blog</h1>
                <label>
                    <div className="my-4">Name</div> 
                    <input className="w-full font-thin text-sm p-2 border-2 border-sky-500 rounded-md w-1/2 bg-black" id="name" type="text" placeholder={"Enter your name!"} value={name} onChange={handlename}></input>
                </label>
                <label>
                    <div className="my-4">Role</div>
                    <input className="w-full font-thin text-sm p-2 border-2 border-sky-500 rounded-md w-1/2 bg-black" id="role" type="text" placeholder={"Content Creater"} value={role} onChange={handlerole}></input>
                </label>
                <label>
                    <div className="my-4">Title</div>
                    <input className="w-full font-thin text-sm p-2 border-2 border-sky-500 rounded-md w-1/2 bg-black" id="title" type="text" placeholder={"Title goes here!"} value={title} onChange={handletitle}></input>
                </label>
                <label>
                    <div className="my-4">Category</div>
                    <input className="w-full font-thin text-sm p-2 border-2 border-sky-500 rounded-md w-1/2 bg-black" id="category" type="text" placeholder={"News & Events"} value={category} onChange={handlecategory}></input>
                </label>
                <label>
                    <div className="my-4">Intro</div>
                    <input className="w-full font-thin text-sm p-2 border-2 border-sky-500 rounded-md w-1/2 bg-black" id="intro" type="text" placeholder={"Breif Introduction!"} value={intro} onChange={handleintro}></input>
                </label>
                <label>
                    <div className="my-4">Upload Image</div>
                    {/* <button><a href="https://google.com" target="_blank">Search images in Google</a></button> */}
                    {/* <input className="text-white bg-black border-white" type="url" onChange={handleUrl} placeholder={url}/> */}
                    <input type="file" accept='image/*' className="w-full font-thin text-sm h-11 p-2 border-2 border-sky-500 rounded-md w-1/2 bg-black" value={image} onChange={handleimage}></input>
                </label>
                <label>
                    <div className="my-4">Content</div>
                    <input className="w-full font-thin text-sm p-2 border-2 border-sky-500 rounded-md w-1/2 bg-black" type="text" value={content} onChange={handlecontent}></input>
                </label>
                <div className="flex justify-between">
                    <button className="bg-blue-500 my-2 px-6 py-2 text-xs text-black font-extrabold border-0 rounded-md" onClick={(event) => fun(event)}>Submit</button>
                    <button className="bg-blue-500 my-2 px-6 py-2 text-xs text-black font-extrabold border-0 rounded-md">Reset</button>
                </div> 
            </div>
        </div>
    )
}
export default Form