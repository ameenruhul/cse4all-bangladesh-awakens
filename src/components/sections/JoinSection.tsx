
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";

const JoinSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    background: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simple validation
    if (!formData.name || !formData.email || !formData.background) {
      toast({
        title: "Error",
        description: "Please fill in all fields",
        variant: "destructive",
      });
      return;
    }

    // Registration logic would go here in a real app
    console.log("Form submitted:", formData);
    
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
  };

  return (
    <section id="join-us" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-cse-dark">
              Ready to Start Your CS Journey?
            </h2>
            <p className="text-lg text-gray-700">
              We plan to launch our first batch in 2025. Register your interest now!
            </p>
            <div className="w-24 h-1 bg-cse-purple mx-auto mt-6"></div>
          </div>

          <div className="bg-cse-softPurple rounded-xl p-8 md:p-12 shadow-lg">
            <div className="grid grid-cols-1 md:grid-cols-5 gap-8 items-center">
              <div className="md:col-span-2">
                <h3 className="text-2xl font-bold text-cse-dark mb-4">
                  Join the 2025 Batch
                </h3>
                <p className="text-gray-700 mb-6">
                  Fill out this form to express your interest in the CSE4ALL program. We'll send you 
                  updates and information as we get closer to the launch date.
                </p>
                <div className="bg-cse-purple rounded-lg p-4 text-white">
                  <p className="font-medium">
                    Remember: This program requires serious commitment, but the rewards are worth it. 
                    Only register if you're ready for the challenge!
                  </p>
                </div>
              </div>

              <div className="md:col-span-3">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name</Label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="Enter your full name"
                      value={formData.name}
                      onChange={handleChange}
                      className="bg-white"
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="Enter your email"
                      value={formData.email}
                      onChange={handleChange}
                      className="bg-white"
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="background">Your Background</Label>
                    <select 
                      id="background"
                      name="background"
                      value={formData.background}
                      onChange={handleChange}
                      className="w-full p-2 border border-gray-300 rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-cse-purple"
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
                    className="w-full bg-cse-purple hover:bg-cse-secondaryPurple text-white py-3"
                  >
                    Register for the 2025 Batch
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JoinSection;
