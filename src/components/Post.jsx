import { useState, useEffect } from 'react';
import { supabase } from '../client.jsx';
import { Link } from 'react-router-dom';

const Post = ({id, createdAt, title, body, likes}) => {

  const [currLikes, setCurrLikes] = useState(likes);
  
  const handleLike = () => {
    setCurrLikes(currLikes + 1);
  }

  useEffect(() => {
    const updateLikes = async () => {
      await supabase
      .from('posts')
      .update({ likes: currLikes })
      .eq('id', id);
    }
    updateLikes();
  }, [currLikes])
  
  return (
    <div className="Post">
      <Link
        to={`/details/${id}`}><h3>{title}</h3></Link>
      <p>{body}</p>
      <p>{createdAt.toLocaleString()}</p>
      <p>Likes: {currLikes}</p>
      <button onClick={handleLike}>Like</button>
    </div>
  )
}

export default Post;