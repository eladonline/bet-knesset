import React, { useState, useEffect } from "react"
import mock from "./mock.json"
import "./slide.scss"
import ReadOnlyMode from "./readOnlyMode"
import EditMode from "./editMode"

const Slider = ({ data, isSide, storeKey }) => {
  // 0 is readOnly, 1 is editingMode
  const [mode, setMode] = useState(0)
  const [stateData, setStateData] = useState(data.data)
  const [head, setHead] = useState(data.head)

  useEffect(() => {
    const dataToStore = { head, data: stateData }
  }, [head, stateData])

  const handleSetHead = value => {
    setHead(value)
  }
  const handleInputEdit = (value, id) => {
    const index = stateData.findIndex(sName => sName === id)
    const mockState = [...stateData]
    mockState[index] = value
    setStateData(mockState)
  }

  const handleEditMode = n => {
    setMode(n)
  }

  const handleAddLine = () => {
    const mockState = [...stateData]
    mockState.push("שדה חדש")
    setStateData(mockState)
  }
  const handleRemoveLine = id => {
    const index = stateData.findIndex(sName => sName === id)
    const mockState = [...stateData]
    mockState.splice(index, 1)
    setStateData(mockState)
  }
  const handleEditHeader = () => {}
  const props = {
    storeKey,
    handleEditMode,
    isSide,
    data: stateData,
    head,
    handleInputEdit,
    handleAddLine,
    handleRemoveLine,
    handleEditHeader,
    handleSetHead,
  }

  return mode ? <EditMode {...props} /> : <ReadOnlyMode {...props} />
}

export default Slider

Slider.defaultProps = {
  data: mock,
}
