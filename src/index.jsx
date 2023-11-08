import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Nav from './routes/Nav.jsx';
import CreatePost from './routes/CreatePost.jsx';
import PostDetail from './routes/PostDetail.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Nav />}>
          <Route index={true} element={<App />} />
          <Route index= {false} path="/create" element={<CreatePost />} />    
          <Route index={false} path="/details/:id" element={<PostDetail />} />
        </Route>
      </Routes>
    </BrowserRouter>
	</React.StrictMode>
)