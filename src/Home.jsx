import { FaUser, FaCogs, FaGlobeAmericas } from "react-icons/fa";

export default function Home() {
  return (
    <div>
      <header className="py-20 px-4 bg-blue-50">
        <h1 className="text-4xl text-center font-semibold text-blue-900">
          Search, Add, and Enjoy the <br />
          Top-Notch Places to Visit in Each Country
        </h1>
        <p className="text-center mt-4 text-lg text-gray-700">
          Discover the best places to visit across the globe and create your own
          travel list.
        </p>
        <div className="mt-8 text-center">
          <a
            href="/places"
            className="text-white bg-blue-600 py-2 px-6 rounded-lg shadow-lg hover:bg-blue-700 transition-all duration-300"
          >
            Start Exploring Now
          </a>
        </div>
      </header>

      <div className="p-12">
        <h2 className="text-3xl text-center font-semibold text-blue-800">
          Top Tourist Attractions
        </h2>
        <br />
        <div className="flex justify-center">
          <p className="text-center text-zinc-700 w-[48rem] leading-relaxed">
            Explore the world’s most iconic destinations, from the Taj Mahal to
            the Grand Canyon. Each offers unique beauty, rich history, and
            unforgettable experiences. Whether you're seeking adventure,
            relaxation, or culture, these top attractions promise to inspire
            your wanderlust. Ready to see more? View all the tourist places{" "}
            <a href="/places" className="underline text-blue-600">
              here
            </a>
            .
          </p>
        </div>
      </div>

      {/* Featured Destinations */}
      <div className="py-16 bg-blue-50">
        <h2 className="text-3xl text-center font-semibold text-blue-800 mb-8">
          Featured Destinations
        </h2>
        <div className="flex justify-center gap-12">
          <div className="w-60 bg-white shadow-lg rounded-lg overflow-hidden">
            <img
              src="https://lh6.googleusercontent.com/proxy/VSDBMeOlHFia1rVgjtrzdD42kC-HsycxOoAOJ_VCsdrf1eGyS8-438Q3d5ZNb2nr8rNFxLRn6010qqIibO88yCK8tSWGlI9c4nZ4SpC3OuHk_771MhIgkGMUPNdhXZ3ytMcfVc54246Fipdt8_4UvcyhIAcAkKg=w675-h390-n-k-no"
              alt="Featured Destination 1"
              className="w-full h-40 object-cover"
            />
            <div className="p-4">
              <h3 className="font-semibold text-lg">Paris, France</h3>
              <p className="text-gray-600">
                The City of Light, famous for its iconic landmarks and rich
                history.
              </p>
            </div>
          </div>
          <div className="w-60 bg-white shadow-lg rounded-lg overflow-hidden">
            <img
              src="https://lh5.googleusercontent.com/p/AF1QipNKdHSpeIm6rHGdtXRByXdpb6hjLHRGf8S69_8z=w675-h390-n-k-no"
              alt="Featured Destination 2"
              className="w-full h-40 object-cover"
            />
            <div className="p-4">
              <h3 className="font-semibold text-lg">Kyoto, Japan</h3>
              <p className="text-gray-600">
                A blend of ancient tradition and serene beauty, surrounded by
                temples and gardens.
              </p>
            </div>
          </div>
          <div className="w-60 bg-white shadow-lg rounded-lg overflow-hidden">
            <img
              src="https://encrypted-tbn1.gstatic.com/licensed-image?q=tbn:ANd9GcTtbj4GuLmYMLMtNOK3TUit0RF1o5qJ9Uee7ETn4cn30BqlV4yyHqkaLjhaHCiaTkvSGrge-pLnkYZdHTq4YNqRFdQKVv1KxqGnplsqDA"
              alt="Featured Destination 3"
              className="w-full h-40 object-cover"
            />
            <div className="p-4">
              <h3 className="font-semibold text-lg">Cape Town, South Africa</h3>
              <p className="text-gray-600">
                A stunning coastal city, known for its natural beauty and
                vibrant culture.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="py-16 bg-white">
        <h2 className="text-3xl text-center font-semibold text-blue-800 mb-8">
          Why Choose Us?
        </h2>
        <div className="flex justify-center gap-12">
          <div className="w-80 flex flex-col items-center text-center">
            <FaGlobeAmericas className="text-4xl text-blue-600 mb-4" />
            <h3 className="font-semibold text-xl mb-2">Global Coverage</h3>
            <p className="text-gray-600">
              We provide information on destinations worldwide, ensuring your
              travels are well-planned.
            </p>
          </div>
          <div className="w-80 flex flex-col items-center text-center">
            <FaUser className="text-4xl text-blue-600 mb-4" />
            <h3 className="font-semibold text-xl mb-2">Community-Driven</h3>
            <p className="text-gray-600">
              Our community shares reviews and recommendations to help you make
              the best choices.
            </p>
          </div>
          <div className="w-80 flex flex-col items-center text-center">
            <FaCogs className="text-4xl text-blue-600 mb-4" />
            <h3 className="font-semibold text-xl mb-2">Easy to Use</h3>
            <p className="text-gray-600">
              Our intuitive interface makes it simple to search, add, and
              organize your travel plans.
            </p>
          </div>
        </div>
      </div>

      {/* Testimonial Section */}
      <div className="py-16 bg-blue-50">
        <h2 className="text-3xl text-center font-semibold text-blue-800 mb-8">
          What Our Users Say
        </h2>
        <div className="flex justify-center gap-16">
          <div className="w-80 bg-white p-6 shadow-lg rounded-lg">
            <p className="text-gray-600 mb-4">
              "This app has made planning my trips so much easier! I can find
              places I never knew existed."
            </p>
            <div className="flex items-center">
              <img
                src="https://www.jenner.com/a/web/gw9iooRKQeFBsXmJAV3nMN/4mwZ2K/futernick_sarah_env-web.jpg"
                alt="User 1"
                className="w-12 h-12 rounded-full mr-4 object-cover object-top"
              />
              <div>
                <p className="font-semibold">Sarah L.</p>
                <p className="text-sm text-gray-500">Travel Blogger</p>
              </div>
            </div>
          </div>
          <div className="w-80 bg-white p-6 shadow-lg rounded-lg">
            <p className="text-gray-600 mb-4">
              "A fantastic tool for discovering hidden gems around the world. I
              now have a travel bucket list!"
            </p>
            <div className="flex items-center">
              <img
                src="https://media-tommy.6thstreet.com/media/catalog/product/cache/dea14d70f0c9beff074352c4088a089a/m/w/mw0mw37322dw5_mo-f1.jpg"
                alt="User 2"
                className="w-12 h-12 rounded-full mr-4 object-cover object-top"
              />
              <div>
                <p className="font-semibold">John D.</p>
                <p className="text-sm text-gray-500">Adventure Enthusiast</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-12 mb-12 text-center">
        <a
          href="/places"
          className="text-white bg-blue-600 py-2 px-6 rounded-lg shadow-lg hover:bg-blue-700 transition-all duration-300"
        >
          Start Your Journey Now
        </a>
      </div>
    </div>
  );
}
