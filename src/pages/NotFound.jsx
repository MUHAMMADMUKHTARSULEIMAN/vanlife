import { NavLink } from "react-router-dom"
export default function NotFound() {
  return (
    <div className="not-found">
      <h1>
        Sorry, the page you were looking for was not found.
      </h1>
      <br/>
      <NavLink to="/">
        <div>
          Return to home
        </div>
      </NavLink>
      
    </div>
  )
}