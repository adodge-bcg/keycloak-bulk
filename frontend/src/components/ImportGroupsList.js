import React from 'react'
import PropTypes from 'prop-types'
import ImportGroup from '../models/ImportGroup'
import Resource from '../models/Resource';
import LoadingSpinner from './LoadingSpinner';
import Group from '../models/Group';
import ErrorAlert from './ErrorAlert';

const Badge = ({ type, children }) =>
  (<span className={`badge badge-${type} text-uppercase`}>{children}</span>)

const ResourceColumn = ({ resource }) => (
  <div>
    {resource.isLoading ? <LoadingSpinner /> : null}
    {resource.value ? (
      <div>
        <Badge type="success">Created</Badge>
      </div>
    ) : null}
    {resource.error ? <ErrorAlert error={resource.error} /> : null}
  </div>
)

const GroupRow = ({ index, group, resource }) => (
  <tr>
    <td>{index+1}</td>
    <td>{group.name}</td>
    <td>
      {resource ?
        <ResourceColumn resource={resource} /> :
        <Badge type="secondary">Queued</Badge>}
    </td>
  </tr>
)

GroupRow.propTypes = {
  group: PropTypes.instanceOf(Group).isRequired,
  resource: PropTypes.instanceOf(Resource),
}

const ImportGroupsList = ({ importGroups }) => (
  <table className="table">
    <thead>
      <tr>
        <th>#</th>
        <th>Name</th>
      </tr>
    </thead>
    <tbody>
      {importGroups.map((importGroup, index) => (<GroupRow key={index} index={index} {...importGroup.toJSON()} />))}
    </tbody>
  </table>
)

ImportGroupsList.propTypes = {
  importGroups: PropTypes.arrayOf(PropTypes.instanceOf(ImportGroup).isRequired).isRequired,
}

export default ImportGroupsList
