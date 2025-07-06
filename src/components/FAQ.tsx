

import { Plus, Minus } from "lucide-react";
import { Link } from "react-router-dom";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "What's your special offer for small businesses?",
      answer: "We're currently offering a Small Business Web Design Package for just $1,000 (normally $3,000 - that's 65% off!). This includes a professional small business website, mobile responsive design, onpage SEO optimization, and contact form integration. This is a limited time offer perfect for growing small businesses."
    },
    {
      question: "How long does it take to build a website?",
      answer: "Most websites are completed within 2-6 weeks depending on complexity. However, our $1,000 Small Business Web Design special offer includes 3-business-day delivery! Our Landing Pages typically take 1-2 weeks, Starter Websites take 2-3 weeks, while Business and E-commerce sites take 4-6 weeks. We provide a detailed timeline during your free consultation and keep you updated throughout the process."
    },
    {
      question: "What are your website design prices?",
      answer: "Our packages start at $1,500 for Landing Pages, $2,500 for Starter Websites, $5,000 for Business Websites, $8,000 for E-commerce sites, and $12,000 for Premium Packages. We also offer Website Redesigns starting at $3,500. Plus, don't miss our special Small Business Package for just $1,000 (65% off regular price)!"
    },
    {
      question: "What's included in your website packages?",
      answer: "All our packages include custom responsive design, mobile optimization, SEO setup, and professional development. Landing Pages are conversion-focused single pages, Starter Websites include up to 5 pages, Business packages include up to 10 pages with custom design and contact forms, E-commerce packages include online store functionality with payment integration, and Premium packages include unlimited pages with advanced features."
    },
    {
      question: "Do you offer ongoing website maintenance?",
      answer: "Yes! Our Website Maintenance service is $200/month and includes security updates, content updates, backup management, performance monitoring, and technical support. This ensures your website stays secure, fast, and up-to-date."
    },
    {
      question: "Can you help with SEO and getting more traffic?",
      answer: "Absolutely! We offer SEO Plans starting at $500/month that include keyword research, on-page optimization, content optimization, local SEO setup, and monthly reporting. All our websites also come with basic SEO optimization included."
    },
    {
      question: "Will my website work on mobile phones and tablets?",
      answer: "Yes, every website we build is fully responsive and mobile-first. Your site will look perfect and function flawlessly on all devices - smartphones, tablets, and desktop computers. Mobile optimization is included in all our packages."
    },
    {
      question: "Do you provide content writing for websites?",
      answer: "Yes! Our Content Creation service is $500/month and includes professional copywriting, SEO-optimized content, blog posts, and ongoing content updates. We can handle all your website content needs to ensure it engages visitors and ranks well on Google."
    },
    {
      question: "Can you build an online store for my business?",
      answer: "Definitely! Our E-commerce package starts at $8,000 and includes full online store setup, product management system, secure payment processing, inventory management, and mobile-optimized shopping experience. Perfect for businesses wanting to sell products online."
    },
    {
      question: "Do you offer social media management?",
      answer: "Yes! Our Social Media Plans start at $750/month and include complete social media management, content creation, posting schedule, engagement monitoring, and monthly analytics. This helps drive more traffic to your new website."
    },
    {
      question: "What happens after my website launches?",
      answer: "We provide 30 days of free support after launch for any minor adjustments or questions. After that, you can choose our monthly maintenance package ($200/month) or request updates as needed. We're always here to help your website grow with your business."
    },
    {
      question: "How do I get started with my web design project?",
      answer: "Getting started is easy! First, sign up for a free webdesignbunny.com account where you can place your order and choose the perfect package for your business."
    }
  ];

  return (
    <section id="faq" className="py-20 bg-gradient-to-br from-purple-50 via-white to-indigo-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
              Frequently Asked
            </span>{" "}
            <span className="bg-gradient-to-r from-purple-600 to-purple-700 bg-clip-text text-transparent">
              Questions
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Got questions about our web design services? We've got answers! 
            Just like bunnies are naturally curious, we know you have questions too. 🐰
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-3xl shadow-lg border border-purple-100 p-8">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`}
                  className="border border-purple-200 rounded-2xl px-6 py-2 bg-gradient-to-r from-purple-50 to-indigo-50"
                >
                  <AccordionTrigger className="text-left text-lg font-semibold text-gray-900 hover:text-purple-600 py-6">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 leading-relaxed pb-6">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>

        <div className="text-center mt-16">
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-purple-100 max-w-2xl mx-auto">
            <div className="text-6xl mb-4">🐰</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">
              Still Have Questions?
            </h3>
            <p className="text-gray-600 leading-relaxed mb-6">
              Can't find what you're looking for? We're as friendly and approachable as a bunny! 
              Get in touch and we'll be happy to answer any questions about your web design project.
            </p>
            <Link 
              to="/register"
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white rounded-full px-6 py-3 border border-purple-200 transition-all duration-200 transform hover:scale-105"
            >
              <span className="font-medium">
                📧 Contact us for a free consultation
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;

