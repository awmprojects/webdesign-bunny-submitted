
import { Smartphone, Zap, Globe, TrendingUp, Shield, Award, Palette, DollarSign, Clock } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Palette,
      title: "Beautiful Design",
      description: "Your website will look stunning and professional. We'll make sure your business stands out from the competition.",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: DollarSign,
      title: "Affordable Pricing",
      description: "Get a professional website without breaking the bank. Quality design that fits your budget, not the other way around.",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Clock,
      title: "Quick Delivery",
      description: "Your new website will be ready in just 3 days. No waiting months for results - we get you online fast.",
      color: "from-yellow-500 to-orange-500"
    },
    {
      icon: Smartphone,
      title: "Mobile-First Design",
      description: "Your website will look perfect on every device. More customers can find you whether they're on phone, tablet, or computer.",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Fast websites keep visitors happy and help you rank higher on Google. We build sites that load in seconds, not minutes.",
      color: "from-indigo-500 to-purple-500"
    },
    {
      icon: Globe,
      title: "SEO Optimized",
      description: "We build your website so customers can actually find you on Google. More visibility means more customers for your business.",
      color: "from-red-500 to-pink-500"
    }
  ];

  return (
    <section id="features" className="py-20 bg-gradient-to-br from-purple-50 via-white to-indigo-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 lg:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-3 lg:mb-4">
            <span className="bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
              Why Choose{" "}
            </span>
            <span className="bg-gradient-to-r from-purple-600 to-purple-700 bg-clip-text text-transparent">WebDesignBunny.com</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto px-4">
            We combine creative design with technical expertise to deliver websites that look amazing and perform perfectly.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-purple-100 hover:-translate-y-1"
            >
              <div className="mb-6">
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="w-7 h-7 text-white" />
                </div>
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {feature.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-purple-100 max-w-2xl mx-auto">
            <div className="text-6xl mb-4">🐰</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">
              The Web Design Bunny Promise
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Just like bunnies are known for being quick and energetic, 
              we deliver fast, beautiful web design experiences with results you can count on.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
