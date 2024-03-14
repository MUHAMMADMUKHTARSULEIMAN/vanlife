// import {requireAuth} from "../../utils"

// export async function loader({request}) {
//     return await requireAuth(request);
// }

export default function Income() {
  return (
    <div className="income-container">
      <img src="/images/income.png" alt="income"/>
    </div>
  )
}