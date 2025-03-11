
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Bed, Bath, Maximize, ArrowRight, Star } from "lucide-react";

const properties = [
  {
    id: 1,
    title: "Modern Villa",
    price: "$850,000",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1770&q=80",
    beds: 4,
    baths: 3,
    sqft: "3,200",
    featured: true,
  },
  {
    id: 2,
    title: "Luxury Apartment",
    price: "$450,000",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=1770&q=80",
    beds: 2,
    baths: 2,
    sqft: "1,800",
    featured: false,
  },
  {
    id: 3,
    title: "Beach House",
    price: "$1,200,000",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1770&q=80",
    beds: 5,
    baths: 4,
    sqft: "4,500",
    featured: true,
  },
];

const Properties = () => {
  return (
    <section id="properties" className="py-20 bg-gradient-to-b from-white to-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Featured Properties</h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto mb-4"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore our handpicked selection of premium properties, each offering unique features and exceptional value.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {properties.map((property) => (
            <Card key={property.id} className="overflow-hidden group hover:shadow-lg transition-shadow border-t-4 border-t-blue-500">
              <div className="relative h-64">
                <img
                  src={property.image}
                  alt={property.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {property.featured && (
                  <div className="absolute top-3 left-3 bg-blue-500 text-white px-3 py-1 rounded-full text-xs font-semibold flex items-center">
                    <Star className="h-3 w-3 mr-1 fill-white" /> Featured
                  </div>
                )}
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-semibold">{property.title}</h3>
                  <span className="text-orange-500 font-bold">{property.price}</span>
                </div>
                <div className="flex items-center gap-4 text-gray-600 mb-6">
                  <div className="flex items-center">
                    <Bed className="h-4 w-4 mr-2 text-blue-400" />
                    <span>{property.beds} beds</span>
                  </div>
                  <div className="flex items-center">
                    <Bath className="h-4 w-4 mr-2 text-blue-400" />
                    <span>{property.baths} baths</span>
                  </div>
                  <div className="flex items-center">
                    <Maximize className="h-4 w-4 mr-2 text-blue-400" />
                    <span>{property.sqft} sqft</span>
                  </div>
                </div>
                <Button className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700">View Details</Button>
              </div>
            </Card>
          ))}
        </div>
        <div className="text-center mt-12">
          <Button variant="outline" size="lg" className="group border-blue-500 text-blue-600 hover:bg-blue-50">
            View All Properties
            <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Properties;
