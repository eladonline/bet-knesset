import React from "react"
import PropTypes from "prop-types"

import "../../style/core.scss"

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <main className="main">{children}</main>
      <footer>© {new Date().getFullYear()} Some footer </footer>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
