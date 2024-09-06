import {useState} from 'react';
const Login = () =>{
    const [name,setName] = useState("Enter your name!")
    const [role,setRole] = useState("Content Creater")
    const [title,setTitle] = useState("Title goes here!")
    const [category,setCategory] = useState("News & Events")
    const [intro,setIntro] = useState("Breif Introduction!")
    const [image,setImage] = useState("")
    const [content,setContent] = useState("")
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
    const obj={n:{name},r:{role},t:{title},c:{category},i:{intro},im:{image},co:{content}}
    console.log(obj)
    return(
        <div class="w-full flex justify-center text-white bg-black">
            <div class="w-1/3">
                <h1 class="text-2xl text-center">Create Blog</h1>
                <label>
                    <div class="my-4">Name</div> 
                    <input className="w-full font-thin text-sm p-2 border-2 border-sky-500 rounded-md w-1/2 bg-black" id="name" type="text" value={name} onChange={handlename}></input>
                </label>
                <label>
                    <div class="my-4">Role</div>
                    <input className="w-full font-thin text-sm p-2 border-2 border-sky-500 rounded-md w-1/2 bg-black" id="role" type="text" value={role} onChange={handlerole}></input>
                </label>
                <label>
                    <div class="my-4">Title</div>
                    <input class="w-full font-thin text-sm p-2 border-2 border-sky-500 rounded-md w-1/2 bg-black" id="title" type="text" value={title} onChange={handletitle}></input>
                </label>
                <label>
                    <div class="my-4">Category</div>
                    <input class="w-full font-thin text-sm p-2 border-2 border-sky-500 rounded-md w-1/2 bg-black" id="category" type="text" value={category} onChange={handlecategory}></input>
                </label>
                <label>
                    <div class="my-4">Intro</div>
                    <input class="w-full font-thin text-sm p-2 border-2 border-sky-500 rounded-md w-1/2 bg-black" id="intro" type="text" value={intro} onChange={handleintro}></input>
                </label>
                <label>
                    <div class="my-4">Upload Image</div>
                    <input type="file" class="w-full font-thin text-sm h-11 p-2 border-2 border-sky-500 rounded-md w-1/2 bg-black" value={image} onChange={handleimage}></input>
                </label>
                <label>
                    <div class="my-4">Content</div>
                    <input class="w-full font-thin text-sm p-2 border-2 border-sky-500 rounded-md w-1/2 bg-black" type="text" value={content} onChange={handlecontent}></input>
                </label>
                <div class="flex justify-between">
                    <button class="bg-blue-500 my-2 px-6 py-2 text-xs text-black font-extrabold border-0 rounded-md">Submit</button>
                    <button class="bg-blue-500 my-2 px-6 py-2 text-xs text-black font-extrabold border-0 rounded-md">Reset</button>
                </div> 
            </div>
        </div>
    )
}
export default Login