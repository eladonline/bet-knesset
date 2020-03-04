import React from "react"
import Slider from "../window/slider"
import Grid from "../grid/grid"

const keys = {
  topLeft: "topLeft",
  bottomLeft: "bottomLeft",
  center: "center",
  topRight: "topRight",
  bottomRight: "bottomRight",
}

const Home = () => (
  <Grid>
    <div className="index-side">
      <Slider storeKey={keys.topLeft} isSide />
      <Slider storeKey={keys.bottomLeft} isSide />
    </div>
    <div className="index-center">
      <Slider storeKey={keys.center} />
    </div>
    <div className="index-side">
      <Slider storeKey={keys.topRight} isSide />
      <Slider storeKey={keys.bottomRight} isSide />
    </div>
  </Grid>
)

export default Home
