// import {requireAuth} from "../../utils"

// export async function loader({request}) {
//     return await requireAuth(request);
// }

export default function Dashboard() {
  return (
    <div className="dashboard-container">
      <img src="/images/dashboard.png" alt="dashboard"/>
    </div>
  )
}