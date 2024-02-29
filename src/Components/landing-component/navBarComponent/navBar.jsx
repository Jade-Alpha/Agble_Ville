import logo from "../../../Assect/logo 4.png"
export default function NavBar() {
    return(
 
 <>
 <div className="nav-side">
     <img src={logo} className="logo" />
     <nav className="top-nave">
         <a href="" className="home-home">HOME</a>
         <a href="">PRODUCTS</a>
         <a href="">ABOUT</a>
         <a href="">CONTACT</a>
         <a href="">BLOGS</a>
     </nav>
     <input type="text"
     //   value={inputField}
     //   onChange={(event) => setInputField(event.target.value)}
     //   onKeyDown={event => event.key === 'Enter' && searchRecipes()}
     />
     <button>Search</button>
 </div>
        </>
    )
}