
import { Shield, Map, HeartHandshake, Users } from "lucide-react";
import { Card } from "./ui/card";

const features = [
  {
    icon: Shield,
    title: "Trusted Agency",
    description: "Over 10 years of experience and thousands of satisfied customers.",
    color: "blue",
  },
  {
    icon: Map,
    title: "Prime Locations",
    description: "Properties in the most desirable and sought-after neighborhoods.",
    color: "orange",
  },
  {
    icon: HeartHandshake,
    title: "Expert Support",
    description: "Professional guidance throughout your real estate journey.",
    color: "blue",
  },
  {
    icon: Users,
    title: "Community Focus",
    description: "Building lasting relationships within thriving communities.",
    color: "orange",
  },
];

const Features = () => {
  return (
    <section id="about" className="py-20 relative overflow-hidden">
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-100 rounded-full opacity-50"></div>
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-orange-100 rounded-full opacity-50"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Why Choose Us</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-orange-500 mx-auto mb-4"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Experience the difference with our comprehensive real estate services and dedicated team of professionals.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="p-6 text-center hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2 border-none"
            >
              <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full ${feature.color === "blue" ? "bg-blue-100 text-blue-500" : "bg-orange-100 text-orange-500"} mb-4 group-hover:scale-110 transition-transform`}>
                <feature.icon className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
