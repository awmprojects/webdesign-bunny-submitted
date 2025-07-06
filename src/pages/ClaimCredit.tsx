import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Gift, CheckCircle, Clock, Palette, Sparkles } from "lucide-react";
import CountdownTimer from "@/components/CountdownTimer";
import { useToast } from "@/hooks/use-toast";
import Header from "@/components/Header";

const ClaimCredit = () => {
  const {
    toast
  } = useToast();
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    businessName: '',
    websiteType: '',
    currentWebsite: '',
    projectDescription: '',
    timeline: '',
    budget: ''
  });
  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Basic validation
    if (!formData.fullName || !formData.email || !formData.websiteType) {
      toast({
        title: "Please fill in required fields",
        description: "Name, email, and website type are required.",
        variant: "destructive"
      });
      return;
    }
    toast({
      title: "Credit Claim Submitted! 🎉",
      description: "We'll contact you within 24 hours to get started on your free web design project."
    });
    console.log('Form submitted:', formData);
  };
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-amber-50">
      <Header />

      <main className="container mx-auto px-4 py-8 pt-24">
        {/* Hero Section */}
        

        {/* Form Section */}
        <Card className="max-w-4xl mx-auto shadow-xl">
          <CardHeader className="text-center">
            <CardTitle className="flex items-center justify-center space-x-2 text-2xl">
              <Sparkles className="w-6 h-6 text-orange-500" />
              <span>Claim Your Free Web Design Credit</span>
            </CardTitle>
            <CardDescription className="text-lg">
              Fill out the form below and we'll get started on your free website design project
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Personal Information */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-gray-900 border-b pb-2">Personal Information</h3>
                  
                  <div>
                    <Label htmlFor="fullName">Full Name *</Label>
                    <Input id="fullName" value={formData.fullName} onChange={e => handleInputChange('fullName', e.target.value)} placeholder="Enter your full name" className="mt-1" required />
                  </div>

                  <div>
                    <Label htmlFor="email">Email Address *</Label>
                    <Input id="email" type="email" value={formData.email} onChange={e => handleInputChange('email', e.target.value)} placeholder="your@email.com" className="mt-1" required />
                  </div>

                  <div>
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input id="phone" type="tel" value={formData.phone} onChange={e => handleInputChange('phone', e.target.value)} placeholder="(555) 123-4567" className="mt-1" />
                  </div>

                  <div>
                    <Label htmlFor="businessName">Business/Organization Name</Label>
                    <Input id="businessName" value={formData.businessName} onChange={e => handleInputChange('businessName', e.target.value)} placeholder="Your business name" className="mt-1" />
                  </div>
                </div>

                {/* Project Information */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-gray-900 border-b pb-2">Project Information</h3>
                  
                  <div>
                    <Label htmlFor="websiteType">Type of Website Needed *</Label>
                    <Select onValueChange={value => handleInputChange('websiteType', value)}>
                      <SelectTrigger className="mt-1">
                        <SelectValue placeholder="Select website type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="business">Business Website</SelectItem>
                        <SelectItem value="ecommerce">E-commerce Store</SelectItem>
                        <SelectItem value="portfolio">Portfolio/Personal</SelectItem>
                        <SelectItem value="blog">Blog/Content Site</SelectItem>
                        <SelectItem value="landing">Landing Page</SelectItem>
                        <SelectItem value="nonprofit">Non-profit</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="currentWebsite">Current Website (if any)</Label>
                    <Input id="currentWebsite" value={formData.currentWebsite} onChange={e => handleInputChange('currentWebsite', e.target.value)} placeholder="https://yourwebsite.com" className="mt-1" />
                  </div>

                  <div>
                    <Label htmlFor="timeline">Preferred Timeline</Label>
                    <Select onValueChange={value => handleInputChange('timeline', value)}>
                      <SelectTrigger className="mt-1">
                        <SelectValue placeholder="Select timeline" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="asap">ASAP</SelectItem>
                        <SelectItem value="1week">Within 1 week</SelectItem>
                        <SelectItem value="2weeks">Within 2 weeks</SelectItem>
                        <SelectItem value="1month">Within 1 month</SelectItem>
                        <SelectItem value="flexible">Flexible</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>

              {/* Project Description */}
              <div>
                <Label htmlFor="projectDescription">Project Description</Label>
                <Textarea id="projectDescription" value={formData.projectDescription} onChange={e => handleInputChange('projectDescription', e.target.value)} placeholder="Tell us about your project, goals, target audience, and any specific requirements..." className="mt-1 min-h-[120px]" />
              </div>

              {/* Additional Budget */}
              <div>
                <Label htmlFor="budget">Additional Budget (Beyond Free Credit)</Label>
                <Select onValueChange={value => handleInputChange('budget', value)}>
                  <SelectTrigger className="mt-1">
                    <SelectValue placeholder="Select budget range" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="free-only">Just the free $500 credit</SelectItem>
                    <SelectItem value="500-1000">$500 - $1,000</SelectItem>
                    <SelectItem value="1000-2500">$1,000 - $2,500</SelectItem>
                    <SelectItem value="2500-5000">$2,500 - $5,000</SelectItem>
                    <SelectItem value="5000+">$5,000+</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Submit Button - Mobile Optimized */}
              <div className="pt-6 px-2 sm:px-0">
                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white font-bold text-base sm:text-lg py-4 sm:py-5 h-auto shadow-lg min-h-[56px] sm:min-h-[64px] px-4 sm:px-6 rounded-lg sm:rounded-xl transition-all duration-200 active:scale-95 touch-manipulation"
                >
                  <Gift className="w-5 h-5 sm:w-6 sm:h-6 mr-2 flex-shrink-0" />
                  <span className="text-center leading-tight">
                    <span className="block sm:inline">Claim My FREE $500</span>
                    <span className="block sm:inline sm:ml-1">Web Design Credit</span>
                  </span>
                </Button>
                <p className="text-center text-xs sm:text-sm text-gray-600 mt-3 px-2 sm:px-0 leading-relaxed">
                  🔒 Your information is secure and will only be used to contact you about your free web design project
                </p>
              </div>
            </form>
          </CardContent>
        </Card>

        {/* Trust Indicators */}
        <div className="mt-12 text-center">
          <p className="text-lg font-semibold text-gray-900 mb-4">Join 500+ satisfied clients who've claimed their free credit</p>
          <div className="flex justify-center items-center space-x-8 text-sm text-gray-600">
            <div className="flex items-center space-x-2">
              <CheckCircle className="w-4 h-4 text-green-500" />
              <span>No contracts</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle className="w-4 h-4 text-green-500" />
              <span>No hidden fees</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle className="w-4 h-4 text-green-500" />
              <span>100% satisfaction guarantee</span>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ClaimCredit;
