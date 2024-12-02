export default function CreateStory() {
  return (
    <div className="container mx-auto px-6 py-8 max-w-4xl font-josefin">
      <h1 className="text-3xl font-bold mb-6">Create Story</h1>

      {/* Title Field */}
      <div className="mb-6">
        <label
          className="block text-gray-700 mb-2 font-semibold"
          htmlFor="title"
        >
          Title
        </label>
        <input
          type="text"
          id="title"
          placeholder="Enter title"
          className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Tags Field */}
      <div className="mb-6">
        <label
          className="block text-gray-700 mb-2 font-semibold"
          htmlFor="tags"
        >
          Tags
        </label>
        <input
          type="text"
          id="tags"
          placeholder="Enter tags (comma-separated)"
          className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Story Content */}
      <div className="mb-6">
        <label
          className="block text-gray-700 mb-2 font-semibold"
          htmlFor="story"
        >
          Write your story
        </label>
        <textarea
          id="story"
          placeholder="Write your story..."
          className="w-full h-64 px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Publish Button */}
      <div className="text-center">
        <button className="bg-[#0086B0] text-[#F0F8FF] px-6 py-3 font-[lato] font-[#F0F8FF] transition duration-200">
          Publish Story
        </button>
      </div>
    </div>
  );
}
