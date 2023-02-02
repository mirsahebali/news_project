import React, { useState, useEffect } from 'react';

const Articles = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch('https://techcrunch.com/wp-json/wp/v2/posts?per_page=20&context=embed');
      const data = await response.json();
      setPosts(data);
    }
    fetchData();
  }, []);

  return (
    <div>
      <h2>Recent Posts</h2>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default Articles;
