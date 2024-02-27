import {redirect} from "react-router-dom"

export async function requireAuth(request) {
  const pathname = new URL(request.url).pathname
  const isLoggedIn = false
  if(!isLoggedIn) {
    return redirect(`/login?message=You must first sign in&redirect=${pathname}`)
  }
}