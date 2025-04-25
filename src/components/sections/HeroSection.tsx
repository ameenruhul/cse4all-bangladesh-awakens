
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-b from-white to-cse-softPurple py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <div className="lg:w-1/2 mb-12 lg:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-cse-dark leading-tight mb-6 animate-fade-in">
              CSE4ALL: Your Free Path to Mastering Computer Science in Bangladesh
            </h1>
            
            <p className="text-lg md:text-xl text-gray-700 mb-8 md:max-w-xl animate-fade-in" style={{ animationDelay: "0.2s" }}>
              Missed the chance to study Computer Science formally? CSE4ALL is here to bridge 
              the gap. We provide a guided, resource-based learning path for motivated 
              individuals in Bangladesh eager to build real-world CS skills – completely free of charge.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in" style={{ animationDelay: "0.3s" }}>
              <Button size="lg" className="bg-cse-purple hover:bg-cse-secondaryPurple text-white font-semibold py-3 px-8">
                Join the 2025 Batch
              </Button>
              
              <Button size="lg" variant="outline" className="border-cse-purple text-cse-purple hover:bg-cse-softPurple">
                Learn More
              </Button>
            </div>
          </div>
          
          <div className="lg:w-1/2 flex justify-center lg:justify-end animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <div className="relative">
              <div className="absolute -top-6 -left-6 w-64 h-64 bg-cse-softBlue rounded-full opacity-50 blur-2xl"></div>
              <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-cse-softPurple rounded-full opacity-50 blur-2xl"></div>
              <img 
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085" 
                alt="Computer Science Education" 
                className="rounded-lg shadow-xl relative z-10 w-full max-w-md"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
