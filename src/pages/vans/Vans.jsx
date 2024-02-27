import {
  NavLink,
  useSearchParams,
  useLoaderData
} from "react-router-dom"
import { getVans } from "../../api"

export async function loader() {
  return getVans()
}

export default function Vans() {
  const data = useLoaderData()
  const vans = data.vans

  const [searchParams] = useSearchParams();
  const typeFilter = searchParams.get("type")
  
  const filterVans = vans.filter(van => typeFilter === null ? van : van.type === typeFilter ? van : null)

  const mapVans = filterVans.map(van => {
    let styles = ""
    if(van.type === "simple") {
      styles = {backgroundColor: "#E17654"}
    }
    else if(van.type === "rugged") {
      styles = {backgroundColor: "#115E59"}
    }
    else {
      styles = {backgroundColor: "#161616"}
    }
    return (
      <div className="van" key={van.id}>
        <NavLink to={van.id} state={{search: searchParams.toString()}}>
          <img className="van-image" src={van.imageUrl} alt={van.name} />
          <div className="van-details">
            <h3>{van.name}</h3>
            <div className="van-cost">
              <h3>${van.price}<br/><span className="new-line-cost-span">/day</span></h3>
            </div>
          </div>
          <div className={`van-type`} style={styles}>
            <h4>{van.type}</h4>
          </div>
        </NavLink>
        
      </div>
    )
  })

  const searchParamsHelper = (key, value) => {
    const sp = new URLSearchParams(searchParams)
    if(value === null) {
      sp.delete(key)
    }
    else {
      sp.set(key, value)
    }
    return `?${sp.toString()}`
  }

  return (
    <div className="vans-page">
      <h1>Explore our van options</h1>
      <div className="filter-nav">
        <NavLink to={searchParamsHelper("type", "simple")} className={() => {return typeFilter === "simple" ? "filter-nav-active-link simple" : "filter-nav-active-link simple-hover"}}>
          <p>Simple</p>
        </NavLink>
        <NavLink to={searchParamsHelper("type", "rugged")} className={() => {return typeFilter === "rugged" ? "filter-nav-active-link rugged" : "filter-nav-active-link rugged-hover"}}>
          <p>Rugged</p>
        </NavLink>
        <NavLink to={searchParamsHelper("type", "luxury")} className={() => {return typeFilter === "luxury" ? "filter-nav-active-link luxury" : "filter-nav-active-link luxury-hover"}}>
          <p>Luxury</p>
        </NavLink>
        {typeFilter !== null
          ? <NavLink to={searchParamsHelper("type", null)}><p className="clear-filters">Clear filters</p></NavLink>
          : null
        }
      </div>
      <div className="vans-container">
          {mapVans}
      </div>
    </div>
  )
}