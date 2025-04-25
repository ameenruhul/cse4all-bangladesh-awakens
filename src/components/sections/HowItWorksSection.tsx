
import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const HowItWorksSection = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="how-it-works" className="py-20 bg-black relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-40 right-20 w-96 h-96 rounded-full bg-cse-purple/10 blur-3xl"></div>
        <div className="absolute bottom-40 left-20 w-96 h-96 rounded-full bg-cse-neon/10 blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 z-10 relative">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          variants={fadeInUp}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">
            Your Learning Journey with CSE4ALL
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            CSE4ALL offers a unique, structured approach to self-learning that empowers 
            you to acquire university-level CS skills in your own time.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-cse-purple to-cse-neon mx-auto mt-6"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {howItWorksData.map((item, index) => (
            <motion.div
              key={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              variants={fadeInUp}
            >
              <Card className="border-0 glass-card hover:shadow-lg hover:shadow-cse-purple/20 transition-shadow bg-card-gradient">
                <CardHeader className="text-white border-b border-white/10">
                  <div className="w-12 h-12 bg-gradient-to-br from-cse-purple to-cse-neon rounded-full flex items-center justify-center mb-4">
                    {item.icon}
                  </div>
                  <CardTitle className="text-white">{item.title}</CardTitle>
                </CardHeader>
                <CardContent className="pt-6">
                  <CardDescription className="text-gray-300 text-base">
                    {item.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="mt-20">
          <motion.h3 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            variants={fadeInUp}
            className="text-2xl md:text-3xl font-bold mb-8 text-center gradient-text"
          >
            Building Your Future with Skills
          </motion.h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              variants={fadeInUp}
              className="glass-card p-8 rounded-xl"
            >
              <h4 className="text-xl font-semibold mb-4 gradient-text">
                What You'll Gain
              </h4>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-cse-neon mt-1 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-gray-300">
                    <strong className="text-white">In-Demand CS Skills:</strong> Gain practical knowledge relevant to the tech world.
                  </span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-cse-neon mt-1 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-gray-300">
                    <strong className="text-white">Strong Foundation:</strong> Acquire understanding comparable to traditional CS students.
                  </span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-cse-neon mt-1 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-gray-300">
                    <strong className="text-white">Demonstrate Abilities:</strong> Build proof of your competence through rigorous assessments.
                  </span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-cse-neon mt-1 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-gray-300">
                    <strong className="text-white">Unlock Potential:</strong> Position yourself for future opportunities where skills matter.
                  </span>
                </li>
              </ul>
            </motion.div>
            
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              variants={fadeInUp}
              className="glass-card p-8 rounded-xl"
            >
              <h4 className="text-xl font-semibold mb-4 gradient-text">
                Are You Ready for the Challenge?
              </h4>
              <p className="text-gray-300 mb-4">
                We want to be upfront: while CSE4ALL provides the path and resources, success depends entirely on you.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-amber-400 mt-1 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                  <span className="text-gray-300">
                    <strong className="text-white">It Requires Discipline:</strong> This demands significant self-motivation and persistence.
                  </span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-amber-400 mt-1 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                  <span className="text-gray-300">
                    <strong className="text-white">Daily Effort:</strong> You need to dedicate time daily to study and complete assignments.
                  </span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-amber-400 mt-1 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                  <span className="text-gray-300">
                    <strong className="text-white">Active Learning:</strong> You must engage with material and push to understand complex topics.
                  </span>
                </li>
              </ul>
              <p className="mt-4 text-gray-300 font-medium">
                This is a serious commitment, but one with incredible potential rewards for those who persevere.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

const howItWorksData = [
  {
    title: "No Traditional Classes",
    description: "We don't conduct lectures. Instead, we provide guidance and structure for your self-directed learning journey.",
    icon: (
      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
      </svg>
    )
  },
  {
    title: "Curated Resources",
    description: "You'll receive carefully selected existing learning materials – high-quality videos, articles, tutorials, and more.",
    icon: (
      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
      </svg>
    )
  },
  {
    title: "Structured Learning",
    description: "You will have regular homework assignments and exams to test your understanding and track your progress.",
    icon: (
      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
      </svg>
    )
  },
  {
    title: "Self-Paced Learning",
    description: "There are no fixed years or semesters. However, you need to learn efficiently and progress at a consistent pace.",
    icon: (
      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  },
  {
    title: "Completely Free",
    description: "There is absolutely no cost to participate in this program. Our mission is to democratize CS education.",
    icon: (
      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  },
  {
    title: "Build Your Portfolio",
    description: "Through practical assignments and projects, you'll build a portfolio that showcases your skills to potential employers.",
    icon: (
      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    )
  },
];

export default HowItWorksSection;
