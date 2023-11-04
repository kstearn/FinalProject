import { useEffect, useState } from 'react';
import { supabase } from '../client.jsx';

const CreatePost = () => {
  const [post, setPost] = useState({title: "", body: ""});

  const handleChange = (event) => {
      const {name, value} = event.target;

      setPost( (prev) => {
          return {
              ...prev,
              [name]:value,
          }
      })
  };

  const createPost = async (event) => {
    event.preventDefault();

    await supabase
      .from('posts')
      .insert([
        { title: post.title, body: post.body },
      ])
      .select();

    window.location = "/";
  };
  
  return (
    <div className="CreatePost">
      <form>
        <label for="title">Title:</label><br/>
          <input type="text" name="title" value={post.title} onChange={handleChange}/><br/><br/>
        
          <label for="body">Post body:</label><br/>
          <textarea name="body" value={post.value} onChange={handleChange}></textarea><br/><br/>

        <button onClick={createPost}>Create Post</button>
      </form>
    </div>
  )
}

export default CreatePost;