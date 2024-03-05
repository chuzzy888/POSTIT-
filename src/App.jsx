import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './component/Navbar';
import Sign from './component/Sign';
import Stories from './component/Stories';
import Contact from './component/Contact';
import Home from './component/Home';
import Signup from './component/Signup';
import MyFeed from './component/MyFeed';
import ReadMore from './component/ReadMore';
import MyStories from './component/MyStories';
import CreateStoryForm from './component/CreateStoryForm';
import UpdateStoryForm from './component/UpdateStoryForm';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/stories' element={<Stories />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/sign' element={<Sign />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/myfeed' element={<MyFeed />} />
          <Route path='/readmore/:id' element={<ReadMore />} />
          <Route path='/mystories' element={<MyStories />} />
          <Route path='/create' element={<CreateStoryForm />} />
          <Route path='/update' element={<UpdateStoryForm />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
