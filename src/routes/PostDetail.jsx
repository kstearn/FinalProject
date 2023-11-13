import {useState, useEffect} from 'react';
import {useParams, Link} from 'react-router-dom';
import {supabase} from '../client.jsx';
import Comments from '../components/Comments.jsx';

const PostDetail = () => {
  let params = useParams();

  const [post, setPost] = useState({id: "", created_at: "", title: "", body: "", likes: 0});
  const [currLikes, setCurrLikes] = useState(post.likes);

  const handleLike = () => {
    setCurrLikes(currLikes + 1);
  }

  useEffect(() => {
    const getPost = async () => {
      const {data, error} = await supabase
        .from("posts")
        .select()
        .eq("id", params.id)
        .single();

      setPost(data);
      setCurrLikes(data.likes);
    }
    getPost();
  }, []);

  useEffect(() => {
    const updateLikes = async () => {
      await supabase
      .from('posts')
      .update({ likes: currLikes })
      .eq('id', post.id);
    }
    updateLikes();
  }, [currLikes])
  
  return(
    <div className="postDetail">
      <h2>{post.title}</h2>
      <p>{post.body}</p>
      <p className="time">{new Date(post.created_at).toLocaleString()}</p>
      <p>Likes: {currLikes}</p>
      <div className="detailFoot">
        <button onClick={handleLike}>Like</button>
        <Link to={`/edit/${params.id}`}>
          <button>Edit Post</button>
        </Link>
      </div>
      <Comments post_id={params.id} />
    </div>
  )
}

export default PostDetail;