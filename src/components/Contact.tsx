
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Mail, Phone, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Have questions about our properties? Contact us today and our team will be happy to assist you.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <Mail className="h-6 w-6 text-orange-500" />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-1">Email Us</h3>
                <p className="text-gray-600">info@estateelite.com</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <Phone className="h-6 w-6 text-orange-500" />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-1">Call Us</h3>
                <p className="text-gray-600">(555) 123-4567</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <MapPin className="h-6 w-6 text-orange-500" />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-1">Visit Us</h3>
                <p className="text-gray-600">
                  123 Real Estate Avenue<br />
                  New York, NY 10001
                </p>
              </div>
            </div>
            <div className="h-64 bg-gray-200 rounded-lg">
              {/* Map placeholder - Replace with actual map implementation */}
              <div className="w-full h-full rounded-lg overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.15830921454!2d-74.11976409167904!3d40.69766374862956!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2s!4v1645454229625!5m2!1sen!2s"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                ></iframe>
              </div>
            </div>
          </div>
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <Input placeholder="Your Name" className="w-full" />
              </div>
              <div>
                <Input type="email" placeholder="Your Email" className="w-full" />
              </div>
            </div>
            <div>
              <Input type="tel" placeholder="Your Phone" className="w-full" />
            </div>
            <div>
              <Textarea placeholder="Your Message" className="w-full min-h-[150px]" />
            </div>
            <Button className="w-full bg-orange-500 hover:bg-orange-600">Send Message</Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
