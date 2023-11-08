import { useState, useEffect } from "react";
import { supabase } from '../client.jsx';
import Post from './Post.jsx';
import SortBy from './SortBy.jsx';
import Search from './Search.jsx';

const PostList = () => {
  const [posts, setPosts] = useState(null);

  useEffect(() => {
    const getPosts = async () => {
      const {data, error} = await supabase
        .from("posts")
        .select("*")
        .order(sort, { ascending: false });
      setPosts(data);
    }
    getPosts();
  }, []);

  return (
    <div className="PostList">
      <SortBy posts={posts} setPosts={setPosts} />
      <Search posts={posts} setPosts={setPosts}/>
      {posts ? 
        posts.map(post => {
          return <Post key={post.id} id={post.id} createdAt={new Date(post.created_at)} title={post.title} body={post.body} likes={post.likes} />
        }) :
        "No posts yet!"}
    </div>
  )
}

export default PostList;