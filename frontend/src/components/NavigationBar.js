import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const NavigationBar = ({ pathname, isAuthenticated }) => (
  <nav className="navbar navbar-expand navbar-dark bg-dark">
    <Link className="navbar-brand" to="/">
      Keycloak Bulk
    </Link>
    {isAuthenticated ? (
      <ul className="navbar-nav mr-auto">
        <li className={`nav-item ${pathname === '/groups/import' ? 'active' : ''}`}>
          <Link className="nav-link" to="/groups/import">Import Groups</Link>
        </li>
        <li className={`nav-item ${pathname === '/groups/export' ? 'active' : ''}`}>
          <Link className="nav-link" to="/groups/export">Export Groups</Link>
        </li>
        <li className={`nav-item ${pathname === '/users/import' ? 'active' : ''}`}>
          <Link className="nav-link" to="/users/import">Import Users</Link>
        </li>
        <li className={`nav-item ${pathname === '/users/export' ? 'active' : ''}`}>
          <Link className="nav-link" to="/users/export">Export Users</Link>
        </li>
      </ul>
    ) : null}
  </nav>
)

NavigationBar.propTypes = {
  pathname: PropTypes.string.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
}

export default NavigationBar
