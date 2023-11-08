import { useState, useEffect } from 'react';
import { supabase } from '../client.jsx';

const SortBy = ({posts, setPosts}) => {
  const [sort, setSort] = useState("created_at");
  
  const handleSort = (event) => {
    if (event.target.value === "recent") {
      setSort("created_at");
    }
    if (event.target.value === "likes") {
      setSort("likes");
    }
  }

  useEffect(() => {
    const getPosts = async () => {
      const {data, error} = await supabase
        .from("posts")
        .select("*")
        .order(sort, { ascending: false });
      setPosts(data);
    }
    getPosts();
  }, [sort]);
  
  return(
    <div>
      <label for="sort">Sort by: </label>
      <select name="sort" id="sort" onChange={handleSort}>
        <option value="recent">Most Recent</option>
        <option value="likes">Most Likes</option>
      </select>
    </div>
  )
}

export default SortBy;