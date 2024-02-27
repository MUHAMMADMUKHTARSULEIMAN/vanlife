import {
  Navigate,
  Outlet,
  useLoaderData
} from "react-router-dom";

export async function loader({request}) {
  return new URL(request.url).pathname
}

export default function AuthRequired() {
  const pathname = useLoaderData()
  const userLoggedIn = sessionStorage.getItem("logged-in");
  if(!userLoggedIn) {
    return <Navigate to={`login?message=You must first sign in&redirectTo=${pathname}`}/>
  }
  return <Outlet />
}