import React from 'react'
import PropTypes from 'prop-types'
import LoadingSpinner from './LoadingSpinner';
import Resource from '../models/Resource';
import ErrorAlert from './ErrorAlert';

const Submit = ({value}) => (
  <button type="submit" className="btn btn-primary">
    {value}
  </button>
)

const ImportUsersApply = ({ resource, onSubmit, value }) => (
  <form onSubmit={e => { onSubmit(); e.preventDefault() }}>
    {resource.isLoading === true ? <LoadingSpinner /> : <Submit value={value} />}
    {resource.error ? <ErrorAlert error={resource.error} /> : null}
  </form>
)

ImportUsersApply.propTypes = {
  resource: PropTypes.instanceOf(Resource).isRequired,
  onSubmit: PropTypes.func.isRequired,
}

export default ImportUsersApply
