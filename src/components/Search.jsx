import { useState, useEffect } from 'react';
import { supabase } from '../client.jsx';

const Search = ({posts, setPosts}) => {
  const [searchKey, setSearchKey] = useState("");

  const handleSearch = async () => {
    const { data, error } = await supabase
      .from('posts')
      .select()
      .ilike('title', `%${searchKey}%`);
    setPosts(data);
  }
  
  return(
    <div>
      <label for="search">Search by title: </label>
      <input name="search" id="search" value={searchKey} onChange={e => {
      setSearchKey(e.target.value)
        }}></input>
      <button onClick={handleSearch}>Search</button>
    </div>
  )
}

export default Search;