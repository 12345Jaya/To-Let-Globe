// import List from './list.jsx'
// import logo from '../assets/logo.jpg'
// import Link from 'react'
// const Header =()=>{
//     return(
//         <div className="font-sans font-thin flex justify-between bg-black">
//             <div><img className="w-20 h-20" src={logo} /></div>
//             <div>
//                 <ul class="flex justify-evenly text-white bg-black p-5 text-1xl">
//                     <li><Link to="/home"><List name="Home" /></Link></li>
//                     <li><Link to="/services"><List name="Services" /></Link></li>
//                     <li><Link to="/blog"><List name="Blog" /></Link></li>
//                     <li><Link to="/contact"><List name="Contact" /></Link></li>
//                     <li><Link to="/about"><List name="About" /></Link></li>
//                     <li><Link to="/signin"><List name="Property Listing" /></Link></li>
//                     <li><Link to="/login"><List name="Login" /></Link></li>
//                 </ul>
//             </div>
//         </div>
//     )
// }
// export default Header
import List from './list.jsx';
import logo from '../assets/logo.jpg';
import Login from './login.jsx';
import Signin from './signin.jsx';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className="font-sans font-thin flex justify-between bg-black">
            <div><img className="w-20 h-20" src={logo} alt="Logo" /></div>
            <div>
                <ul className="flex justify-evenly text-white bg-black p-5 text-1xl">
                    <li><Link to="/"><List name="Home" /></Link></li>
                    <li><Link to="/Services"><List name="Services" /></Link></li>
                    <li><Link to="/blog"><List name="Blog" /></Link></li>
                    <li><Link to="/contact"><List name="Contact" /></Link></li>
                    <li><Link to="/about"><List name="About" /></Link></li>
                    <li><Link to="/property"><List name="Property Listing" /></Link></li>
                    <li><Link to="/login"><List name="Login" /></Link></li>
                </ul>
            </div>
        </div>
    );
}
export default Header;
// const App = () => {
//     return (
//         <BrowserRouter>
//             <Header />
//             <Routes>
//                 <Route path="/" element={<Signin />} />
//                 <Route path="/login" element={<Login />} />
//                 {/* Add other routes here */}
//             </Routes>
//         </BrowserRouter>
//     );
// }

// export default App;
