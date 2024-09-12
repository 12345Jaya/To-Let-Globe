import {useState} from 'react'
import Sectionbuttons from '../components/sectionbuttons.jsx'
import Section1 from '../components/section1.jsx'
import Section2 from '../components/section2.jsx'
import Add from '../components/add.jsx'
const Blog = () =>{
  const [showForm,setShowForm] = useState(false);
  
  return(
    <div>
      <Section1 />
      <Sectionbuttons />
      <Section2 showForm={showForm} setShowForm={setShowForm}/>
      {/* <Login /> */}
      <Add showForm={showForm} setShowForm={setShowForm}/>
    </div>
  )
}
export default Blog;