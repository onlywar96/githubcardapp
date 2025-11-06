import React from 'react';


const GithubBlog = () => {
  const blogs = [
    {
      title: 'Getting Started with GitHub',
      description: 'An introduction to GitHub for beginners and how to manage repositories effectively.',
      author: 'DevBlog',
      date: 'July 11, 2025',
      link: 'https://docs.github.com/en/get-started',
    },
    {
      title: 'Get some Top Open Source Projects to Contribute in 2025',
      description: 'Explore trending projects and how you can start contributing.',
      author: 'OpenSourceDaily',
      date: 'July 28, 2025',
      link: 'https://opensource.guide/how-to-contribute/',
    },
    {
      title: ' USE IT TO MASTER IT. Master Git and GitHub with Real Examples.',
      description: 'Real-world scenarios showing how GitHub is used in team environments.',
      author: 'CodeMaster',
      date: 'November 09, 2024',
      link:'https://learngitbranching.js.org/',
    },
  ];

  return (
    <div className="blogselect">
      <h2>📝 GitHub Blogs & Reviews</h2>
      <div className="blog-list">
        {blogs.map((blog, index) => (
          <div className="card" key={index}>
            <h3>{blog.title}</h3>
            <p>{blog.description}</p>
            <p className="meta">
              <span>{blog.author}</span> | <span>{blog.date}</span>
            </p>
            <a href={blog.link} target="_blank" rel="noopener noreferrer">
              <button class="button">Read more →</button>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GithubBlog;

