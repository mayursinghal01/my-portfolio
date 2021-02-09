import React from "react"
import { Link } from "gatsby"

const data = [
  {
    id: 1,
    text: "home",
    url: "#",
  },
  {
    id: 2,
    text: "about",
    url: "#about",
  },
  {
    id: 3,
    text: "projects",
    url: "#project",
  },
  {
    id: 4,
    text: "contact",
    url: "#contact",
  },
]

export default ({ styleClass , toggleSidebar}) => {
  return (
    <ul className={`${styleClass ? styleClass : ""}`}>
      {data.map(link => (
          <li key={link.id} onClick={toggleSidebar}>
            <Link to={link.url}>{link.text}</Link>
          </li>
        )
      )}
    </ul>
  )
}