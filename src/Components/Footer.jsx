import React from 'react';

function Footer() {
  return (
    <footer className="bg-teal border-t-2 border-white absolute mt-auto w-full text-gray-300 p-8">
      <div className=" mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <h2 className="text-xl font-bold mb-2">Company Info</h2>
            <p>About Us</p>
            <p>Contact Us</p>
            <p>Blog</p>
          </div>
          <div>
            <h2 className="text-xl font-bold mb-2">Resources</h2>
            <p>Product 1</p>
            <p>Product 2</p>
            <p>Product 3</p>
          </div>
          <div>
            <h2 className="text-xl font-bold mb-2">Follow Us</h2>
            <p>Facebook</p>
            <p>Twitter</p>
            <p>Instagram</p>
          </div>
        </div>
        <div className="mt-8 text-center">
          &copy;  Velez Psychiatric Services. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
