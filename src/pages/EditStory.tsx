export default function EditStory() {
  return (
    <div className="container mx-auto px-6 py-8 max-w-4xl font-josefin">
      {/* Title Field */}
      <div className="mb-6">
        <label className="block text-gray-700 font-semibold mb-2">Title:</label>
        <div className="bg-gray-100 text-gray-800 px-4 py-2 rounded-lg">
          The 20 Biggest Fintech Companies in Nigeria
        </div>
      </div>

      {/* Tags Field */}
      <div className="mb-6">
        <label className="block text-gray-700 font-semibold mb-2">Tags:</label>
        <div className="bg-gray-100 text-gray-800 px-4 py-2 rounded-lg inline-block">
          <span className="font-bold">Technology</span>
        </div>
      </div>

      {/* Story Content */}
      <div className="mb-6">
        <textarea
          className="w-full h-64 px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          defaultValue={`
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Malesuada neque, vitae arcu elit amet arcu. Non quam dignissim blandit lectus tempus sit molestie fermentum...
          `}
        />
      </div>

      {/* Update Button */}
      <div className="text-center">
        <button className="bg-[#0086B0] text-[#F0F8FF] px-6 py-3 font-lato  transition duration-200">
          Update Story
        </button>
      </div>
    </div>
  );
}
