
import { Menu } from "lucide-react";
import { Button } from "./ui/button";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <a href="#" className="text-xl font-semibold text-orange-500">
            EstateElite
          </a>
          <div className="hidden md:flex items-center space-x-8">
            <a href="#properties" className="text-gray-600 hover:text-orange-500 transition-colors">
              Properties
            </a>
            <a href="#about" className="text-gray-600 hover:text-orange-500 transition-colors">
              About
            </a>
            <a href="#testimonials" className="text-gray-600 hover:text-orange-500 transition-colors">
              Testimonials
            </a>
            <a href="#contact" className="text-gray-600 hover:text-orange-500 transition-colors">
              Contact
            </a>
            <Button className="bg-orange-500 hover:bg-orange-600 text-white">
              Get Started
            </Button>
          </div>
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="h-6 w-6" />
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
