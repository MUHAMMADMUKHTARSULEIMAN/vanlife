import {
  NavLink,
  useLocation,
  useLoaderData,
  Await,
  defer
} from "react-router-dom";
import { getVan } from "../../api";
import { Suspense } from "react";

export async function loader({params}) {
  const id = params.id
  return defer({van: getVan(id)}) 
}

export default function VanDetails() {
  const data = useLoaderData();
  // const vanDetails = data.van

  const location = useLocation();
  // console.log(location)
  const search = location.state?.search
  // console.log(search)



  return (
  <div className="van-details-container">
    <Suspense fallback={<h1>Loading...</h1>}>
      <Await resolve={data.van}>
        {vanDetails => {
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
            <>
              <NavLink to={`../vans/?${search}`}>
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
            </>
          )
        }}
      </Await>
    </Suspense>
  </div>    
  )
}