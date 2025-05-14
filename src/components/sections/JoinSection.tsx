import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";
import { firestore } from "@/integrations/firebase/client";
import { collection, addDoc } from "firebase/firestore";
import { motion } from "framer-motion";

const JoinSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    background: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simple validation
    if (!formData.name || !formData.email || !formData.background) {
      toast({
        title: "Error",
        description: "Please fill in all fields",
        variant: "destructive",
      });
      setIsSubmitting(false);
      return;
    }

    try {
      // Add document to Firestore collection
      await addDoc(collection(firestore, "registrations"), {
        name: formData.name,
        email: formData.email,
        background: formData.background,
        createdAt: new Date()
      });

      toast({
        title: "Registration Successful!",
        description: "Thank you for your interest in CSE4ALL. We will contact you with further details.",
      });
      
      // Reset form
      setFormData({
        name: "",
        email: "",
        background: "",
      });
    } catch (error) {
      console.error('Registration error:', error);
      toast({
        title: "Registration Failed",
        description: "An error occurred. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="join-us" className="py-20 bg-cse-darkBg relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 z-0">
        <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-black to-transparent"></div>
        <div className="absolute top-40 left-20 w-96 h-96 rounded-full bg-cse-purple/10 blur-3xl"></div>
        <div className="absolute bottom-40 right-20 w-96 h-96 rounded-full bg-cse-neon/10 blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          variants={fadeInUp}
          className="max-w-4xl mx-auto"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">
              Ready to Start Your CS Journey?
            </h2>
            <p className="text-lg text-gray-300">
              We plan to launch our first batch in 2025. Register your interest now!
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-cse-purple to-cse-neon mx-auto mt-6"></div>
          </div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            variants={fadeInUp}
            className="glass-card rounded-xl p-8 md:p-12 border border-white/10"
          >
            <div className="grid grid-cols-1 md:grid-cols-5 gap-8 items-center">
              <div className="md:col-span-2">
                <h3 className="text-2xl font-bold gradient-text mb-4">
                  Join the 2025 Batch
                </h3>
                <p className="text-gray-300 mb-6">
                  Fill out this form to express your interest in the CSE4ALL program. We'll send you 
                  updates and information as we get closer to the launch date.
                </p>
                <div className="bg-gradient-to-r from-cse-purple to-cse-neon p-[1px] rounded-lg">
                  <div className="bg-black/80 backdrop-blur-sm rounded-lg p-4 text-white">
                    <p className="font-medium">
                      Remember: This program requires serious commitment, but the rewards are worth it. 
                      Only register if you're ready for the challenge!
                    </p>
                  </div>
                </div>
              </div>

              <div className="md:col-span-3">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-white">Full Name</Label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="Enter your full name"
                      value={formData.name}
                      onChange={handleChange}
                      className="bg-cse-darkAccent border-white/10 text-white"
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-white">Email Address</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="Enter your email"
                      value={formData.email}
                      onChange={handleChange}
                      className="bg-cse-darkAccent border-white/10 text-white"
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="background" className="text-white">Your Background</Label>
                    <select 
                      id="background"
                      name="background"
                      value={formData.background}
                      onChange={handleChange}
                      className="w-full p-2 border bg-cse-darkAccent border-white/10 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-cse-purple"
                      required
                    >
                      <option value="">Select your background</option>
                      <option value="hsc">Recent HSC Graduate</option>
                      <option value="university">University Student (Non-CS)</option>
                      <option value="professional">Working Professional</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full bg-gradient-to-r from-cse-purple to-cse-neon hover:opacity-90 text-white py-3 rounded-xl"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Registering..." : "Register for the 2025 Batch"}
                  </Button>
                </form>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default JoinSection;
