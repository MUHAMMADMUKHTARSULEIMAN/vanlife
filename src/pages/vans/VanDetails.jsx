import {
  NavLink,
  useLocation,
  useLoaderData
} from "react-router-dom";
import { getVans } from "../../api";

export async function loader({params}) {
  const id = params.id
  return getVans(id)
}

export default function VanDetails() {
  const data = useLoaderData();
  const vanDetails = data.van

  const location = useLocation();
  console.log(location)
  const search = location.state?.search

  let styles = ""
    if(vanDetails.type === "simple") {
      styles = {backgroundColor: "#E17654"}
    }
    else if(vanDetails.type === "rugged") {
      styles = {backgroundColor: "#115E59"}
    }
    else {
      styles = {backgroundColor: "#161616"}
    }

  return (
  <div className="van-details-container">
    <NavLink
    to={`../vans/${search}`}
    >
      <div className="back-to-all-vans-container">
        <span>&larr; </span>
        <span className="back-to-all-vans">Back to {search ? vanDetails.type : "all"} vans</span>
      </div>
    </NavLink>
    <img className="van-details-image" src={vanDetails.imageUrl} alt={vanDetails.name} />
    <br />
    <br />
    <br />
    <div className={`van-type`} style={styles}>
      <h4>{vanDetails.type}</h4>
    </div>
    <h2>{vanDetails.name}</h2>
    <h3>${vanDetails.price}<span className="same-line-cost-span">/day</span></h3>
    <p className="van-details-desc">{vanDetails.description}</p>
    <br />
    <button className="find-van">Rent this van</button>
  </div>    
  )
}