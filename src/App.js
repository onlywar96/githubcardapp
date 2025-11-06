import { useState } from 'react';
import SearchForm from './components/SearchForm';
import ProfileCard from './components/ProfileCard';
import './index.css';
import RepoList from './components/RepoList.';
import LoginPage from './Loginpage';
import BlogList from './components/Bloglist';
import GithubBlog from './components/Bloglist';

function App() {
  const [user, setUser] = useState(null);
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false); 

  const handleLogin = () => {
    setIsLoggedIn(true)
  }

  const searchUser = async (username) => {
    setLoading(true);
    setError('');
    setUser(null);
    setRepos([]);

    try {
      const userResponse = await fetch(
        `https://api.github.com/users/${username}`
      );
      if (!userResponse.ok) {
        throw new Error('User not found. Please check your Username');
      }
      const userData = await userResponse.json();

      const reposResponse = await fetch(
        `https://api.github.com/users/${username}/repos?sort=updated&per_page=10`
      );
      const reposData = await reposResponse.json();

      setUser(userData);
      setRepos(reposData);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

 
  if (!isLoggedIn) {
    return <LoginPage onLogin={() => setIsLoggedIn(true)} />;
  }

  return (
    <div className="app">
      <header className="header">
        <div className="container">
          <h1 className="title">GitHub Profile Viewer</h1>
          <p className="subtitle">Search and explore GitHub profiles</p>
        </div>
      </header>
      <div className="App">
      {!isLoggedIn ? (
        <LoginPage onLogin={handleLogin} />
      ) : (
        <BlogList articles={GithubBlog} />
      )}
    </div>

      <main className="main">
        <div className="container">
          <SearchForm onSearch={searchUser} loading={loading} />

          {error && (
            <div className="error-message">
              <p>❌ {error}</p>
            </div>
          )}

          {loading && (
            <div className="loading">
              <div className="spinner"></div>
              <p>Loading profile...</p>
            </div>
          )}

          {user && !loading && (
            <div className="results">
              <ProfileCard user={user} />
              <RepoList repos={repos} />
            </div>
          )}
        </div>
      </main>

      <footer className="footer">
        <div className="container">
          <p>
            &copy; 2024 GitHub Profile Viewer. Built with React.js and GitHub API.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
