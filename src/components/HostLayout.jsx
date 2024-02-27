import { Outlet, NavLink } from "react-router-dom";

export default function HostLayout() {
  return (
    <div className="host-layout">
      <nav className="host-nav">
        <NavLink to="" className={({isActive}) => {return isActive ? "active-link" : null}} end><p>Dashboard</p></NavLink>
        <NavLink to="income" className={({isActive}) => {return isActive ? "active-link" : null}}><p>Income</p></NavLink>
        <NavLink to="vans" className={({isActive}) => {return isActive ? "active-link" : null}}><p>Vans</p></NavLink>
        <NavLink to="reviews" className={({isActive}) => {return isActive ? "active-link" : null}}><p>Reviews</p></NavLink>
      </nav>
      <main>
        <Outlet />
      </main>
    </div>
  )
}