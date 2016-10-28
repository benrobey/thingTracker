import React, { PropTypes } from 'react'

const User = ({ user }) => {
  const { login, avatarUrl, name } = user

  return (
    <div className="User">
        <img src={avatarUrl} alt={login} width="72" height="72" />
        <h3>
          {login} {name && <span>({name})</span>}
        </h3>
    </div>
  )
}

User.propTypes = {
  user: PropTypes.shape({
    login: PropTypes.string.isRequired,
    avatarUrl: PropTypes.string.isRequired,
    name: PropTypes.string
  }).isRequired
}

export default User
