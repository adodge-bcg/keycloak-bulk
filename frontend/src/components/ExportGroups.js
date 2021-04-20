import React from 'react'
import PropTypes from 'prop-types'
import mountAware from '../utils/mountAware'
import GroupList from './GroupList'
import LoadingSpinner from './LoadingSpinner'
import Resource from '../models/Resource';
import ErrorAlert from './ErrorAlert';

const ExportGroups = mountAware(({ groups }) => (
  <div>
    <br />
    <h2>Export Groups</h2>
    <p>Export groups from the Keycloak.</p>
    {groups.error ? <ErrorAlert error={groups.error} /> : null}
    {groups.value ? <GroupList groups={groups.value} /> : null}
    {groups.isLoading ? <LoadingSpinner /> : null}
  </div>
))

ExportGroups.propTypes = {
  groups: PropTypes.instanceOf(Resource).isRequired,
}

export default ExportGroups
