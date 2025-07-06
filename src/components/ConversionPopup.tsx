import React, { useState, useEffect } from "react";
import { X, Rabbit, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Dialog, DialogContent, DialogOverlay } from "@/components/ui/dialog";
import { Link } from "react-router-dom";

interface ConversionPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

const ConversionPopup: React.FC<ConversionPopupProps> = ({ isOpen, onClose }) => {
  const [email, setEmail] = useState("");

  useEffect(() => {
    // Load ConvertKit script
    const script = document.createElement('script');
    script.src = 'https://f.convertkit.com/ckjs/ck.5.js';
    script.async = true;
    document.head.appendChild(script);

    return () => {
      // Cleanup script on unmount
      const existingScript = document.querySelector('script[src="https://f.convertkit.com/ckjs/ck.5.js"]');
      if (existingScript) {
        document.head.removeChild(existingScript);
      }
    };
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const formData = new FormData();
      formData.append('email_address', email);
      
      const response = await fetch('https://app.kit.com/forms/8267941/subscriptions', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        // Success - redirect to newsletter page
        window.location.href = '/newsletter';
      } else {
        console.error('Failed to subscribe');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogOverlay className="bg-black/20" />
      <DialogContent className="max-w-lg mx-auto bg-[#F5F4FF] rounded-3xl p-0 shadow-2xl border-0 overflow-hidden max-h-[90vh]">
        <div className="overflow-y-auto max-h-[90vh] scrollbar-thin scrollbar-thumb-purple-300 scrollbar-track-gray-100">
          <div className="p-8 pt-10">
          {/* Icon */}
          <div className="flex justify-center mb-6">
            <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-purple-600 rounded-3xl flex items-center justify-center shadow-lg">
              <Rabbit className="h-10 w-10 text-white" />
            </div>
          </div>

          {/* Headline */}
          <div className="text-center mb-6">
            <h2 className="text-3xl font-bold text-gray-900 leading-tight mb-4">
              Get a $1000 Free Web Design for your Small Business
            </h2>
          </div>

          {/* Value Proposition */}
          <div className="text-center mb-8">
            <p className="text-gray-700 text-base leading-relaxed">
              Limited-time offer: Get a professional local website design for your small business completely free—courtesy of Web Design Bunny.
            </p>
          </div>

          {/* Benefits */}
          <div className="space-y-4 mb-8">
            <div className="flex items-center space-x-4">
              <div className="w-6 h-6 bg-green-500 rounded-md flex items-center justify-center flex-shrink-0">
                <Check className="h-4 w-4 text-white" />
              </div>
              <span className="text-gray-700 font-medium">
                Custom design tailored to your business
              </span>
            </div>
            <div className="flex items-center space-x-4">
              <div className="w-6 h-6 bg-green-500 rounded-md flex items-center justify-center flex-shrink-0">
                <Check className="h-4 w-4 text-white" />
              </div>
              <span className="text-gray-700 font-medium">
                Mobile-friendly and lightning-fast
              </span>
            </div>
            <div className="flex items-center space-x-4">
              <div className="w-6 h-6 bg-green-500 rounded-md flex items-center justify-center flex-shrink-0">
                <Check className="h-4 w-4 text-white" />
              </div>
              <span className="text-gray-700 font-medium">
                Ideal for local businesses
              </span>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="relative">
              <Input
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-6 py-4 border-2 border-gray-200 rounded-2xl focus:outline-none focus:ring-0 focus:border-purple-400 text-center text-base placeholder:text-gray-400 bg-gray-50"
                required
              />
            </div>
            <Button
              type="submit"
              className="w-full bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white font-bold text-lg py-5 rounded-2xl transition-all duration-200 shadow-lg hover:shadow-xl border-0"
            >
              Claim My Free Website Design
            </Button>
          </form>

          {/* Additional Disclaimer */}
          <div className="mt-6 p-4 border-2 border-yellow-300 rounded-xl bg-yellow-50">
            <p className="text-sm text-gray-700 text-center leading-relaxed">
              <span className="line-through text-gray-500">Regularly $1000</span>{" "}
              —{" "}
              <span className="text-purple-600 font-bold">
                now 100% free for a limited time.
              </span>{" "}
              Just enter your email above and unlock your professional website design package.
            </p>
          </div>
        </div>

        </div>

        {/* Disclaimer */}
        <div className="bg-yellow-100 px-8 py-6">
          <p className="text-sm text-gray-700 text-center leading-relaxed">
            <span className="font-bold">This is a limited-time offer for new subscribers only.</span>{" "}
            Enter your email above to claim your free website design before spots run out.
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ConversionPopup;