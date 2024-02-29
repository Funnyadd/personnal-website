import PropTypes from "prop-types"
import React from "react"
import "./layout.css"

const Layout = ({ children }) => {
    return <main>{children}</main>
}

Layout.propTypes = {
    children: PropTypes.node.isRequired,
}

export default Layout
