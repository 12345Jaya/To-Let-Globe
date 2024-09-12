import Header from './components/Header.jsx'
import Login from './components/login.jsx'
import Signin from './components/signin.jsx'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './components/Home.jsx'
import Services from './components/Services.jsx'
import Blog from './components/Blog.jsx'
import Contact from './components/Contact.jsx'
import About from './components/About.jsx'
import Property from './components/Property.jsx'
const App = () =>{
  return(
    <div>
      <BrowserRouter>
        <Header />  
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route path="/services" element={<Services />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/property" element={<Property />} /> 
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter> 
    </div>
  )
}
export default App