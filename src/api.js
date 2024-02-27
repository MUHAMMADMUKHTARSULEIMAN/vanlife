export async function getVans(id) {
  const url = id ? `/api/vans/${id}` : "/api/vans"
  const res = await fetch(url);
  if(!res.ok) {
    throw {
      message: id ? "Failed to fetch van" : "Failed to fetch vans",
      statusText: res.statusText,
      status: res.status
    }
  }
  const data = await res.json();
  return data;
}

export async function getHostVans(hostId, id) {
  const url = id ? `/api/host/${hostId}/vans/${id}` : `/api/host/${hostId}/vans`
  const res = await fetch(url);
  if(!res.ok) {
    throw {
      message: id ? "Failed to fetch van" : "Failed to fetch vans",
      statusText: res.statusText,
      status: res.status
    }
  }
  const data = await res.json();
  return data;
}

export async function loginUser(creds) {
  const res = await fetch("/api/login", { method: "post", body: JSON.stringify(creds) })
  const data = await res.json()
  if (!res.ok) {
    throw {
      message: data.message,
      statusText: res.statusText,
      status: res.status
    }
  }
  return data
}