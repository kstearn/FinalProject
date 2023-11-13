import { useState, useEffect } from 'react';
import { supabase } from '../client.jsx';
import { Link } from 'react-router-dom';

const Post = ({id, createdAt, title, body, likes}) => {
  const [numComments, setNumComments] = useState(null);

  useEffect(() => {
    const getComments = async () => {
      const {data, error} = await supabase
        .from("posts")
        .select(`comments(count)`)
        .eq("id", id);
      setNumComments(data[0].comments[0].count);
    }
    if (!numComments) {
      getComments();
    }
  }, []);
  
  return (
    <div className="Post">
      <Link
        to={`/details/${id}`}><h3>{title}</h3></Link>
      <div className="likesComments">
        <p className="postCreatedTime">{createdAt.toLocaleString()}</p>
        <p>Likes: {likes}</p>
        <p>Comments: {numComments}</p>
      </div>
    </div>
  )
}

export default Post;