import React, { PropTypes } from 'react'

const Repo = ({ repo, owner }) => {
  const { login } = owner
  const { name, description } = repo

  return (
      <View></View>
  )
}

Repo.propTypes = {
  repo: PropTypes.shape({
    name: PropTypes.string.isRequired,
    description: PropTypes.string
  }).isRequired,
  owner: PropTypes.shape({
    login: PropTypes.string.isRequired
  }).isRequired
}

export default Repo
