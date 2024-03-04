import React from 'react';
import Footer from './Footer';

function UpdateStoryForm() {
  return (
    <>
      <div className="flex flex-col items-start justify-center min-h-screen bg-white p-4">

        <input
          type="text"
          placeholder="Title"
          className="w-full md:w-96 lg:w-11/12 h-12 px-4 my-4 border border-gray-500"
        />
        <input
          type="text"
          placeholder="Tags"
          className="w-full md:w-96  lg:w-11/12 h-12 px-4 my-4 border border-gray-500"
        />
        <textarea
          placeholder="Write your story..."
          className="w-full md:w-96  lg:w-11/12 h-72 px-4 py-2 my-4 border  border-gray-500 resize-none"
        />
        <button className="w-full max-w-xs lg:max-w-md h-12 bg-blue-500 text-white rounded-md mx-auto font-bold text-lg font-mono ">Update Story</button>
      </div>
      <Footer />
    </>
  );
}

export default UpdateStoryForm;