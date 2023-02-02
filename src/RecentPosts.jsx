import React, { useState, useEffect } from "react";
import axios from "axios";
const RecentPosts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://techcrunch.com/wp-json/wp/v2/posts?per_page=20&context=embed"
        );
        setPosts(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="recent-posts">
      <h2 className="text-yellow-100">Recent Posts</h2>
      <div>
        {posts.map((post) => (
          <div className="post-card" key={post.id}>
            {" "}
            <p className="date text-cyan-600">{post.date}</p>
            <h1>{post.title.rendered}</h1>
            {post.excerpt.rendered}
            <p>author: {post.author}</p>
            <p>
              <a href={post.link}>Source</a>
            </p>
            <img src={post.jetpack_featured_media_url} alt="" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentPosts;
