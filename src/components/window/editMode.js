import React, { useState } from "react"
import EditItem from "./item/editItem"
import { v4 as uuidv4 } from "uuid"
import EditHead from "./head/editHead"

export default function EditMode({
  data,
  isSide,
  handleEditMode,
  handleInputEdit,
  handleAddLine,
  handleRemoveLine,
  handleSetHead,
  handleEditHeader,
  head,
}) {
  // 0 is readOnly 1 is editMode
  const [headEditMode, setheadEditMode] = useState(1)

  const parseData = () =>
    data.map(sValue => (
      <EditItem
        handleInputEdit={handleInputEdit}
        handleRemoveLine={handleRemoveLine}
        id={sValue}
        key={uuidv4()}
        sData={sValue}
      />
    ))

  return (
    <div data-edit={true} key={uuidv4()} className="window-frame">
      <div className="window-frame_X" onClick={() => handleEditMode(0)}>
        שמור
      </div>
      <div className="window-add-line" onClick={() => handleAddLine()}>
        הוסף שורה
      </div>
      {headEditMode ? (
        <EditHead
          head={head}
          handleEditHeader={handleEditHeader}
          setHead={handleSetHead}
        />
      ) : (
        <header>{head}</header>
      )}
      <div data-side={isSide || false} className="window-component">
        <section>{parseData()}</section>
      </div>
    </div>
  )
}
