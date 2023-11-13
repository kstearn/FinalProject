import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { supabase } from '../client.jsx';

const EditPost = () => {
  let params = useParams();
  console.log(params.id);
  
  const [post, setPost] = useState(null);
  const [newPost, setNewPost] = useState(post);

  useEffect(() => {
    const getPost = async () => {
      const {data, error} = await supabase
        .from("posts")
        .select()
        .eq("id", params.id)
        .single();
      console.log(data);
      setPost(data);
      setNewPost(data);
    }
    getPost();
  }, []);

  useEffect(() => {
    const getPost = async () => {
      const {data, error} = await supabase
        .from("posts")
        .select()
        .eq("id", params.id)
        .single();
      console.log(data);
      setNewPost(data);
    }
    getPost();
  }, [post]);

  const handleChange = (event) => {
      const {name, value} = event.target;
      setNewPost((prev) => {
          return {
              ...prev,
              [name]:value,
          }
      })
  };

  const updatePost = async (event) => {
    event.preventDefault();

    await supabase
      .from('posts')
      .update({ title: newPost.title, body: newPost.body})
      .eq('id', params.id);

    window.location = `/`;
  }

  const deletePost = async (event) => {
    event.preventDefault();

    await supabase
      .from('posts')
      .delete()
      .eq('id', params.id);

    window.location = `/`;
  }
  

  return(
    <div className="EditPost">
      {post ? 
      <form>
        <h3>Edit Post</h3>
        <label for="title">Title:</label><br/>
          <input type="text" name="title" value={newPost.title} onChange={handleChange}/><br/><br/>

          <label for="body">Post body:</label><br/>
          <textarea name="body" value={newPost.body} rows="5" cols="50" maxlength="300" onChange={handleChange}></textarea><br/><br/>

        <button onClick={updatePost}>Update Post</button>
        <button onClick={deletePost}>Delete Post</button>
      </form>
      : "Loading..."}
      
    </div>
  )
};

export default EditPost;