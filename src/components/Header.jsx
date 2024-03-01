import { NavLink, useNavigate } from "react-router-dom"

export default function Header() {
  const navigate = useNavigate();
  const handleClick = () => {
    sessionStorage.removeItem("logged-in");
    navigate("/")
  }
  return (
    <header>
      <NavLink to="/">
        <img className="logo" src="/images/logo.png" alt="VanLife Logo"/>
      </NavLink>
      <nav className="header-nav">
        <NavLink to={`host/${123}`} className={({isActive}) => {return isActive ? "active-link" : null}}>
          <h3>Host</h3>
        </NavLink>
        <NavLink to="about" className={({isActive}) => {return isActive ? "active-link" : null}}>
          <h3>About</h3>
        </NavLink>
        <NavLink to="vans" className={({isActive}) => {return isActive ? "active-link" : null}}>
          <h3>Vans</h3>
        </NavLink>
        <NavLink to="login">
          <img src="/images/icon.png" alt="User Icon" />
        </NavLink>
        <button className="sign-out-button" onClick={handleClick}>Sign out</button>
      </nav>
    </header>
  )
}


// {
//   sessionStorage.getItem("logged-in")
//   ?
//   ""
//   :
//   <NavLink to="login">
//     <img src="/images/icon.png" alt="User Icon" />
//   </NavLink>
// }
// {
//   sessionStorage.getItem("logged-in")
//   ?
//   <button className="sign-out-button" onClick={handleClick}>Sign out</button>
//   :
//   ""
// }