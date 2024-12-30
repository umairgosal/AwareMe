import React from "react";
import { Globe } from "lucide-react";
import type { NGO } from "../types";

export function Community() {
  const [ngos] = React.useState([
    {
      id: "1",
      name: "The Next Generation Alliance (TNGA)",
      location: "Karachi",
      description:
        "Empowering the next generation through education and training.",
      logo: "https://via.placeholder.com/150",
    },
    {
      id: "2",
      name: "Sustainable Roots for Prosperity Welfare Association (SRPWA)",
      location: "Lahore",
      description: "Focused on sustainable development in rural areas.",
      logo: "https://via.placeholder.com/150",
    },
    {
      id: "1",
      name: "The Next Generation Alliance (TNGA)",
      location: "Karachi",
      description:
        "Empowering the next generation through education and training.",
      logo: "https://via.placeholder.com/150",
    },
    {
      id: "2",
      name: "Sustainable Roots for Prosperity Welfare Association (SRPWA)",
      location: "Lahore",
      description: "Focused on sustainable development in rural areas.",
      logo: "https://via.placeholder.com/150",
    },
    {
      id: "1",
      name: "The Next Generation Alliance (TNGA)",
      location: "Karachi",
      description:
        "Empowering the next generation through education and training.",
      logo: "https://via.placeholder.com/150",
    },
    {
      id: "2",
      name: "Sustainable Roots for Prosperity Welfare Association (SRPWA)",
      location: "Lahore",
      description: "Focused on sustainable development in rural areas.",
      logo: "https://via.placeholder.com/150",
    },{
      id: "1",
      name: "The Next Generation Alliance (TNGA)",
      location: "Karachi",
      description:
        "Empowering the next generation through education and training.",
      logo: "https://via.placeholder.com/150",
    },
    {
      id: "2",
      name: "Sustainable Roots for Prosperity Welfare Association (SRPWA)",
      location: "Lahore",
      description: "Focused on sustainable development in rural areas.",
      logo: "https://via.placeholder.com/150",
    },
  ]);

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header Section */}
      <div
        className="bg-cover bg-center h-64 flex items-center justify-center text-white"
        style={{
          backgroundImage:
            "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPQb4qvyUHNdeTFJzmwbUBDts0ACE3qLKrdw&s')",
        }}
      >
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4 text-black">
            Discover and Connect with NGOs in Pakistan
          </h1>
          <div className="flex justify-center gap-4">
            <button className="bg-cyan-600 hover:bg-cyan-700 text-white px-6 py-3 rounded">
              Add NGOs
            </button>
            <button className="bg-cyan-600 hover:bg-cyan-700 text-white px-6 py-3 rounded">
              Add Projects
            </button>
          </div>
        </div>
      </div>

      {/* Search Filters */}
      <div className="mt-8 grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white p-4 shadow rounded-lg">
          <h2 className="text-lg font-semibold mb-4">Search Filters</h2>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">NGO Name</label>
            <input
              type="text"
              className="w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:ring-cyan-300"
              placeholder="Enter NGO name"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">
              Search by District
            </label>
            <select className="w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:ring-cyan-300">
              <option>Select District</option>
              <option>Karachi</option>
              <option>Lahore</option>
              <option>Islamabad</option>
            </select>
          </div>
          <div className="flex justify-between">
            <button className="bg-cyan-600 hover:bg-cyan-700 text-white px-4 py-2 rounded">
              Search
            </button>
            <button className="text-gray-600 px-4 py-2">Reset Filters</button>
          </div>
        </div>

        {/* NGO Listings */}
        <div className="md:col-span-3">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {ngos.map((ngo) => (
              <div key={ngo.id} className="bg-white p-4 shadow rounded-lg">
                <img
                  src={ngo.logo}
                  alt={ngo.name}
                  className="w-20 h-20 rounded-full mx-auto mb-4"
                />
                <h3 className="text-lg font-semibold text-center mb-2">
                  {ngo.name}
                </h3>
                <p className="text-sm text-gray-600 text-center mb-4">
                  {ngo.location}
                </p>
                <p className="text-sm text-gray-700 text-center">
                  {ngo.description}
                </p>
              </div>
            ))}
          </div>
          <div className="text-center mt-6">
            <p className="text-sm text-gray-600">
              Showing 1-2 out of {ngos.length} results
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
