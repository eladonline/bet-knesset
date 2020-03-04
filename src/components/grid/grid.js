import React from "react"
import "./grid.scss"

const Grid = ({ children }) => {
  const [left, center, right] = children
  return (
    <div className="grid-global">
      {left}
      {center}
      {right}
    </div>
  )
}
export default Grid
