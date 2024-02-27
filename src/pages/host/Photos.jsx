import {
  useOutletContext
} from "react-router-dom";
// import { requireAuth } from "../../utils"

// export function loader() {
//   return requireAuth()
// }

export default function Photos() {
  const {hostVanDetails} = useOutletContext()

  return (
  <div className="photos">
    <img src={hostVanDetails.imageUrl} alt={hostVanDetails.name} />
  </div>    
  )
}