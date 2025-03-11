
import { Facebook, Instagram, Twitter, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-semibold text-orange-500 mb-4">EstateElite</h3>
            <p className="text-gray-400">
              Your trusted partner in finding the perfect property. Building dreams, one home at a time.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#properties" className="text-gray-400 hover:text-orange-500 transition-colors">
                  Properties
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-400 hover:text-orange-500 transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#testimonials" className="text-gray-400 hover:text-orange-500 transition-colors">
                  Testimonials
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-orange-500 transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <ul className="space-y-2 text-gray-400">
              <li>123 Real Estate Avenue</li>
              <li>New York, NY 10001</li>
              <li>info@estateelite.com</li>
              <li>(555) 123-4567</li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-400 hover:text-orange-500 transition-colors"
              >
                <Facebook className="h-6 w-6" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-orange-500 transition-colors"
              >
                <Instagram className="h-6 w-6" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-orange-500 transition-colors"
              >
                <Twitter className="h-6 w-6" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-orange-500 transition-colors"
              >
                <Linkedin className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p className="mb-2">© 2024 EstateElite. All rights reserved.</p>
          <p className="text-sm">Developed by Pinnasi Siva Kumar</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
