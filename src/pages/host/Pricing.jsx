import {
  useOutletContext
} from "react-router-dom";
// import { requireAuth } from "../../utils"

// export function loader() {
//   return requireAuth()
// }

export default function Pricing() {
  const {hostVanDetails} = useOutletContext()

  return (
  <div className="pricing">
    <h3>${hostVanDetails.price}.00</h3>
    <p>/day</p>
  </div>    
  )
}