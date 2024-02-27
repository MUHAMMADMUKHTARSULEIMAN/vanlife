import { NavLink } from "react-router-dom"
export default function Home() {
  return (
    <main className="home">
      <div className="home-header">
        <h1>
          You got the travel plans, we got the travel vans.
        </h1>
      </div>
    
      <div className="home-p">
        <p>
          Add adventure to your life by joining the #vanlife movement. Rent the perfect van to make your perfect road trip.
        </p>
      </div>
      <NavLink to="/vans"><button className="find-van">Find your van</button></NavLink>
    </main>
  )
}