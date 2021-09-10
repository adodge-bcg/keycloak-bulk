import React from 'react'
import PropTypes from 'prop-types'
import Group from '../models/Group'

const GroupRow = ({ id, name }) => (
  <tr>
    <td>{id}</td>
    <td>{name}</td>
  </tr>
)

const GroupList = ({ groups }) => (
  <table className="table">
    <thead>
      <tr>
        <th>ID</th>
        <th>Name</th>
      </tr>
    </thead>
    <tbody>
      {groups.map(group => (<GroupRow key={group.id} {...group.toJS() } />))}
    </tbody>
  </table>
)

GroupList.propTypes = {
  groups: PropTypes.arrayOf(PropTypes.instanceOf(Group).isRequired).isRequired,
}

export default GroupList
