import {useState, useEffect} from 'react';
import {useParams, Link} from 'react-router-dom';
import {supabase} from '../client.jsx';

const PostDetail = () => {
  let params = useParams();

  const [post, setPost] = useState({id: "", created_at: "", title: "", body: "", likes: 0});

  useEffect(() => {
    const getPost = async () => {
      const {data, error} = await supabase
        .from("posts")
        .select()
        .eq("id", params.id)
        .single();

      setPost(data);
    }
    getPost();
  }, []);
  
  return(
    <div className="postDetail">
      <h2>{post.title}</h2>
      <p>{post.body}</p>
      <p>{new Date(post.created_at).toLocaleString()}</p>
      <p>{post.likes}</p>
    </div>
  )
}

export default PostDetail;