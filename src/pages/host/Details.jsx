import {
  useOutletContext
} from "react-router-dom";
// import { requireAuth } from "../../utils"

// export function loader() {
//   return requireAuth()
// }

export default function Details() {
  const {hostVanDetails} = useOutletContext()

  return (
  <div className="details">
    <p><span >Name: </span>{hostVanDetails.name}</p>
    <p className="details-type"><span >Category: </span>{hostVanDetails.type}</p>
    <p><span >Description: </span>{hostVanDetails.description}</p>
    <p><span >Visibility: </span>{hostVanDetails.visibility}</p>
  </div>    
  )
}