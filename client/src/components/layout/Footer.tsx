import React from "react";
import { Heart } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-cyan-600 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex justify-between">
          <div>
            <h2 className="text-lg font-semibold mb-4">AwareMe</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <a href="/about" className="text-cyan-100 hover:text-white">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="/contact" className="text-cyan-100 hover:text-white">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Resources</h3>
              <ul className="space-y-2">
                <li>
                  <a href="/blog" className="text-cyan-100 hover:text-white">
                    Blog
                  </a>
                </li>
                <li>
                  <a
                    href="/tutorials"
                    className="text-cyan-100 hover:text-white"
                  >
                    Tutorials
                  </a>
                </li>
                <li>
                  <a
                    href="/success-stories"
                    className="text-cyan-100 hover:text-white"
                  >
                    Success Stories
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="https://facebook.com"
                    className="text-cyan-100 hover:text-white"
                  >
                    Facebook
                  </a>
                </li>
                <li>
                  <a
                    href="https://twitter.com"
                    className="text-cyan-100 hover:text-white"
                  >
                    Twitter
                  </a>
                </li>
                <li>
                  <a
                    href="https://instagram.com"
                    className="text-cyan-100 hover:text-white"
                  >
                    Instagram
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
              <p className="text-cyan-100 text-sm mb-4">
                Stay updated with our latest news and updates.
              </p>
              <form>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-2 py-1 mb-2 text-gray-700 rounded flex justify-center"
                />
                <button className="bg-white text-cyan-600 px-4 py-2 rounded hover:bg-cyan-700 hover:text-white">
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-cyan-600 text-center">
          <hr />
          <p className="flex items-center justify-center text-cyan-100">
            Passion <Heart size={16} className="mx-1 text-red-400" /> knows No
            bound
          </p>
        </div>
      </div>
    </footer>
  );
}
