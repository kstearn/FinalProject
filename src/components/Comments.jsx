import { useState, useEffect } from 'react';
import { supabase } from '../client.jsx';

const Comments = ({post_id}) => {
  const [comments, setComments] = useState(null);
  const [newComment, setNewComment] = useState("");
  
  useEffect(() => {
    const getComments = async () => {
      const {data, error} = await supabase
        .from("comments")
        .select("*")
        .eq("post_id", post_id)
        .order("created_at", { ascending: false });
      if (data && data.length) {
        setComments(data);
      }
    }
    getComments();
  }, []);

  const handleChange = (event) => {
      const {name, value} = event.target;

      setNewComment(value);
  };

  const createComment = async (event) => {
    event.preventDefault();

    await supabase
      .from('comments')
      .insert([
        { post_id: post_id, comment_body: newComment },
      ])
      .select();

    window.location = `/details/${post_id}`;
  };

  
  
  return(
    <div className="comments">
      <h4>Comments</h4>
      {comments ?
        comments.map(comment => {
          return (<div key={comment.comment_id} className="comment">{comment.comment_body}
            <div className="commentTime">{new Date(comment.created_at).toLocaleString()}</div>
          </div>);
      }) :
      ("No comments yet!")}
      <form className="newComment">
          <label for="comment">Comment: </label><br/>
          <textarea name="comment" onChange={handleChange}></textarea><br/><br/>

        <button onClick={createComment}>Post Comment</button>
      </form>
    </div>
  )
}

export default Comments;