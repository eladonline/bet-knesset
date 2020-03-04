import React from "react"
import "./item.scss"

const WindowItem = ({sData}) => {
  return (
    <div  className="window-component__item">
      <div>{sData}</div>
    </div>
  )
}

export default WindowItem
