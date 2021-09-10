import React from 'react'
import PropTypes from 'prop-types'
import ImportUsersInput from './ImportUsersInput'
import ImportGroupsList from './ImportGroupsList'
import ImportUsersApply from './ImportUsersApply'
import Resource from '../models/Resource';

const ImportGroups = ({ text, importGroups, statuses, onTextChange, onSubmit, onDelete }) => (
  <div>
    <br />
    <h2>Import Groups</h2>
    <p>Import groups into the Keycloak.</p>

    <h3>Groups</h3>
    <p>
      Enter groups in CSV (comma) or TSV (tab).
      <br />
      Format: <code>Group Name, Group Name...</code>
    </p>
    <ImportUsersInput value={text} onChange={onTextChange} />

    <h3>Preview</h3>
    <p>
      Following groups will be imported:
    </p>
    <ImportGroupsList importGroups={importGroups.value} />

    <div className="card">
      <div className="card-body">
        <h5 className="card-title">Confirmation</h5>
        <p className="card-text">Click the button to import {importGroups.value.length} groups to the Keycloak.</p>
        <div className="btn-group d-flex justify-content-between" role="group" aria-label="Import and Delete Buttons">
          <ImportUsersApply resource={importGroups} onSubmit={e => onSubmit(importGroups.value)} value="Import Groups" />
          <ImportUsersApply resource={importGroups} onSubmit={e => onDelete(importGroups.value)} value="Delete Groups" />
        </div>
      </div>
    </div>
  </div>
)

ImportGroups.propTypes = {
  text: PropTypes.string.isRequired,
  importGroups: PropTypes.instanceOf(Resource).isRequired,
  onTextChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
}

export default ImportGroups
