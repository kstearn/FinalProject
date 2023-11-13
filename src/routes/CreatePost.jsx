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
        <h3>Create Post</h3>
        <label for="title">Title:</label><br/>
          <input type="text" name="title" value={post.title} onChange={handleChange}/><br/><br/>
        
          <label for="body">Post body:</label><br/>
          <textarea name="body" value={post.body} rows="5" cols="50" maxlength="300" onChange={handleChange}></textarea><br/><br/>

        <button onClick={createPost}>Create Post</button>
      </form>
    </div>
  )
}

export default CreatePost;