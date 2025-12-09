import React from "react";

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 px-6">
        {/* Logo & Info */}
        <div className="text-center sm:text-left">
          <h2 className="text-2xl font-bold text-white">
            Work<span className="text-yellow-500">Bazaar</span>
          </h2>
          <p className="mt-3 text-sm">Your Gateway to Dream Jobs</p>
          <p className="mt-6 text-xs text-gray-500">
            © 2025 WorkBazaar. All rights reserved.
          </p>
        </div>

        {/* Quick Links */}
        <div className="text-center sm:text-left">
          <h3 className="text-lg font-semibold text-white mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-white">Home</a></li>
            <li><a href="#" className="hover:text-white">Jobs</a></li>
            <li><a href="#" className="hover:text-white">Browse</a></li>
            <li><a href="#" className="hover:text-white">About Us</a></li>
            <li><a href="#" className="hover:text-white">Contact</a></li>
          </ul>
        </div>

        {/* For Job Seekers */}
        <div className="text-center sm:text-left">
          <h3 className="text-lg font-semibold text-white mb-3">For Job Seekers</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-white">Search Jobs</a></li>
            <li><a href="#" className="hover:text-white">Latest Openings</a></li>
            <li><a href="#" className="hover:text-white">Top Companies</a></li>
            <li><a href="#" className="hover:text-white">Career Tips</a></li>
          </ul>
        </div>

        {/* For Recruiters */}
        <div className="text-center sm:text-left">
          <h3 className="text-lg font-semibold text-white mb-3">For Recruiters</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-white">Post a Job</a></li>
            <li><a href="#" className="hover:text-white">Employer Login</a></li>
            <li><a href="#" className="hover:text-white">Hire Talent</a></li>
            <li><a href="#" className="hover:text-white">Pricing Plans</a></li>
          </ul>
        </div>

        {/* Contact Section */}
        <div className="text-center sm:text-left">
          <h3 className="text-lg font-semibold text-white mb-3">Contact Us</h3>
          <p className="text-sm">📧 support@workbazaar.com</p>
          <p className="text-sm">📞 +91-98765 43210</p>
          <div className="flex justify-center sm:justify-start space-x-3 mt-4">
            <a href="#" className="hover:text-white text-xl">🌐</a>
            <a href="#" className="hover:text-white text-xl">🐦</a>
            <a href="#" className="hover:text-white text-xl">📘</a>
            <a href="#" className="hover:text-white text-xl">📸</a>
          </div>
        </div>
      </div>

      {/* Bottom Border (optional aesthetic touch) */}
      <div className="mt-10 border-t border-gray-700 pt-4 text-center text-xs text-gray-500">
        Designed with ❤️ by WorkBazaar Team
      </div>
    </footer>
  );
}

export default Footer;
