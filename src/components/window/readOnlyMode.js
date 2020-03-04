import React from "react"
import Item from "./item/item"
import { v4 as uuidv4 } from "uuid"

const ReadOnlyMode = ({ data, isSide, handleEditMode, head }) => {
  const Aduration = 20
  const parseData = () =>
    data.map(sName => <Item key={uuidv4()} sData={sName} />)

  return (
    <div key={uuidv4()} className="window-frame">
      <header>{head}</header>
      <div data-side={isSide || false} className="window-component">
        <div
          onClick={() => handleEditMode(1)}
          className="window-frame__edit-overlay"
        >
          ערוך
        </div>
        <section
          style={{ animationDuration: `${Aduration}s` }}
          className="animated-items-container"
        >
          {parseData()}
        </section>
      </div>
    </div>
  )
}

export default ReadOnlyMode
