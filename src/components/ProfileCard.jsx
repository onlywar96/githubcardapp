export default function ProfileCard({ user }) {
  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    })
  }

  return (
    <div className="profile-card">
      <div className="profile-header">
        <img
          src={user.avatar_url || '/placeholder.svg'}
          alt={`${user.login}'s avatar`}
          className="avatar"
        />
        <div className="profile-info">
          <h2 className="profile-name">{user.name || user.login}</h2>
          <p className="profile-username">@{user.login}</p>
          {user.bio && <p className="profile-bio">{user.bio}</p>}
        </div>
      </div>

      <div className="profile-stats">
        <div className="stat">
          <span className="stat-number">{user.public_repos}</span>
          <span className="stat-label">Repositories</span>
        </div>
        <div className="stat">
          <span className="stat-number">{user.followers}</span>
          <span className="stat-label">Followers</span>
        </div>
        <div className="stat">
          <span className="stat-number">{user.following}</span>
          <span className="stat-label">Following</span>
        </div>
      </div>

      <div className="profile-details">
        {user.company && (
          <div className="detail">
            <span className="detail-icon">🏢</span>
            <span>{user.company}</span>
          </div>
        )}
        {user.location && (
          <div className="detail">
            <span className="detail-icon">📍</span>
            <span>{user.location}</span>
          </div>
        )}
        {user.email && (
          <div className="detail">
            <span className="detail-icon">📧</span>
            <span>{user.email}</span>
          </div>
        )}
        {user.blog && (
          <div className="detail">
            <span className="detail-icon">🔗</span>
            <a href={user.blog} target="_blank" rel="noopener noreferrer">
              {user.blog}
            </a>
          </div>
        )}
        <div className="detail">
          <span className="detail-icon">📅</span>
          <span>Joined {formatDate(user.created_at)}</span>
        </div>
      </div>

      <div className="profile-actions">
        <a
          href={user.html_url}
          target="_blank"
          rel="noopener noreferrer"
          className="github-link">
          View on GitHub
        </a>
      </div>
    </div>
  )
}
