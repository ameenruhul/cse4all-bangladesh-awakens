
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="relative bg-hero-gradient min-h-[90vh] flex items-center overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 left-10 w-72 h-72 rounded-full bg-cse-purple/10 blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 rounded-full bg-cse-neon/10 blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 py-16 z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:w-1/2"
          >
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
              <span className="gradient-text">CSE4ALL:</span> Your Free Path to <span className="gradient-text">Mastering</span> Computer Science
            </h1>
            
            <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-xl">
              Missed the chance to study Computer Science formally? CSE4ALL bridges 
              the gap with a guided, resource-based learning path for motivated 
              individuals in Bangladesh – completely free of charge.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-gradient-to-r from-cse-purple to-cse-neon hover:opacity-90 text-white font-semibold px-8 py-6 rounded-xl">
                Join the 2025 Batch
              </Button>
              
              <Button variant="outline" className="border border-cse-purple hover:border-cse-neon text-white hover:bg-black/20 rounded-xl px-8 py-6 gradient-border">
                Learn More
              </Button>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:w-1/2 flex justify-center lg:justify-end"
          >
            <div className="relative">
              <div className="absolute -top-6 -left-6 w-64 h-64 bg-cse-purple/30 rounded-full blur-2xl"></div>
              <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-cse-neon/30 rounded-full blur-2xl"></div>
              <div className="relative z-10 p-2 border border-white/10 rounded-2xl glass-card animate-glow">
                <img 
                  src="https://images.unsplash.com/photo-1498050108023-c5249f4df085" 
                  alt="Computer Science Education" 
                  className="rounded-xl w-full max-w-md object-cover"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
