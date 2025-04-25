
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const AboutSection = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="about" className="py-20 bg-cse-darkBg">
      <div className="container mx-auto px-4">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          variants={fadeInUp}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">
            Why CSE4ALL Exists
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cse-purple to-cse-neon mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            variants={fadeInUp}
          >
            <p className="text-lg text-gray-300 mb-6">
              In Bangladesh, countless bright minds – recent HSC graduates, university students in other fields, 
              individuals from non-science backgrounds – share a common dream: studying Computer Science. 
              Yet, many never get the chance.
            </p>
            <p className="text-lg text-gray-300 mb-6">
              Whether due to dropping science early, missing out on college opportunities, or not securing 
              a spot in competitive university CS programs, the door often seems closed.
            </p>

            <h3 className="text-2xl font-semibold gradient-text mb-4 mt-10">Our Belief</h3>
            <ul className="space-y-4 mb-8">
              <li className="flex items-start">
                <span className="text-cse-neon mr-3 text-xl">•</span>
                <span className="text-gray-300">
                  <strong className="text-white">Computer Science is Teachable:</strong> Anyone with a genuine desire and dedication for self-learning can master CS concepts.
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-cse-neon mr-3 text-xl">•</span>
                <span className="text-gray-300">
                  <strong className="text-white">Prerequisites Aren't Everything:</strong> Especially in today's age of AI and abundant resources, rigid traditional prerequisites shouldn't be the only gateway.
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-cse-neon mr-3 text-xl">•</span>
                <span className="text-gray-300">
                  <strong className="text-white">Skills Trump Certificates:</strong> In the world of technology, what you can do often matters more than a piece of paper.
                </span>
              </li>
            </ul>

            <Button className="bg-gradient-to-r from-cse-purple to-cse-neon hover:opacity-90 rounded-xl">
              Our Vision
            </Button>
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            variants={fadeInUp}
            className="glass-card rounded-xl p-8"
          >
            <h3 className="text-2xl font-semibold gradient-text mb-6">
              Is CSE4ALL Right for You?
            </h3>
            <p className="text-gray-300 mb-6">
              This program is designed specifically for individuals in Bangladesh who:
            </p>

            <ul className="space-y-4 mb-6">
              <li className="flex items-center">
                <div className="w-6 h-6 rounded-full bg-gradient-to-r from-cse-purple to-cse-neon flex items-center justify-center mr-3">
                  <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-gray-300">Are recent HSC graduates with a passion for CS</span>
              </li>
              <li className="flex items-center">
                <div className="w-6 h-6 rounded-full bg-gradient-to-r from-cse-purple to-cse-neon flex items-center justify-center mr-3">
                  <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-gray-300">Are university students wishing they could also study CS</span>
              </li>
              <li className="flex items-center">
                <div className="w-6 h-6 rounded-full bg-gradient-to-r from-cse-purple to-cse-neon flex items-center justify-center mr-3">
                  <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-gray-300">Come from non-science backgrounds but interested in tech</span>
              </li>
              <li className="flex items-center">
                <div className="w-6 h-6 rounded-full bg-gradient-to-r from-cse-purple to-cse-neon flex items-center justify-center mr-3">
                  <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-gray-300">Are highly motivated and eager to learn independently</span>
              </li>
            </ul>

            <p className="text-white font-semibold">
              The most important prerequisite is your commitment.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
