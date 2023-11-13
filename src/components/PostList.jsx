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
        .order("created_at", { ascending: false });
      setPosts(data);
    }
    getPosts();
  }, []);

  useEffect(() => {
    const getPosts = async () => {
      const {data, error} = await supabase
        .from("posts")
        .select("*")
        .order("created_at", { ascending: false });
      if (posts == null) {
        setPosts(data);
      }
    }
    getPosts();
  }, [posts]);
  
  return (
    <div className="PostList">
      <div className="filtering">
        <SortBy posts={posts} setPosts={setPosts} />
        <Search posts={posts} setPosts={setPosts}/>
      </div>
      {posts ? 
        posts.map(post => {
          return <Post key={post.id} id={post.id} createdAt={new Date(post.created_at)} title={post.title} body={post.body} likes={post.likes} />
        }) :
        "No posts yet!"}
    </div>
  )
}

export default PostList;