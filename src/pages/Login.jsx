import { useState } from "react";
import {
  Link,
  useLoaderData,
  useNavigate,
  // redirect,
  // useActionData
} from "react-router-dom";
import { loginUser } from "../api";

export async function loader({request}) {
  const data = new URL(request.url).searchParams
  return data
}

// export async function action({request, params}) {
//   const formData = await request.formData()
//   const email = formData.get("email")
//   const password = formData.get("password")
//   const hostId = params.hostId
//   const pathname = new URL(request.url).searchParams.get("redirectTo") || `/host/${hostId}`
//   await loginUser({email, password})
//   sessionStorage.setItem("logged-in", true)
//   return redirect(pathname)
// }

export default function Login() {
  const data = useLoaderData()
  const message = data.get("message")
  const pathname = data.get("redirectTo") || `/host/${123}`
  const navigate = useNavigate()
  // const errorMessage = useActionData()
  const [form, setForm] = useState({
    email:"",
    password: ""
  })

  const handleChange = (e) => {
    const {name, value} = e.target;
    setForm(prevForm => {
      return ({
        ...prevForm,
        [name]: value
      });
    })
  }

  const [status, setStatus] =useState("idle");
  const [error, setError] = useState({})
  const handleSubmit = async (e) => {
    await setStatus("submitting");
    await e.preventDefault();
    await setError({})
    loginUser(form)
    .then(() => {
      sessionStorage.setItem("logged-in", true);
      navigate(pathname, {replace: true})
    })
    .catch(err => setError(err))
    .finally(() => setStatus("idle"))
  }

  let styles = {}
  if(status === "submitting") {
    styles = {backgroundColor: "#E8D8CC"}
  }

  return (
    <div className="login">
      <h1>Sign into your account</h1>
      {message && <h2 style={{color: "#FF0000"}}>{message}</h2>}
      {error && <h2 style={{color: "#FF0000"}}>{error.message}</h2>}
      <form onSubmit={handleSubmit}>
        <input
        type="email"
        name="email"
        id="email"
        value={form.email}
        onChange={handleChange}
        placeholder="Email address"
        />
        <input
        type="password"
        name="password"
        id="password"
        value={form.password}
        onChange={handleChange}
        placeholder="Password"
        />
        <button style={styles} className="find-van">{status === "submitting" ? "Signing in..." : "Sign in"}</button>
      </form>
      <br/>
      <p>
        Don&apos;t have an account? <Link className="create-account-link">Create one now</Link>
      </p>
      <br/>
    </div>
  )
}