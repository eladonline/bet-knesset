import React, { useState, useEffect } from "react"
import "./item.scss"

const EditItem = ({ sData, handleInputEdit, handleRemoveLine, id }) => {
  const [value, setValue] = useState(sData)
  const [needApprove, setNeedApprove] = useState(false)

  const handleApprove = () => {
    handleInputEdit(value, id)
    setNeedApprove(false)
  }

  useEffect(() => {
    if (value !== sData) setNeedApprove(true)
  }, [value])

  const handleChange = e => {
    setValue(e.target.value)
  }
  return (
    <div className="window-component__item-edit">
      <div className="window-component__item-edit__input-container">
        <input onChange={handleChange} value={value} type="text" />
        <div
          onClick={() => handleRemoveLine(id)}
          className="window-component__item-edit__input-container-remove"
        >
          הסר
        </div>
      </div>
      {needApprove && (
        <div onClick={handleApprove} className="window-component__item-edit__v">
          אישור
        </div>
      )}
    </div>
  )
}

export default EditItem
