// import { useEffect, useState } from "react"
// import { productItems } from "../../product"
import { Link } from "react-router-dom"

export default function NavBar() {

    // const[searchInput, setSearchInput] = useState("")

    // const  SearchItem=()=>{
    // const result = productItems.filter((x)=> x.name == searchInput);
    // console.log({searchInput})
    // console.log({result});
    // }

    // useEffect(searchInput,[])
    return(
 
 <>
 <div className="nav-side">
     <img src={logo} className="logo" />
     <nav className="top-nave">
         <a href="" className="home-home">HOME</a>
         <a href=""><Link to="/product">PRODUCTS</Link></a>
         <a href=""><Link to="/about">ABOUT</Link></a>
         <a href=""><Link to="/contact">CONTACT</Link></a>
         <a href="">SIGN UP</a>
     </nav>
     <input type="text"
    //    value={fruits}
    placeholder="search"
    //    onChange={(event) => setSearchInput(event.target.value)}
    //    onKeyDown={event => event.key === 'Enter' && SearchItem()}
    onKeyDown={(event) => setSearchInput(event.target.value)}
     />
     <button onClick={ SearchItem()}>Search</button>
 </div>
        </>
    )
}