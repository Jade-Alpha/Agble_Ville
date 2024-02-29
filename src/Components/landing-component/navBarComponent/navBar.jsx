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
    return (

        <>
            <div className="nav-side">
                <h3>Agble Ville</h3>
                <nav className="top-nave">

                    <Link className="home-home" to="/">Home</Link>
                    <Link to="/product">Products</Link>
                    <Link to="/about">About</Link>
                    <Link to="/contact">Contact</Link>
                  
                </nav>
                {/* <input type="text"
    //    value={fruits}
    placeholder="search"
    //    onChange={(event) => setSearchInput(event.target.value)}
    //    onKeyDown={event => event.key === 'Enter' && SearchItem()}
    onKeyDown={(event) => setSearchInput(event.target.value)}
     />
     <button onClick={ SearchItem()}>Search</button> */}
     <Link className="sign" to="/sign-up">Sign Up</Link>
            </div>
            
        </>
    )
}