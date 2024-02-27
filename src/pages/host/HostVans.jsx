import {
  NavLink,
  useLoaderData
} from "react-router-dom";
import { getHostVans } from "../../api";


export async function loader({params}) {
  const hostId = params.hostId
  return getHostVans(hostId)
}

export default function HostVans() { 
  const data = useLoaderData();
  const vans = data.vans;
  
  
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
    <div className="host-vans">
      <h1>Your listed vans</h1>
      <main>
        {mapVans}
      </main>
    </div>    
  )
}