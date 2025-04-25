
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="relative bg-black min-h-[90vh] flex items-center overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 left-10 w-72 h-72 rounded-full bg-cse-purple/10 blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 rounded-full bg-cse-neon/10 blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 py-16 z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
            <span className="gradient-text">CSE4ALL:</span> Your Free Path to <span className="gradient-text">Mastering</span> Computer Science
          </h1>
          
          <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Missed the chance to study Computer Science formally? CSE4ALL bridges 
            the gap with a guided, resource-based learning path for motivated 
            individuals in Bangladesh – completely free of charge.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-gradient-to-r from-cse-purple to-cse-neon hover:opacity-90 text-white font-semibold px-8 py-6 rounded-xl">
              Join the 2025 Batch
            </Button>
            
            <Button variant="outline" className="border border-cse-purple hover:border-cse-neon text-white hover:bg-black/20 rounded-xl px-8 py-6 gradient-border">
              Learn More
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
