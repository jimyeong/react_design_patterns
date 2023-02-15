import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import PostAuthor from "./PostAuthor";
import TimeAgo from "./TimeAgo";
import ReactionButtons from "./ReactionButtons";
import {
  fetchPosts,
  selectAllPosts,
  selectPostById,
  selectPostIds,
} from "./postSlice";
import Spinner from "../../components/Spinner";

// const PostExcerpt = React.memo(({ post }) => {

//   return (
//     <article className="post-excerpt">
//       <h3>{post.title}</h3>
//       <div>
//         <PostAuthor userId={post.user} />
//         <TimeAgo timestamp={post.date} />
//       </div>
//       <p className="post-content">{post.content.substring(0, 100)}</p>
//       <ReactionButtons post={post} />
//       <Link to={`/posts/${post.id}`} className="button muted-button">
//         View Post
//       </Link>
//     </article>
//   );
// });

const PostExcerpt = React.memo(({ postId }) => {
  const post = useSelector((state) => selectPostById(state, postId));

  return (
    <article className="post-excerpt">
      <h3>{post.title}</h3>
      <div>
        <PostAuthor userId={post.user} />
        <TimeAgo timestamp={post.date} />
      </div>
      <p className="post-content">{post.content.substring(0, 100)}</p>
      <ReactionButtons post={post} />
      <Link to={`/posts/${post.id}`} className="button muted-button">
        View Post
      </Link>
    </article>
  );
});

export const PostsList = () => {
  const posts = useSelector(selectAllPosts);
  const dispatch = useDispatch();
  const orderedPostIds = useSelector(selectPostIds);

  const postStatus = useSelector((state) => state.posts.status);
  const error = useSelector((state) => state.posts.error);

  useEffect(() => {
    if (postStatus === "idle") {
      dispatch(fetchPosts());
    }
  }, [postStatus, dispatch]);

  let content;
  if (postStatus === "loading") {
    content = <Spinner text="Loading..." />;
  } else if (postStatus === "succeeded") {
    // console.log("@@@@orderedPostIdsorderedPostIds", orderedPostIds);
    content = orderedPostIds.map((postId) => (
      <PostExcerpt key={postId} postId={postId} />
    ));
    // const orderedPosts = posts
    //   .slice()
    //   .sort((a, b) => b.date.localeCompare(a.date));

    // content = orderedPosts.map((post) => (
    //   <article className="post-excerpt" key={post.id}>
    //     <h3>{post.title}</h3>
    //     <PostExcerpt post={post} />
    //     <br />
    //   </article>
    // ));
  } else if (postStatus === "failed") {
    console.log(error);
    content = <div>{error}</div>;
  }

  return (
    <section className="posts-list">
      <h2>Posts</h2>
      {content}
    </section>
  );
};
