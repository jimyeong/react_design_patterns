import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import PostAuthor from "./PostAuthor";
import TimeAgo from "./TimeAgo";
import ReactionButtons from "./ReactionButtons";

export const PostsList = () => {
  const posts = useSelector((state) => state.posts);

  const orderedPosts = posts
    .slice()
    .sort((a, b) => b.date.localeCompare(a.date));

  const renderPosts = orderedPosts.map((post) => (
    <article className="post-excerpt" key={post.id}>
      <h3>{post.title}</h3>
      <div>
        <PostAuthor userId={post.user} />
        <TimeAgo timestamp={post.date} />
      </div>
      <p className="post-content">{post.content.substring(0, 100)}</p>
      <Link to={`/editPost/${post.id}`} className="button muted-button">
        Edit Post
      </Link>
      <br />
      <Link to={`/posts/${post.id}`} className="button muted-button">
        View Post
      </Link>
      <div>
        <PostAuthor userId={post.userId} />
      </div>
      <ReactionButtons post={post} />
    </article>
  ));

  return (
    <section className="posts-list">
      <h2>Posts</h2>
      {renderPosts}
    </section>
  );
};
