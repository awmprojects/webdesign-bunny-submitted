
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Textarea } from "@/components/ui/textarea";
import { 
  Rabbit, 
  Star, 
  CheckCircle, 
  ArrowRight, 
  Globe, 
  Code, 
  Smartphone,
  Clock,
  DollarSign,
  Users
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import Header from "./Header";
import Footer from "./Footer";

const ConversionRegister = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    businessName: "",
    websiteType: "",
    projectDetails: "",
    budget: "",
    timeline: "",
    agreeToTerms: false,
  });
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.agreeToTerms) {
      toast({
        title: "Terms required",
        description: "Please agree to our terms to continue.",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);

    // Simulate registration process
    setTimeout(() => {
      toast({
        title: "🎉 Welcome to Web Design Bunny!",
        description: "We'll contact you within 24 hours to discuss your project!",
      });
      setIsLoading(false);
    }, 2000);
  };

  const benefits = [
    { icon: DollarSign, text: "Save 70% vs traditional agencies" },
    { icon: Clock, text: "72-hour delivery guarantee" },
    { icon: Users, text: "200+ satisfied clients" },
    { icon: CheckCircle, text: "100% satisfaction guarantee" }
  ];

  const packageOptions = [
    { name: "Starter Website", price: "$497", description: "Perfect for small businesses" },
    { name: "Professional Website", price: "$997", description: "Advanced features & e-commerce" },
    { name: "Enterprise Solution", price: "$1,997", description: "Custom development & integrations" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-indigo-50">
      <Header />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              
              {/* Left Column - Value Proposition */}
              <div className="space-y-8">
                <div className="text-center lg:text-left">
                  <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-100 to-purple-200 rounded-full px-4 py-2 mb-6">
                    <Star className="w-4 h-4 text-purple-600 fill-purple-600" />
                    <span className="text-sm font-medium text-purple-700">Limited Time Offer</span>
                  </div>
                  
                  <h1 className="text-4xl lg:text-5xl font-bold mb-6">
                    <span className="bg-gradient-to-r from-purple-800 to-purple-600 bg-clip-text text-transparent">
                      Get Your Dream Website
                    </span>
                    <br />
                    <span className="text-gray-900">In Just 72 Hours</span>
                  </h1>
                  
                  <p className="text-xl text-gray-600 mb-8">
                    Professional web design at affordable prices. No hidden fees, no surprises - just beautiful websites that convert visitors into customers.
                  </p>
                </div>

                {/* Benefits */}
                <div className="grid grid-cols-2 gap-4">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-center space-x-3 p-4 bg-white rounded-lg shadow-sm border border-purple-100">
                      <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                        <benefit.icon className="w-4 h-4 text-purple-600" />
                      </div>
                      <span className="text-sm font-medium text-gray-700">{benefit.text}</span>
                    </div>
                  ))}
                </div>

                {/* Package Options */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-gray-900">Choose Your Package:</h3>
                  {packageOptions.map((pkg, index) => (
                    <div key={index} className="flex items-center justify-between p-4 bg-white rounded-lg border border-purple-100 hover:border-purple-300 transition-colors">
                      <div>
                        <div className="font-medium text-gray-900">{pkg.name}</div>
                        <div className="text-sm text-gray-600">{pkg.description}</div>
                      </div>
                      <div className="text-xl font-bold text-purple-600">{pkg.price}</div>
                    </div>
                  ))}
                </div>

                {/* Social Proof */}
                <div className="bg-white rounded-lg p-6 border border-purple-100">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="flex space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-purple-400 text-purple-400" />
                      ))}
                    </div>
                    <span className="font-medium text-gray-900">5.0 Average Rating</span>
                  </div>
                  <p className="text-gray-600 italic">
                    "Web Design Bunny delivered exactly what we needed - fast, professional, and affordable. Our new website has increased our leads by 300%!"
                  </p>
                  <p className="text-sm text-gray-500 mt-2">- Sarah M., Small Business Owner</p>
                </div>
              </div>

              {/* Right Column - Registration Form */}
              <div className="bg-white rounded-2xl shadow-xl p-8 border border-purple-100">
                <div className="text-center mb-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-purple-700 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Rabbit className="w-8 h-8 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">Start Your Project Today</h2>
                  <p className="text-gray-600">Fill out the form below and we'll contact you within 24 hours</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name" className="text-sm font-medium text-gray-700">
                        Full Name *
                      </Label>
                      <Input
                        id="name"
                        type="text"
                        value={formData.name}
                        onChange={(e) => handleInputChange("name", e.target.value)}
                        placeholder="John Doe"
                        className="mt-1 border-gray-300 focus:border-purple-500 focus:ring-purple-500"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone" className="text-sm font-medium text-gray-700">
                        Phone Number
                      </Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => handleInputChange("phone", e.target.value)}
                        placeholder="(555) 123-4567"
                        className="mt-1 border-gray-300 focus:border-purple-500 focus:ring-purple-500"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="email" className="text-sm font-medium text-gray-700">
                      Email Address *
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      placeholder="john@example.com"
                      className="mt-1 border-gray-300 focus:border-purple-500 focus:ring-purple-500"
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="businessName" className="text-sm font-medium text-gray-700">
                      Business/Organization Name
                    </Label>
                    <Input
                      id="businessName"
                      type="text"
                      value={formData.businessName}
                      onChange={(e) => handleInputChange("businessName", e.target.value)}
                      placeholder="Your Business Name"
                      className="mt-1 border-gray-300 focus:border-purple-500 focus:ring-purple-500"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="budget" className="text-sm font-medium text-gray-700">
                        Budget Range
                      </Label>
                      <select
                        id="budget"
                        value={formData.budget}
                        onChange={(e) => handleInputChange("budget", e.target.value)}
                        className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 focus:border-purple-500 focus:ring-purple-500"
                      >
                        <option value="">Select budget</option>
                        <option value="under-500">Under $500</option>
                        <option value="500-1000">$500 - $1,000</option>
                        <option value="1000-2000">$1,000 - $2,000</option>
                        <option value="over-2000">Over $2,000</option>
                      </select>
                    </div>
                    <div>
                      <Label htmlFor="timeline" className="text-sm font-medium text-gray-700">
                        Timeline
                      </Label>
                      <select
                        id="timeline"
                        value={formData.timeline}
                        onChange={(e) => handleInputChange("timeline", e.target.value)}
                        className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 focus:border-purple-500 focus:ring-purple-500"
                      >
                        <option value="">Select timeline</option>
                        <option value="asap">ASAP</option>
                        <option value="1-2weeks">1-2 weeks</option>
                        <option value="1month">Within 1 month</option>
                        <option value="flexible">Flexible</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="projectDetails" className="text-sm font-medium text-gray-700">
                      Project Details
                    </Label>
                    <Textarea
                      id="projectDetails"
                      value={formData.projectDetails}
                      onChange={(e) => handleInputChange("projectDetails", e.target.value)}
                      placeholder="Tell us about your project, goals, and any specific requirements..."
                      className="mt-1 border-gray-300 focus:border-purple-500 focus:ring-purple-500"
                      rows={4}
                    />
                  </div>

                  <div className="flex items-start space-x-2">
                    <Checkbox
                      id="agree-terms"
                      checked={formData.agreeToTerms}
                      onCheckedChange={(checked) => handleInputChange("agreeToTerms", checked)}
                      className="mt-1"
                    />
                    <label htmlFor="agree-terms" className="text-sm text-gray-700">
                      I agree to the{" "}
                      <a href="#" className="font-medium text-purple-600 hover:text-purple-500">
                        Terms of Service
                      </a>{" "}
                      and{" "}
                      <a href="#" className="font-medium text-purple-600 hover:text-purple-500">
                        Privacy Policy
                      </a>
                    </label>
                  </div>

                  <Button
                    type="submit"
                    disabled={isLoading}
                    className="w-full bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white py-3 text-lg font-semibold"
                  >
                    {isLoading ? (
                      <div className="flex items-center space-x-2">
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        <span>Submitting...</span>
                      </div>
                    ) : (
                      <div className="flex items-center space-x-2">
                        <Rabbit className="w-5 h-5" />
                        <span>Start My Project Now</span>
                        <ArrowRight className="w-5 h-5" />
                      </div>
                    )}
                  </Button>

                  <div className="text-center text-sm text-gray-600">
                    <div className="flex items-center justify-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span>No upfront payment required</span>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default ConversionRegister;
