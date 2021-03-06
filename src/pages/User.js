import React, { useContext } from "react"
import { GithubContext } from "../context/GithubContext"
import "./styles.css"

const User = () => {
  const { user } = useContext(GithubContext)

  return (
    <div className="user">
      <div className="user-container">
        <div className="user-container-img">
          <img src={user.avatar_url} alt="user" />
        </div>
        <span>
          {user.name && <h1>{user.name}</h1>}
          {user.login && (
            <h2>
              <a href={user.html_url} target="_blank" rel="noopener noreferrer">
                @{user.login}
              </a>
            </h2>
          )}
        </span>
        <div className="user-container-info">
          {user.company && (
            <span className="info__item">
              <p>
                <i class="fas fa-briefcase fa-sm"></i>
                {user.company}
              </p>
            </span>
          )}
          {user.location && (
            <span className="info__item">
              <p>
                <i className="fas fa-map-marker-alt fa-sm"> </i>
                {user.location}
              </p>
            </span>
          )}
          {user.blog && (
            <a href={`https://${user.blog}`} target="_blank" rel="noopener noreferrer">
              <i className="fas fa-link fa-sm"></i>
              {user.blog}
            </a>
          )}
        </div>
      </div>
    </div>
  )
}

export default User
