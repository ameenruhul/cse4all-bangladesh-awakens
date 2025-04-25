
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const HowItWorksSection = () => {
  return (
    <section id="how-it-works" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-cse-dark">
            Your Learning Journey with CSE4ALL
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            CSE4ALL offers a unique, structured approach to self-learning that empowers 
            you to acquire university-level CS skills in your own time.
          </p>
          <div className="w-24 h-1 bg-cse-purple mx-auto mt-6"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {howItWorksData.map((item, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className={`text-white ${item.bgColor}`}>
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mb-4">
                  {item.icon}
                </div>
                <CardTitle>{item.title}</CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <CardDescription className="text-gray-700 text-base">
                  {item.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-20">
          <h3 className="text-2xl md:text-3xl font-bold mb-8 text-center text-cse-dark">
            Building Your Future with Skills
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h4 className="text-xl font-semibold mb-4 text-cse-purple">
                What You'll Gain
              </h4>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-cse-purple mt-1 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-gray-700">
                    <strong>In-Demand CS Skills:</strong> Gain practical knowledge relevant to the tech world.
                  </span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-cse-purple mt-1 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-gray-700">
                    <strong>Strong Foundation:</strong> Acquire understanding comparable to traditional CS students.
                  </span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-cse-purple mt-1 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-gray-700">
                    <strong>Demonstrate Abilities:</strong> Build proof of your competence through rigorous assessments.
                  </span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-cse-purple mt-1 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-gray-700">
                    <strong>Unlock Potential:</strong> Position yourself for future opportunities where skills matter.
                  </span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h4 className="text-xl font-semibold mb-4 text-cse-purple">
                Are You Ready for the Challenge?
              </h4>
              <p className="text-gray-700 mb-4">
                We want to be upfront: while CSE4ALL provides the path and resources, success depends entirely on you.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-amber-500 mt-1 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                  <span className="text-gray-700">
                    <strong>It Requires Discipline:</strong> This demands significant self-motivation and persistence.
                  </span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-amber-500 mt-1 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                  <span className="text-gray-700">
                    <strong>Daily Effort:</strong> You need to dedicate time daily to study and complete assignments.
                  </span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-amber-500 mt-1 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                  <span className="text-gray-700">
                    <strong>Active Learning:</strong> You must engage with material and push to understand complex topics.
                  </span>
                </li>
              </ul>
              <p className="mt-4 text-gray-700 font-medium">
                This is a serious commitment, but one with incredible potential rewards for those who persevere.
              </p>
            </div>
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
    bgColor: "bg-cse-purple",
    icon: (
      <svg className="w-6 h-6 text-cse-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
      </svg>
    )
  },
  {
    title: "Curated Resources",
    description: "You'll receive carefully selected existing learning materials – high-quality videos, articles, tutorials, and more.",
    bgColor: "bg-cse-secondaryPurple",
    icon: (
      <svg className="w-6 h-6 text-cse-secondaryPurple" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
      </svg>
    )
  },
  {
    title: "Structured Learning",
    description: "You will have regular homework assignments and exams to test your understanding and track your progress.",
    bgColor: "bg-cse-tertiaryPurple",
    icon: (
      <svg className="w-6 h-6 text-cse-tertiaryPurple" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
      </svg>
    )
  },
  {
    title: "Self-Paced Learning",
    description: "There are no fixed years or semesters. However, you need to learn efficiently and progress at a consistent pace.",
    bgColor: "bg-cse-tertiaryPurple",
    icon: (
      <svg className="w-6 h-6 text-cse-tertiaryPurple" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  },
  {
    title: "Completely Free",
    description: "There is absolutely no cost to participate in this program. Our mission is to democratize CS education.",
    bgColor: "bg-cse-secondaryPurple",
    icon: (
      <svg className="w-6 h-6 text-cse-secondaryPurple" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  },
  {
    title: "Build Your Portfolio",
    description: "Through practical assignments and projects, you'll build a portfolio that showcases your skills to potential employers.",
    bgColor: "bg-cse-purple",
    icon: (
      <svg className="w-6 h-6 text-cse-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    )
  },
];

export default HowItWorksSection;
