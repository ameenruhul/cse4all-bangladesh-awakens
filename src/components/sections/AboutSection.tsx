
import { Button } from "@/components/ui/button";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-cse-dark">
            Why CSE4ALL Exists
          </h2>
          <div className="w-24 h-1 bg-cse-purple mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-lg text-gray-700 mb-6">
              In Bangladesh, countless bright minds – recent HSC graduates, university students in other fields, 
              individuals from non-science backgrounds – share a common dream: studying Computer Science. 
              Yet, many never get the chance.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              Whether due to dropping science early, missing out on college opportunities, or not securing 
              a spot in competitive university CS programs, the door often seems closed.
            </p>

            <h3 className="text-2xl font-semibold text-cse-dark mb-4 mt-10">Our Belief</h3>
            <ul className="space-y-4 mb-8">
              <li className="flex items-start">
                <span className="text-cse-purple mr-2 text-xl font-bold">•</span>
                <span className="text-gray-700">
                  <strong className="text-cse-dark">Computer Science is Teachable:</strong> Anyone with a genuine desire and dedication for self-learning can master CS concepts.
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-cse-purple mr-2 text-xl font-bold">•</span>
                <span className="text-gray-700">
                  <strong className="text-cse-dark">Prerequisites Aren't Everything:</strong> Especially in today's age of AI and abundant resources, rigid traditional prerequisites shouldn't be the only gateway.
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-cse-purple mr-2 text-xl font-bold">•</span>
                <span className="text-gray-700">
                  <strong className="text-cse-dark">Skills Trump Certificates:</strong> In the world of technology, what you can do often matters more than a piece of paper.
                </span>
              </li>
            </ul>

            <Button className="bg-cse-purple hover:bg-cse-secondaryPurple text-white mt-4">
              Our Vision
            </Button>
          </div>

          <div className="bg-cse-softPurple rounded-lg p-8">
            <h3 className="text-2xl font-semibold text-cse-dark mb-6">
              Is CSE4ALL Right for You?
            </h3>
            <p className="text-gray-700 mb-6">
              This program is designed specifically for individuals in Bangladesh who:
            </p>

            <ul className="space-y-4 mb-6">
              <li className="flex items-center">
                <div className="w-6 h-6 rounded-full bg-cse-purple flex items-center justify-center mr-3">
                  <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span>Are recent HSC graduates with a passion for CS</span>
              </li>
              <li className="flex items-center">
                <div className="w-6 h-6 rounded-full bg-cse-purple flex items-center justify-center mr-3">
                  <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span>Are university students wishing they could also study CS</span>
              </li>
              <li className="flex items-center">
                <div className="w-6 h-6 rounded-full bg-cse-purple flex items-center justify-center mr-3">
                  <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span>Come from non-science backgrounds but interested in tech</span>
              </li>
              <li className="flex items-center">
                <div className="w-6 h-6 rounded-full bg-cse-purple flex items-center justify-center mr-3">
                  <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span>Are highly motivated and eager to learn independently</span>
              </li>
            </ul>

            <p className="text-cse-dark font-semibold">
              The most important prerequisite is your commitment.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
