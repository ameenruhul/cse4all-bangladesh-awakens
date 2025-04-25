
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="bg-cse-dark text-white">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">
              CSE<span className="text-cse-purple">4</span>ALL
            </h3>
            <p className="text-gray-300">
              Creating alternative pathways to computer science education in Bangladesh.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#about" className="text-gray-300 hover:text-white transition-colors">About</a></li>
              <li><a href="#how-it-works" className="text-gray-300 hover:text-white transition-colors">How It Works</a></li>
              <li><a href="#join-us" className="text-gray-300 hover:text-white transition-colors">Join Us</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <p className="text-gray-300">
              Have questions? Feel free to reach out.
            </p>
            <Button className="mt-4 bg-cse-purple hover:bg-cse-secondaryPurple text-white">
              Contact Us
            </Button>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>© 2025 CSE4ALL | Privacy Policy | Terms of Service</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
