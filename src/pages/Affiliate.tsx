
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Copy, Users, DollarSign, TrendingUp, Link, Share2, CheckCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import DashboardHeader from "@/components/dashboard/DashboardHeader";

// Mock affiliate data
const affiliateStats = {
  totalReferrals: 12,
  activeReferrals: 8,
  totalCommission: 245.50,
  pendingCommission: 67.25,
  thisMonthEarnings: 89.75
};

const referralHistory = [
  {
    id: 1,
    referralName: "John Smith",
    joinDate: "2024-01-15",
    status: "active",
    totalReviews: 15,
    siteFees: 45.00,
    yourCommission: 22.50,
    lastActivity: "2024-01-20"
  },
  {
    id: 2,
    referralName: "Sarah Johnson",
    joinDate: "2024-01-10",
    status: "active",
    totalReviews: 23,
    siteFees: 69.00,
    yourCommission: 34.50,
    lastActivity: "2024-01-19"
  },
  {
    id: 3,
    referralName: "Mike Wilson",
    joinDate: "2024-01-05",
    status: "inactive",
    totalReviews: 8,
    siteFees: 24.00,
    yourCommission: 12.00,
    lastActivity: "2024-01-12"
  }
];

const Affiliate = () => {
  const [referralCode] = useState("REF-JD2024");
  const [referralLink] = useState(`https://reviewplatform.com/register?ref=${referralCode}`);
  const { toast } = useToast();

  const copyToClipboard = (text: string, type: string) => {
    navigator.clipboard.writeText(text).then(() => {
      toast({
        title: `${type} Copied!`,
        description: `Your ${type.toLowerCase()} has been copied to clipboard.`,
      });
    });
  };

  const getStatusColor = (status: string) => {
    return status === "active" ? "bg-green-100 text-green-800" : "bg-gray-100 text-gray-800";
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-amber-50">
      <DashboardHeader />
      
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Affiliate Program</h1>
          <p className="text-gray-600">Earn 50% commission on site fees from your referrals</p>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Referrals</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{affiliateStats.totalReferrals}</div>
              <p className="text-xs text-muted-foreground">
                {affiliateStats.activeReferrals} active
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Earnings</CardTitle>
              <DollarSign className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">${affiliateStats.totalCommission}</div>
              <p className="text-xs text-muted-foreground">
                Lifetime commissions
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">This Month</CardTitle>
              <TrendingUp className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">${affiliateStats.thisMonthEarnings}</div>
              <p className="text-xs text-muted-foreground">
                Current month earnings
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Pending</CardTitle>
              <DollarSign className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">${affiliateStats.pendingCommission}</div>
              <p className="text-xs text-muted-foreground">
                Awaiting payment
              </p>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="overview" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3 max-w-md">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="referrals">Referrals</TabsTrigger>
            <TabsTrigger value="how-it-works">How It Works</TabsTrigger>
          </TabsList>

          <TabsContent value="overview">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Referral Tools */}
              <Card>
                <CardHeader>
                  <CardTitle>Your Referral Tools</CardTitle>
                  <CardDescription>Share these with potential referrals</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <label className="text-sm font-medium text-gray-700 mb-2 block">Referral Code</label>
                    <div className="flex items-center gap-2">
                      <code className="flex-1 px-3 py-2 bg-gray-100 rounded-md font-mono text-sm">
                        {referralCode}
                      </code>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => copyToClipboard(referralCode, "Referral Code")}
                      >
                        <Copy className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>

                  <div>
                    <label className="text-sm font-medium text-gray-700 mb-2 block">Referral Link</label>
                    <div className="flex items-center gap-2">
                      <input
                        type="text"
                        value={referralLink}
                        readOnly
                        className="flex-1 px-3 py-2 bg-gray-100 rounded-md text-sm"
                      />
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => copyToClipboard(referralLink, "Referral Link")}
                      >
                        <Copy className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>

                  <Button className="w-full bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600">
                    <Share2 className="w-4 h-4 mr-2" />
                    Share Referral Link
                  </Button>
                </CardContent>
              </Card>

              {/* Commission Structure */}
              <Card>
                <CardHeader>
                  <CardTitle>Commission Structure</CardTitle>
                  <CardDescription>How you earn from referrals</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                      <div>
                        <p className="font-medium text-blue-900">Site Fee</p>
                        <p className="text-sm text-blue-700">On business reviews</p>
                      </div>
                      <Badge variant="secondary" className="bg-blue-100 text-blue-800">10%</Badge>
                    </div>

                    <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                      <div>
                        <p className="font-medium text-green-900">Your Commission</p>
                        <p className="text-sm text-green-700">Of site fees (lifetime)</p>
                      </div>
                      <Badge variant="secondary" className="bg-green-100 text-green-800">50%</Badge>
                    </div>

                    <div className="mt-4 p-3 bg-amber-50 rounded-lg">
                      <p className="text-sm text-amber-800">
                        <strong>Example:</strong> If your referral earns $100 from a business review, 
                        the site fee is $10, and you earn $5 commission.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="referrals">
            <Card>
              <CardHeader>
                <CardTitle>Your Referrals</CardTitle>
                <CardDescription>Track your referrals and their activity</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {referralHistory.map((referral) => (
                    <div key={referral.id} className="border rounded-lg p-4">
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
                            <Users className="w-5 h-5 text-gray-600" />
                          </div>
                          <div>
                            <h3 className="font-medium">{referral.referralName}</h3>
                            <p className="text-sm text-gray-500">
                              Joined {new Date(referral.joinDate).toLocaleDateString()}
                            </p>
                          </div>
                        </div>
                        <Badge className={getStatusColor(referral.status)}>
                          {referral.status}
                        </Badge>
                      </div>

                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                        <div>
                          <p className="text-gray-500">Reviews</p>
                          <p className="font-medium">{referral.totalReviews}</p>
                        </div>
                        <div>
                          <p className="text-gray-500">Site Fees</p>
                          <p className="font-medium">${referral.siteFees}</p>
                        </div>
                        <div>
                          <p className="text-gray-500">Your Commission</p>
                          <p className="font-medium text-green-600">${referral.yourCommission}</p>
                        </div>
                        <div>
                          <p className="text-gray-500">Last Activity</p>
                          <p className="font-medium">{new Date(referral.lastActivity).toLocaleDateString()}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="how-it-works">
            <Card>
              <CardHeader>
                <CardTitle>How the Affiliate Program Works</CardTitle>
                <CardDescription>Everything you need to know about earning commissions</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
                    <div>
                      <h3 className="font-medium">Share Your Referral Link</h3>
                      <p className="text-sm text-gray-600">
                        Share your unique referral link or code with potential reviewers
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
                    <div>
                      <h3 className="font-medium">They Sign Up & Get Verified</h3>
                      <p className="text-sm text-gray-600">
                        New users register using your link and complete account verification
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
                    <div>
                      <h3 className="font-medium">They Write Business Reviews</h3>
                      <p className="text-sm text-gray-600">
                        Your referrals write reviews for businesses, earning money for each review
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
                    <div>
                      <h3 className="font-medium">You Earn Commission</h3>
                      <p className="text-sm text-gray-600">
                        Earn 50% of the 10% site fee on all business reviews they complete - forever!
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-orange-50 to-amber-50 p-4 rounded-lg">
                  <h3 className="font-medium text-orange-900 mb-2">Important Notes</h3>
                  <ul className="text-sm text-orange-800 space-y-1">
                    <li>• Commissions are calculated on business review site fees only</li>
                    <li>• Regular product reviews do not generate affiliate commissions</li>
                    <li>• Commissions are paid monthly for the previous month's activity</li>
                    <li>• Minimum payout threshold is $25</li>
                    <li>• Commission tracking is lifetime - no expiration</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
};

export default Affiliate;
