import React from 'react'

const MountAware = renderer => class extends React.Component {
  render() {
    return renderer(this.props);
  }
  componentDidMount() {
    this.props.onMount();
  }
}

export default MountAware
