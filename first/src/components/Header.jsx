import List from './list.jsx'
import logo from '../assets/logo.jpg'
const Header =()=>{
    return(
        <div class="font-sans font-thin flex justify-between bg-black">
            <div><img class="w-20 h-20" src={logo} /></div>
            <div>
                <ul class="flex justify-evenly text-white bg-black p-5 text-1xl">
                    <List name="Home" />
                    <List name="Services" />
                    <List name="Blog" />
                    <List name="Contact" />
                    <List name="About" />
                    <List name="Property Listing" />
                    <List name="Login" />
                </ul>
            </div>
        </div>
    )
}
export default Header