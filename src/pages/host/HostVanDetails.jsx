import {
  Await,
  NavLink,
  Outlet,
  defer,
  useLoaderData
} from "react-router-dom";
import {getHostVans} from "../../api"
import { Suspense } from "react";

export async function loader({params}) {
  const hostId = params.hostId
  const id = params.id
  return defer({van: getHostVans(hostId, id)}) 
}

export default function HostVanDetails() {
  const data = useLoaderData();

  return (
    <div className="host-van-details-container">
      <Suspense fallback={<h1>Loading...</h1>}>
        <Await resolve={data.van}>
          {hostVanDetails => {
            let styles = ""
            if(hostVanDetails.type === "simple") {
              styles = {backgroundColor: "#E17654"}
            }
            else if(hostVanDetails.type === "rugged") {
              styles = {backgroundColor: "#115E59"}
            }
            else {
              styles = {backgroundColor: "#161616"}
            }
            return (
              <>
                <NavLink to="../vans">
                  <div className="back-to-all-vans-container">
                    <span>&larr; </span>
                    <span className="back-to-all-vans">Back to all vans</span>
                  </div>
                </NavLink>
                <div className="sub-van-details-container">
                  <div className="host-van-details">
                    <img className="host-van-details-image" src={hostVanDetails.imageUrl} alt={hostVanDetails.name}/>
                    <div className="sub-host-van-details">
                      <div className="van-type" style={styles}>
                        <h4>{hostVanDetails.type}</h4>
                      </div>
                      <h2>{hostVanDetails.name}</h2>
                      <h3>${hostVanDetails.price}<span className="same-line-cost-span">/day</span></h3>          
                    </div>
                  </div>
                  <nav className="host-van-details-nav">
                    <NavLink to="" className={({isActive}) => {return isActive ? "active-link" : null}} end>
                      <p>Details</p>
                    </NavLink>

                    <NavLink to="pricing" className={({isActive}) => {return isActive ? "active-link" : null}}>
                    <p>Pricing</p>
                    </NavLink>

                    <NavLink to="photos" className={({isActive}) => {return isActive ? "active-link" : null}}>
                    <p>Photos</p>
                    </NavLink>
                  </nav>
                  <div>
                    <Outlet context={{hostVanDetails}}/>
                  </div>
                </div>
              </>
            )
          }}
        </Await>
      </Suspense>
    </div>
  )
}