
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=2075&q=80')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/60 to-black/40" />
      </div>
      <div className="container mx-auto px-4 z-10">
        <div className="max-w-2xl animate-fadeIn">
          <span className="inline-block bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-medium mb-4">Premium Properties</span>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Find Your Dream Home Today
          </h1>
          <p className="text-xl text-white/90 mb-8">
            Discover exceptional properties in prime locations. Your perfect home is just a click away.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white">
              View Properties
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-white hover:bg-blue-500/20 border-2"
            >
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
