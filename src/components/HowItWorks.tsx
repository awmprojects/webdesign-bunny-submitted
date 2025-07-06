
import { MessageSquare, Palette, Code, Rocket } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      icon: MessageSquare,
      title: "Discovery Call",
      description: "We discuss your vision, goals, and requirements. Understanding your business is our first priority!",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Palette,
      title: "Design & Prototype",
      description: "Our team creates stunning mockups and prototypes that bring your vision to life with style.",
      color: "from-purple-500 to-violet-500"
    },
    {
      icon: Code,
      title: "Development",
      description: "We build your website with clean, responsive code that works perfectly across all devices.",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Rocket,
      title: "Launch & Support",
      description: "Your website goes live with ongoing support and maintenance to keep it running smoothly!",
      color: "from-purple-600 to-purple-700"
    }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
              Our Design Process
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            From concept to launch in 4 simple steps. We make web design as smooth as a bunny hop! 🐰
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className="relative group"
            >
              {/* Connection line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-purple-200 to-transparent z-0" />
              )}
              
              <div className="relative z-10 text-center p-6 rounded-2xl bg-gradient-to-br from-purple-50 to-indigo-50 border border-purple-100 hover:shadow-lg transition-all duration-300 group-hover:scale-105">
                <div className="mb-6">
                  <div className={`w-16 h-16 mx-auto rounded-full bg-gradient-to-br ${step.color} flex items-center justify-center shadow-lg`}>
                    <step.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center text-sm font-bold shadow-lg">
                    {index + 1}
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {step.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-100 to-indigo-100 rounded-full px-6 py-3 border border-purple-200">
            <span className="text-2xl">🐰</span>
            <span className="text-purple-800 font-medium">
              Professional web design made simple and stress-free!
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
