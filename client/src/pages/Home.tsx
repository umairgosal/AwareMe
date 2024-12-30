import { ArrowRight, ShoppingBag, Star, User, Users } from "lucide-react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { useAuthStore } from "../store/authStore";

export function Home() {
  const { user } = useAuthStore();
  const cardData = [
    {
      icon: <ShoppingBag className="mx-auto mb-4 text-cyan-600" size={32} />,
      title: "Online Marketplace",
      description:
        "Sell your products to customers across Pakistan through our easy-to-use platform",
    },
    {
      icon: <Star className="mx-auto mb-4 text-cyan-600" size={32} />,
      title: "Skill Development",
      description:
        "Access training resources and workshops to enhance your business skills",
    },
    {
      icon: <Users className="mx-auto mb-4 text-cyan-600" size={32} />,
      title: "Mentorship",
      description:
        "Connect with experienced mentors who can guide you on your entrepreneurial journey",
    },
    {
      icon: <Star className="mx-auto mb-4 text-cyan-600" size={32} />,
      title: "Connect With NGO's (Coming Soon)",
      description:
        "Access training resources and workshops to enhance your business skills",
    },
  ];

  return (
    <div className="space-y-16 py-8">
      {/* Hero Section */}
      <section
        className="relative bg-cyan-700 text-white py-16"
        style={{
          backgroundImage:
            "url(https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhka4Xb636Y-t-u0YVkA7kxG9p0QjRyYfQ4Rf6X_xts7WAgdCRvURpKItM1S6-qpGJMJN8Q3HWYXziAPD8jp_qyMiK0rXnd_EsOIgwCAUwT0DeWDb296aHJz1nDKAmjOs5moZHKia72OYTz/s320/290x230-Pakistani-women.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>{" "}
        {/* Semi-transparent overlay */}
        <div className="font-bold text-3xl flex justify-center text-white mb-6">
          Welcome {user.name}
        </div>
        <div className="container mx-auto px-4 relative z-10 justify-center flex text-center">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Women Empowerment through Awareness
            </h1>
            <p className="text-xl mb-8">
              Learn how to connect with the World to impact Globally
            </p>
            <Link
              to="/marketplace"
              className="inline-flex items-center bg-white text-cyan-600 px-6 py-3 rounded-lg font-semibold transform transition-transform hover:scale-105 hover:shadow-lg"
            >
              Get Started
              <ArrowRight className="ml-2" size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          How We Help You Succeed
        </h2>

        <Swiper
          spaceBetween={20}
          slidesPerView={3}
          navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
        >
          {cardData.map((card, index) => (
            <SwiperSlide key={index}>
              <div className="text-center p-6 rounded-lg bg-cyan-50 transform transition-transform hover:scale-101 hover:shadow-lg">
                {card.icon}
                <h3 className="text-xl font-semibold mb-3">{card.title}</h3>
                <p className="text-gray-600">{card.description}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      {/* Success Stories */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Success Stories
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {/* First Success Story */}
            <div className="bg-white p-6 rounded-lg shadow-sm transform transition-transform hover:scale-105 hover:shadow-lg">
              <img
                src="https://th.bing.com/th/id/OIP.IUOLzL6DEMeEyhYzE-MRRAHaFj?rs=1&pid=ImgDetMain"
                alt="Fatima's Handicraft Business"
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">
                From Local Artisan to Online Success
              </h3>
              <p className="text-gray-600">
                How Divya transformed her traditional handicraft business into a
                thriving online enterprise.
              </p>
              <a
                href="https://yourstory.com/people/divya-mallick"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan-600 font-semibold hover:underline mt-2 block"
              >
                Read Full Story
              </a>
            </div>

            {/* Second Success Story */}
            <div className="bg-white p-6 rounded-lg shadow-sm transform transition-transform hover:scale-105 hover:shadow-lg">
              <img
                src="https://images.yourstory.com/cs/2/b094ec506da611eab285b7ee8106293d/Maavni-1632397419896.jpg?fm=png&auto=format&blur=500"
                alt="Promoting Odisha handicrafts and empowering artisans"
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">
                Promoting Odisha Handicrafts and Empowering Artisans
              </h3>
              <p className="text-gray-600">
                It offers personalised products online, ensuring a consistent
                income for artisans.
              </p>
              <a
                href="https://yourstory.com/2021/09/startup-bharat-bhubaneswar-based-ecommerce-startup"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan-600 font-semibold hover:underline mt-2 block"
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
