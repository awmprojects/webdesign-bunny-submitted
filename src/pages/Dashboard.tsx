import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Palette, TrendingUp, Star, Users, Plus, Settings, LogOut, Bell, Globe, Briefcase, Gift, Clock, CheckCircle } from "lucide-react";
import DashboardStats from "@/components/dashboard/DashboardStats";
import RecentReviews from "@/components/dashboard/RecentReviews";
import QuickActions from "@/components/dashboard/QuickActions";
import DashboardHeader from "@/components/dashboard/DashboardHeader";
import CountdownTimer from "@/components/CountdownTimer";
import { Link } from "react-router-dom";
const Dashboard = () => {
  return <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-amber-50">
      <DashboardHeader />
      
      <main className="container mx-auto px-4 py-8">
        {/* Free Credit Hero Section */}
        <div className="mb-8 bg-gradient-to-r from-orange-500 via-orange-600 to-amber-500 rounded-2xl p-6 md:p-8 text-white shadow-2xl">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start space-x-2 mb-3">
                <Gift className="w-8 h-8 text-yellow-300" />
                <span className="text-yellow-300 font-bold text-lg">LIMITED TIME OFFER</span>
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-black mb-3">Utilize Your FREE Web Design Credit!</h1>
              <p className="text-lg md:text-xl text-orange-100 mb-4 max-w-2xl">Claim your complimentary $1000 web design credit and transform your online presence with CAPYBARA's professional design services.</p>
              <div className="flex items-center justify-center md:justify-start space-x-4 text-sm mb-4">
                <div className="flex items-center space-x-1">
                  <CheckCircle className="w-4 h-4 text-green-300" />
                  <span>No strings attached</span>
                </div>
                <div className="flex items-center space-x-1">
                  <CheckCircle className="w-4 h-4 text-green-300" />
                  <span>Professional quality</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Clock className="w-4 h-4 text-yellow-300" />
                  <span>24hr turnaround</span>
                </div>
              </div>
              {/* Countdown Timer */}
              <div className="bg-black/20 rounded-lg p-4 backdrop-blur-sm">
                <div className="text-center">
                  <p className="text-yellow-300 font-semibold mb-2">Offer expires in:</p>
                  <CountdownTimer />
                </div>
              </div>
            </div>
            <div className="flex flex-col space-y-3">
              <Button asChild size="lg" className="bg-white text-orange-600 hover:bg-orange-50 font-bold text-lg px-8 py-4 h-auto shadow-lg transform hover:scale-105 transition-all duration-200">
                <Link to="/claim-credit">
                  <Gift className="w-6 h-6 mr-2" />
                  CLAIM FREE CREDIT NOW
                </Link>
              </Button>
              <p className="text-xs text-orange-200 text-center">
                ⏰ Hurry! Time is running out
              </p>
            </div>
          </div>
        </div>

        <div className="mb-2 sm:mb-4">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Your CAPYBARA Web Design Dashboard</h2>
          <p className="text-gray-600">Track your website projects, monitor progress, and manage your web design services with CAPYBARA</p>
        </div>

        <DashboardStats />

        <div className="mb-2 sm:mb-8">
          <QuickActions />
        </div>

        {/* Credit Benefits Section */}
        <div className="mb-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="border-orange-200 bg-gradient-to-br from-orange-50 to-orange-100">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-amber-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Palette className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Professional Design</h3>
              <p className="text-gray-600 text-sm">Custom website designs tailored to your brand and business needs</p>
            </CardContent>
          </Card>
          
          <Card className="border-green-200 bg-gradient-to-br from-green-50 to-emerald-100">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Fast Delivery</h3>
              <p className="text-gray-600 text-sm">Get your website design completed within 24-48 hours</p>
            </CardContent>
          </Card>
          
          <Card className="border-blue-200 bg-gradient-to-br from-blue-50 to-indigo-100">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Guaranteed Quality</h3>
              <p className="text-gray-600 text-sm">100% satisfaction guarantee with unlimited revisions</p>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="projects" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3 max-w-md">
            <TabsTrigger value="projects">Active Projects</TabsTrigger>
            <TabsTrigger value="completed">Completed</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
          </TabsList>
          
          <TabsContent value="projects">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Briefcase className="w-5 h-5" />
                  <span>Active CAPYBARA Web Design Projects</span>
                </CardTitle>
                <CardDescription>Your current website development projects with CAPYBARA</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {/* Free Credit Project Placeholder */}
                  <div className="flex items-center justify-between p-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg border-2 border-green-200 border-dashed">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-emerald-500 rounded-xl flex items-center justify-center">
                        <Gift className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900">Your FREE Web Design Project</h3>
                        <p className="text-sm text-gray-600">Ready to start - claim your $500 credit now</p>
                        <div className="flex items-center space-x-2 mt-1">
                          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                          <span className="text-xs text-green-600 font-medium">Ready to Start</span>
                        </div>
                      </div>
                    </div>
                    <Button asChild className="bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600">
                      <Link to="/claim-credit">
                        <Gift className="w-4 h-4 mr-2" />
                        Claim Now
                      </Link>
                    </Button>
                  </div>
                  
                  <div className="flex items-center justify-between p-4 bg-gradient-to-r from-orange-50 to-amber-50 rounded-lg border">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-amber-500 rounded-xl flex items-center justify-center">
                        <Globe className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900">E-commerce Website</h3>
                        <p className="text-sm text-gray-600">Modern online store with payment integration</p>
                        <div className="flex items-center space-x-2 mt-1">
                          <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                          <span className="text-xs text-orange-600 font-medium">In Progress - 75%</span>
                        </div>
                      </div>
                    </div>
                    <Button size="sm" className="bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600">
                      View Details
                    </Button>
                  </div>
                  
                  <div className="flex items-center justify-between p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg border">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-xl flex items-center justify-center">
                        <Palette className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900">Portfolio Website</h3>
                        <p className="text-sm text-gray-600">Creative showcase for digital artist</p>
                        <div className="flex items-center space-x-2 mt-1">
                          <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                          <span className="text-xs text-blue-600 font-medium">Design Phase - 45%</span>
                        </div>
                      </div>
                    </div>
                    <Button size="sm" variant="outline">
                      View Details
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="completed">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Star className="w-5 h-5" />
                  <span>Completed CAPYBARA Projects</span>
                </CardTitle>
                <CardDescription>Successfully delivered websites by CAPYBARA and client testimonials</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg border">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-emerald-500 rounded-xl flex items-center justify-center">
                        <Globe className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900">Restaurant Website</h3>
                        <p className="text-sm text-gray-600">Complete redesign with online ordering</p>
                        <div className="flex items-center space-x-2 mt-1">
                          <div className="flex text-yellow-400">
                            <Star className="w-3 h-3 fill-current" />
                            <Star className="w-3 h-3 fill-current" />
                            <Star className="w-3 h-3 fill-current" />
                            <Star className="w-3 h-3 fill-current" />
                            <Star className="w-3 h-3 fill-current" />
                          </div>
                          <span className="text-xs text-gray-600">5.0 rating</span>
                        </div>
                      </div>
                    </div>
                    <Button size="sm" variant="outline">
                      View Project
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="analytics">
            <Card>
              <CardHeader>
                <CardTitle>CAPYBARA Web Design Analytics</CardTitle>
                <CardDescription>Performance insights for your CAPYBARA web design projects</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="text-center p-6 bg-gradient-to-br from-orange-50 to-amber-50 rounded-lg">
                    <TrendingUp className="w-8 h-8 text-orange-600 mx-auto mb-2" />
                    <h3 className="font-semibold text-gray-900">Client Satisfaction</h3>
                    <p className="text-2xl font-bold text-orange-600">4.9/5</p>
                    <p className="text-sm text-gray-600">Average project rating</p>
                  </div>
                  <div className="text-center p-6 bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg">
                    <Users className="w-8 h-8 text-green-600 mx-auto mb-2" />
                    <h3 className="font-semibold text-gray-900">Repeat Clients</h3>
                    <p className="text-2xl font-bold text-green-600">73%</p>
                    <p className="text-sm text-gray-600">Return for additional projects</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Bottom CTA Section - Improved Mobile Design */}
        <div className="mt-8 sm:mt-12 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 text-white text-center">
          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2 sm:mb-4 leading-tight">
            Don't Miss Out on Your 
            <br className="sm:hidden" />
            <span className="block sm:inline"> FREE $500 Credit!</span>
          </h3>
          <p className="text-purple-100 mb-4 sm:mb-6 text-sm sm:text-base md:text-lg leading-relaxed max-w-2xl mx-auto px-2 sm:px-0">
            Join thousands of satisfied clients who've transformed their online presence with CAPYBARA
          </p>
          <Button asChild size="lg" className="bg-white text-purple-600 hover:bg-purple-50 font-bold text-base sm:text-lg md:text-xl px-6 sm:px-8 md:px-12 py-3 sm:py-4 h-auto shadow-lg w-full sm:w-auto max-w-sm sm:max-w-none mx-auto">
            <Link to="/claim-credit">
              <Gift className="w-5 h-5 sm:w-6 sm:h-6 mr-2 flex-shrink-0" />
              <span className="truncate">Claim Your Free Credit Today</span>
            </Link>
          </Button>
          <p className="text-purple-200 mt-3 sm:mt-4 text-xs sm:text-sm">⚡ Limited time offer - Act now!</p>
        </div>
      </main>
    </div>;
};
export default Dashboard;