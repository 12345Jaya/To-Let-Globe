import Header from './components/Header.jsx'
import Sectionbuttons from './components/sectionbuttons.jsx'
import Section1 from './components/section1.jsx'
import Section2 from './components/section2.jsx'
import Login from './components/login_page.jsx'
const App = () =>{
  return(
    <div>
      <Header />
      <Section1 />
      <Sectionbuttons />
      <Section2 />
      <Login />
    </div>
  )
}
export default App