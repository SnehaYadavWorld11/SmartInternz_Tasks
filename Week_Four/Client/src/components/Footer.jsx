import React from 'react';

function Footer() {
  return (
    <footer className="bg-gray-100 text-center py-8 mt-auto border-t">
      <p className="text-blue-800 text-lg font-semibold">
        &copy; 2025 MyShop. All rights reserved.
      </p>
      <div className="mt-4 flex justify-center space-x-6">
        <a
          href="https://www.instagram.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-800 hover:text-blue-600 transition-colors text-xl"
        >
          Instagram
        </a>
        <a
          href="https://www.twitter.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-800 hover:text-blue-600 transition-colors text-xl"
        >
          Twitter
        </a>
        <a
          href="https://www.facebook.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-800 hover:text-blue-600 transition-colors text-xl"
        >
          Facebook
        </a>
      </div>
    </footer>
  );
}

export default Footer;
