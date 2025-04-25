
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="bg-black text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-cse-darkBg to-transparent"></div>
        <div className="absolute top-20 right-20 w-80 h-80 rounded-full bg-cse-purple/5 blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 py-12 md:py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">
              CSE<span className="gradient-text">4</span>ALL
            </h3>
            <p className="text-gray-400">
              Creating alternative pathways to computer science education in Bangladesh.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 gradient-text">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-gray-400 hover:text-cse-neon transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#how-it-works" className="text-gray-400 hover:text-cse-neon transition-colors">
                  How It Works
                </a>
              </li>
              <li>
                <a href="#join-us" className="text-gray-400 hover:text-cse-neon transition-colors">
                  Join Us
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 gradient-text">Contact</h3>
            <p className="text-gray-400">
              Have questions? Feel free to reach out.
            </p>
            <Button className="mt-4 bg-gradient-to-r from-cse-purple to-cse-neon hover:opacity-90 rounded-xl">
              Contact Us
            </Button>
          </div>
        </div>
        
        <div className="border-t border-white/10 mt-12 pt-8 text-center text-gray-500">
          <p>© 2025 CSE4ALL | Privacy Policy | Terms of Service</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
