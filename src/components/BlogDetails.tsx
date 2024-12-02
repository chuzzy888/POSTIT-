import Layout from "./Layout";
import rct5 from "../assets/images/rct5.png";

export default function BlogDetails() {
  return (
    <div className="bg-[#FDFEFF]">
      <Layout>
        <div className=" py-12 ">
          {/* Category Tag */}
          <div className="inline-block bg-blue-500 text-white px-4 py-1 rounded-full text-sm mb-4">
            Technology
          </div>

          {/* Blog Title */}
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            The 20 Biggest Fintech Companies In Nigeria 2022
          </h1>

          {/* Author and Date */}
          <div className="flex items-center text-gray-500 text-sm mb-6">
            <img
              src={rct5}
              alt="Author"
              className="w-8 h-8 rounded-full mr-2"
            />
            <span className="mr-2">By Maria Davies</span>
            <span className="ml-2">• May 21, 2022</span>
          </div>

          {/* Blog Image */}
          <div className="rounded-lg overflow-hidden mb-6">
            <img src={rct5} alt="Fintech" className="w-full object-cover" />
          </div>

          {/* Blog Content */}
          <div className="text-[#7B7B7B] leading-relaxed">
            <p className="mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Malesuada
              neque, vitae arcu elit amet arcu. Non quam dignissim blandit
              lectus tempus sit molestie fermentum. Mattis morbi fames nullam
              enim. Vitae commodo tellus cras eu, amet id scelerisque quis.
            </p>
            <p className="mb-4">
              Massa donec accumsan, maecenas ullamcorper sagittis, ut felis,
              faucibus. Varius nibh tristique a mattis mattis amet in placerat.
              Donec ultricies pharetra turpis proin. Vulputate volutpat neque
              diam at metus scelerisque.
            </p>
          </div>
        </div>
      </Layout>
    </div>
  );
}
