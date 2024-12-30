import type { TeamMemberType } from "../../types";
import { Mission } from "./Mission";
import { TeamMember } from "./TeamMember";

export function About() {
  const team: TeamMemberType[] = [
    {
      name: "Farzan Saqib",
      role: "Founder & CEO",
      description: "Passionate about empowering rural women through technology",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5gv6VVdtAGLqBK9MXIBOUGJ-hWeVdiiN-3Q&s",
    },
    {
      name: "Ch Muhammad Umair Gosal",
      role: "Director",
      description:
        "Expert in building and nurturing entrepreneurial communities",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5gv6VVdtAGLqBK9MXIBOUGJ-hWeVdiiN-3Q&s",
    },
    {
      name: "Haroon Tahir",
      role: "Technology Lead",
      description: "Dedicated to making technology accessible to all",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5gv6VVdtAGLqBK9MXIBOUGJ-hWeVdiiN-3Q&s",
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-cyan-700 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About AwareMe</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Women Empowerment through Awareness
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <Mission />

      {/* Story Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8">Our Story</h2>
            <p className="text-gray-600 mb-6">
              AwareMe began with a mission to empower women entrepreneurs in
              rural communities who face systemic challenges in growing their
              businesses. These talented individuals often encounter limited
              access to markets, technology, and resources, which curbs their
              ability to thrive.
            </p>
            <p className="text-gray-600 mb-6">
              Today, AwareMe empowers women entrepreneurs across Pakistan,
              giving them the tools they need to succeed while educating urban
              audiences about the social challenges they face. Together, we’re
              building a future where rural women have the agency to shape their
              destinies and contribute meaningfully to their local economies.
            </p>
            <p className="text-gray-600 mb-6">
              Founded in 2024, AwareMe is more than just a platform—it’s a
              movement to bridge these gaps. By providing e-commerce
              opportunities, vocational training, and mentorship, we enable
              rural women to connect with urban audiences, enhance their skills,
              and build sustainable livelihoods.
            </p>
            <p className="text-gray-600">
              Our platform fosters collaboration by bringing together NGOs,
              local mentors, and communities to support these entrepreneurs.
              Whether it’s hosting bespoke online stores, delivering impactful
              training programs, or facilitating direct communication between
              stakeholders, AwareMe is committed to creating lasting change.
            </p>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Team</h2>
          <div className="grid md:grid-cols-3 gap-12">
            {team.map((member) => (
              <TeamMember key={member.name} member={member} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
