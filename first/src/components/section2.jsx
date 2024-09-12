import Card from './card.jsx'
import Form from './form.jsx'
import {useState} from 'react'
const Section2 = ({showForm,setShowForm}) =>{
    const [listitem,setListitem]=useState([<Card />,<Card />,<Card />,<Card />,<Card />,<Card />])
    return(
        <div className="bg-black flex justify-evenly flex-wrap" id="section2">
            {
                listitem.map((ele,id)=>
                    <>{ele}</>
                )
            }
            {showForm?<Form listitem={listitem} setListitem={setListitem} showForm={showForm} setShowForm={setShowForm}/>:<p/>}
        </div>
    )
}
export default Section2