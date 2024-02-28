import {
  Await,
  NavLink,
  defer,
  useLoaderData
} from "react-router-dom";
import { getHostVans } from "../../api";
import { Suspense } from "react";

export async function loader({params}) {
  const hostId = params.hostId
  return defer({vans: getHostVans(hostId)}) 
}

export default function HostVans() { 
  const data = useLoaderData();

  return (
    <div className="host-vans">
      <h1>Your listed vans</h1>
      <Suspense fallback={<h1>Loading...</h1>}>
        <Await resolve={data.vans}>
          {vans => {
            const mapVans = vans.map(van => {
              return (
                <NavLink to={van.id} key={van.id} className="host-van-anchor">
                  <div className="host-van">
                    <div>
                      <img className="host-van-image" src={van.imageUrl} alt={van.name} />
                    </div>
                    <div>
                      <h3>{van.name}<br/><span className="same-line-cost-span">{van.price}/day</span></h3>
                    </div>
                  </div>     
                </NavLink>
              )
            });
            return (
              <main>
                {mapVans}
              </main>
            )
          }}
        </Await>
      </Suspense>
    </div>    
  )
}