export default function RepoList({ repos }) {
  if (!repos || repos.length === 0) {
    return (
      <div className="repos-section">
        <h3>No repositories found</h3>
      </div>
    )
  }

  return (
    <div className="repos-section">
      <h3 className="repos-title">Latest Repositories</h3>
      <div className="repos-grid">
        {repos.map((repo) => (
          <RepoCard key={repo.id} repo={repo} />
        ))}
      </div>
    </div>
  )
}

function RepoCard({ repo }) {
  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    })
  }

  return (
    <div className="repo-card">
      <div className="repo-header">
        <h4 className="repo-name">
          <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
            {repo.name}
          </a>
        </h4>
        {repo.private && <span className="private-badge">Private</span>}
      </div>

      {repo.description && (
        <p className="repo-description">{repo.description}</p>
      )}

      <div className="repo-stats">
        {repo.language && (
          <span className="repo-language">
            <span
              className="language-dot"
              style={{ backgroundColor: getLanguageColor(repo.language) }}
            ></span>
            {repo.language}
          </span>
        )}
        <span className="repo-stars">⭐ {repo.stargazers_count}</span>
        <span className="repo-forks">🍴 {repo.forks_count}</span>
      </div>

      <div className="repo-footer">
        <span className="repo-updated">
          Updated {formatDate(repo.updated_at)}
        </span>
      </div>
    </div>
  )
}

function getLanguageColor(language) {
  const colors = {
    JavaScript: '#f1e05a',
    TypeScript: '#2b7489',
    Python: '#3572A5',
    Java: '#b07219',
    HTML: '#e34c26',
    CSS: '#563d7c',
    PHP: '#4F5D95',
    Ruby: '#701516',
    Go: '#00ADD8',
    Rust: '#dea584',
    Swift: '#ffac45',
    Kotlin: '#F18E33',
    Dart: '#00B4AB',
  }
  return colors[language] || '#586069'
}
