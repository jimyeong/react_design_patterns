import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { useMatch } from "react-router-dom";
import PostAuthor from "./PostAuthor";
import ReactionButtons from "./ReactionButtons";

function SinglePostPage() {
  const match = useMatch("/posts/:postId");
  const { postId } = match.params;
  const post = useSelector((state) =>
    state.posts.find((post) => post.id == postId)
  );

  if (!post) {
    return (
      <section>
        <h2>Post not found!</h2>
      </section>
    );
  }

  return (
    <section>
      <article className="post">
        <h2>{post.title}</h2>
        <PostAuthor userId={post.userId} />
        <p className="post-content">{post.content}</p>
        <ReactionButtons post={post} />
      </article>
    </section>
  );
}

export default SinglePostPage;
