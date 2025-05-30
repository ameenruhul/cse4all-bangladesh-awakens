
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="relative bg-black min-h-[90vh] flex items-center overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 left-10 w-72 h-72 rounded-full bg-primary/10 blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 rounded-full bg-white/10 blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 py-16 z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          <div className="flex justify-center mb-8">
            <img 
              src="/lovable-uploads/39f31937-d2c2-48fd-9ed4-af411633da06.png" 
              alt="CSE4ALL Logo" 
              className="h-24 w-auto" 
            />
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
            <span className="gradient-text">CSE4ALL:</span> Your Free Path to <span className="gradient-text">Mastering</span> Computer Science
          </h1>
          
          <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Missed the chance to study Computer Science formally? CSE4ALL bridges 
            the gap with a guided, resource-based learning path for motivated 
            individuals in Bangladesh – completely free of charge.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-gradient-to-r from-[#ea384c] to-white hover:opacity-90 text-white font-semibold px-8 py-6 rounded-xl">
              Join the 2025 Batch
            </Button>
            
            <Button variant="outline" className="border border-[#ea384c] hover:border-white text-white hover:bg-black/20 rounded-xl px-8 py-6 gradient-border">
              Learn More
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
