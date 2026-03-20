import React from "react";

const Footer = () => {
  return (
    <footer className="bg-popover border-t text-white mt-16">
      <div className="max-w-7xl mx-auto px-6 py-12 flex items-center justify-between">
        {/* Brand */}
        <div>
          <h2 className="text-2xl font-bold">WallHub</h2>
          <p className="mt-3 text-sm text-gray-400">
            A place to find unique high quality wallpapers that will inspire you.
          </p>
        </div>

        {/* Links */}
        <div>
          <h3 className="font-semibold mb-3">Company</h3>
          <ul className="space-y-2 text-sm text-gray-400">
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom */}
      <div className=" text-center text-sm text-gray-500 py-4">
        © {new Date().getFullYear()} WallHub. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
