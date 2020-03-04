import React, { useState } from "react"
import "./editHead.scss"

export default function EditHead({ head, setHead, handleEditHeader }) {
  const [localHeadValue, setLocalHead] = useState(head)

  const handleLocalChange = target => {
    const { value } = target
    setLocalHead(value)
  }

  return (
    <div className="editHead">
      <input
        onChange={e => handleLocalChange(e.target)}
        value={localHeadValue}
        type="text"
      />
      <div
        onClick={() => {
          handleEditHeader(localHeadValue)
          setHead(localHeadValue)
        }}
      >
        אישור
      </div>
    </div>
  )
}
