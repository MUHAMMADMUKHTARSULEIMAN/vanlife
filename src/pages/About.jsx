import { NavLink } from "react-router-dom"
export default function About() {
  return (
    <div className="about">
      <div className="about-image-container">
        <img className="night-van" src="./images/image 54.png" alt="Night in van"/>
      </div>
      <div className="about-subcontainer">
        <div>
          <h1>
            Don&apos;t squeeze in a sedan when you could relax in a van.
          </h1>
          <p>
            Our mission is to enliven your road trip with the perfect travel van rental. Our vans are recertified before each trip to ensure your travel plans can go off without a hitch.<br/>(Hitch costs extra 😉)
          </p>
          <br/>
          <p>
            Our team is full of vanlife enthusiasts who know firsthand the magic of touring the world on 4 wheels.
          </p>
        </div>
        <div className="about-bottom-container">
          <h2>
            Your destination is waiting. <br/> Your van is ready.
          </h2>
          <NavLink to="/vans"><button className="about-button">Explore our vans</button></NavLink>
        </div>
      </div>
    </div>
  )
}