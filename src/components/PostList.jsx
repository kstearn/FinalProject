import { useState, useEffect } from "react";
import { supabase } from '../client.jsx';
import Post from './Post.jsx';

const PostList = () => {
  const [posts, setPosts] = useState(null);

  useEffect(() => {
    const getPosts = async () => {
      const {data, error} = await supabase
        .from("posts")
        .select("*")
        .order('created_at', { ascending: false });
      setPosts(data);
    }
    getPosts();
  }, []);
  
  return (
    <div className="PostList">
      {posts ? 
        posts.map(post => {
          return <Post key={post.id} id={post.id} createdAt={new Date(post.created_at)} title={post.title} body={post.body} likes={post.likes} />
        }) :
        "No posts yet!"}
    </div>
  )
}

export default PostList;