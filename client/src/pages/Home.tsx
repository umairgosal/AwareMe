import { ArrowRight, ShoppingBag, Star, Users } from "lucide-react";
import { Link } from "react-router-dom";
import { useAuthStore } from "../store/authStore";

export function Home() {
  const { user } = useAuthStore();
  const cardData = [
    {
      icon: <ShoppingBag className="text-cyan-600" size={40} />,
      title: "Online Marketplace",
      description:
        "Sell your products to customers across Pakistan through our easy-to-use platform.",
    },
    {
      icon: <Star className="text-cyan-600" size={40} />,
      title: "Skill Development",
      description:
        "Access training resources and workshops to enhance your business skills.",
    },
    {
      icon: <Users className="text-cyan-600" size={40} />,
      title: "Mentorship",
      description:
        "Connect with experienced mentors who can guide you on your entrepreneurial journey.",
    },
    {
      icon: <Star className="text-cyan-600" size={40} />,
      title: "Connect With NGOs",
      description:
        "Access training resources and workshops to enhance your business skills.",
    },
  ];

  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-cyan-700 to-cyan-500 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">Welcome {user.name}</h1>
          <p className="text-lg mb-8">
            Empowering women to connect globally and achieve their dreams.
          </p>
          <Link
            to="/store"
            className="inline-flex items-center px-6 py-3 bg-white text-cyan-600 rounded-lg font-semibold shadow-md hover:shadow-lg transition"
          >
            Get Started
            <ArrowRight className="ml-2" />
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {cardData.map((card, index) => (
            <div
              key={index}
              className="text-center bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition"
            >
              <div className="mb-4">{card.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{card.title}</h3>
              <p className="text-gray-600">{card.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Success Stories */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Success Stories
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
              <img
                src="https://i.dawn.com/primary/2015/06/559252b01854f.jpg?r=2012808894"
                alt="Sidra Qasim"
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">
                Markhor is a startup you should know about
              </h3>
              <p className="text-gray-600">
                Shoes, crafted from leather by hand, are being produced in Okara
                and picked up all around the world.
              </p>
              <a
                href="https://www.dawn.com/news/1191423#:~:text=This%20remarkable%20export%20activity%20is,for%20its%20products%20beyond%20Pakistan."
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan-600 font-semibold hover:underline"
              >
                Read Full Story
              </a>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
              <img
                src="https://www.veon.com/fileadmin/user_upload/newsroom/stories/ShakeelasStory_Banner.png"
                alt="Shakeela's Story"
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">Shakeela's Story</h3>
              <p className="text-gray-600">
                Growing up in Pakistan, Shakeela Bibi - like millions of young
                girls around the world - was
              </p>
              <a
                href="https://www.veon.com/newsroom/stories/shakeelas-story"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan-600 font-semibold hover:underline"
              >
                Read Full Story
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
