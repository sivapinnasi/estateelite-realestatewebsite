
import { Shield, Map, HeartHandshake, Users } from "lucide-react";
import { Card } from "./ui/card";

const features = [
  {
    icon: Shield,
    title: "Trusted Agency",
    description: "Over 10 years of experience and thousands of satisfied customers.",
  },
  {
    icon: Map,
    title: "Prime Locations",
    description: "Properties in the most desirable and sought-after neighborhoods.",
  },
  {
    icon: HeartHandshake,
    title: "Expert Support",
    description: "Professional guidance throughout your real estate journey.",
  },
  {
    icon: Users,
    title: "Community Focus",
    description: "Building lasting relationships within thriving communities.",
  },
];

const Features = () => {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Why Choose Us</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Experience the difference with our comprehensive real estate services and dedicated team of professionals.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="p-6 text-center hover:shadow-lg transition-shadow group"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-orange-100 text-orange-500 mb-4 group-hover:scale-110 transition-transform">
                <feature.icon className="h-6 w-6" />
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
