import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Star, Clock, CheckCircle, Package, Edit3, XCircle, AlertCircle } from "lucide-react";
import DashboardHeader from "@/components/dashboard/DashboardHeader";
import ReviewForm from "@/components/reviews/ReviewForm";

// Updated mock claimed products data with approval status
const claimedProducts = [
  {
    id: 1,
    name: "Premium Wireless Headphones",
    category: "Electronics",
    price: 299.99,
    reward: 15.00,
    image: "/placeholder.svg",
    description: "High-quality wireless headphones with noise cancellation",
    claimedAt: "2024-01-15",
    status: "pending", // pending, in-progress, submitted, approved, rejected
    dueDate: "2024-01-22",
    approvalStatus: null
  },
  {
    id: 2,
    name: "Smart Fitness Watch",
    category: "Electronics", 
    price: 199.99,
    reward: 12.00,
    image: "/placeholder.svg",
    description: "Track your fitness goals with this advanced smartwatch",
    claimedAt: "2024-01-10",
    status: "submitted",
    dueDate: "2024-01-17",
    reviewSubmitted: "2024-01-16",
    approvalStatus: "pending"
  },
  {
    id: 3,
    name: "Organic Coffee Beans",
    category: "Food & Beverage",
    price: 24.99,
    reward: 5.00,
    image: "/placeholder.svg",
    description: "Premium organic coffee beans from sustainable farms",
    claimedAt: "2024-01-05",
    status: "approved",
    dueDate: "2024-01-12",
    reviewSubmitted: "2024-01-11",
    approvalStatus: "approved"
  },
  {
    id: 4,
    name: "Bluetooth Speaker",
    category: "Electronics",
    price: 89.99,
    reward: 8.00,
    image: "/placeholder.svg",
    description: "Portable Bluetooth speaker with premium sound",
    claimedAt: "2024-01-08",
    status: "rejected",
    dueDate: "2024-01-15",
    reviewSubmitted: "2024-01-14",
    approvalStatus: "rejected"
  }
];

const Reviews = () => {
  const [selectedProduct, setSelectedProduct] = useState<number | null>(null);
  const [activeTab, setActiveTab] = useState("claimed");

  const getStatusColor = (status: string) => {
    switch (status) {
      case "pending": return "bg-yellow-100 text-yellow-800";
      case "in-progress": return "bg-blue-100 text-blue-800";
      case "submitted": return "bg-purple-100 text-purple-800";
      case "approved": return "bg-green-100 text-green-800";
      case "rejected": return "bg-red-100 text-red-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "pending": return <Clock className="w-4 h-4" />;
      case "in-progress": return <Edit3 className="w-4 h-4" />;
      case "submitted": return <AlertCircle className="w-4 h-4" />;
      case "approved": return <CheckCircle className="w-4 h-4" />;
      case "rejected": return <XCircle className="w-4 h-4" />;
      default: return <Package className="w-4 h-4" />;
    }
  };

  const getApprovalBadge = (approvalStatus: string | null) => {
    if (!approvalStatus) return null;
    
    switch (approvalStatus) {
      case "pending":
        return <Badge variant="outline" className="text-yellow-600 border-yellow-200 ml-2">Awaiting Approval</Badge>;
      case "approved":
        return <Badge variant="outline" className="text-green-600 border-green-200 ml-2">Approved</Badge>;
      case "rejected":
        return <Badge variant="outline" className="text-red-600 border-red-200 ml-2">Rejected</Badge>;
      default:
        return null;
    }
  };

  const pendingProducts = claimedProducts.filter(p => p.status === "pending");
  const inProgressProducts = claimedProducts.filter(p => p.status === "in-progress");
  const submittedProducts = claimedProducts.filter(p => p.status === "submitted");
  const completedProducts = claimedProducts.filter(p => p.status === "approved");

  const handleStartReview = (productId: number) => {
    setSelectedProduct(productId);
    setActiveTab("write-review");
  };

  if (selectedProduct && activeTab === "write-review") {
    const product = claimedProducts.find(p => p.id === selectedProduct);
    return (
      <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-amber-50">
        <DashboardHeader />
        <main className="container mx-auto px-4 py-8">
          <ReviewForm 
            product={product!} 
            onBack={() => {
              setSelectedProduct(null);
              setActiveTab("claimed");
            }}
          />
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-amber-50">
      <DashboardHeader />
      
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">My Reviews</h1>
          <p className="text-gray-600">Manage your claimed products and write reviews</p>
          <div className="mt-4 p-4 bg-blue-50 border border-blue-200 rounded-lg">
            <div className="flex items-start gap-2">
              <AlertCircle className="w-5 h-5 text-blue-600 mt-0.5" />
              <div className="text-sm text-blue-800">
                <p className="font-semibold">Review Approval Process</p>
                <p>All submitted reviews must be approved by our team before payment is processed. This ensures review quality and authenticity.</p>
              </div>
            </div>
          </div>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="claimed">All ({claimedProducts.length})</TabsTrigger>
            <TabsTrigger value="pending">Pending ({pendingProducts.length})</TabsTrigger>
            <TabsTrigger value="in-progress">In Progress ({inProgressProducts.length})</TabsTrigger>
            <TabsTrigger value="submitted">Submitted ({submittedProducts.length})</TabsTrigger>
            <TabsTrigger value="completed">Approved ({completedProducts.length})</TabsTrigger>
          </TabsList>

          <TabsContent value="claimed" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {claimedProducts.map((product) => (
                <Card key={product.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="aspect-video bg-gray-100 flex items-center justify-center">
                    <Package className="w-16 h-16 text-gray-400" />
                  </div>
                  
                  <CardHeader className="pb-3">
                    <div className="flex justify-between items-start mb-2">
                      <div className="flex items-center">
                        <Badge className={getStatusColor(product.status)}>
                          <div className="flex items-center gap-1">
                            {getStatusIcon(product.status)}
                            {product.status}
                          </div>
                        </Badge>
                        {getApprovalBadge(product.approvalStatus)}
                      </div>
                      <span className={`text-sm font-semibold ${
                        product.status === "approved" ? "text-green-600" : "text-amber-600"
                      }`}>
                        ${product.reward} {product.status === "approved" ? "earned" : "reward"}
                      </span>
                    </div>
                    
                    <CardTitle className="text-lg">{product.name}</CardTitle>
                    <CardDescription>{product.description}</CardDescription>
                  </CardHeader>
                  
                  <CardContent className="pt-0">
                    <div className="space-y-2 mb-4">
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-500">Claimed:</span>
                        <span>{new Date(product.claimedAt).toLocaleDateString()}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-500">Due:</span>
                        <span>{new Date(product.dueDate).toLocaleDateString()}</span>
                      </div>
                      {product.reviewSubmitted && (
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-500">Submitted:</span>
                          <span>{new Date(product.reviewSubmitted).toLocaleDateString()}</span>
                        </div>
                      )}
                    </div>
                    
                    {product.status === "pending" && (
                      <Button 
                        className="w-full bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600"
                        onClick={() => handleStartReview(product.id)}
                      >
                        <Edit3 className="w-4 h-4 mr-2" />
                        Start Review
                      </Button>
                    )}
                    
                    {product.status === "in-progress" && (
                      <Button 
                        className="w-full bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600"
                        onClick={() => handleStartReview(product.id)}
                      >
                        <Edit3 className="w-4 h-4 mr-2" />
                        Continue Review
                      </Button>
                    )}
                    
                    {product.status === "submitted" && (
                      <Button variant="outline" className="w-full" disabled>
                        <AlertCircle className="w-4 h-4 mr-2" />
                        Awaiting Approval
                      </Button>
                    )}
                    
                    {product.status === "approved" && (
                      <Button variant="outline" className="w-full" disabled>
                        <CheckCircle className="w-4 h-4 mr-2" />
                        Review Approved
                      </Button>
                    )}

                    {product.status === "rejected" && (
                      <div className="space-y-2">
                        <Button variant="outline" className="w-full text-red-600" disabled>
                          <XCircle className="w-4 h-4 mr-2" />
                          Review Rejected
                        </Button>
                        <p className="text-xs text-red-600 text-center">Contact support for more details</p>
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="pending" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {pendingProducts.map((product) => (
                <Card key={product.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="aspect-video bg-gray-100 flex items-center justify-center">
                    <Package className="w-16 h-16 text-gray-400" />
                  </div>
                  
                  <CardHeader className="pb-3">
                    <div className="flex justify-between items-start mb-2">
                      <Badge className={getStatusColor(product.status)}>
                        <div className="flex items-center gap-1">
                          {getStatusIcon(product.status)}
                          {product.status}
                        </div>
                      </Badge>
                      <span className="text-sm text-amber-600 font-semibold">${product.reward} reward</span>
                    </div>
                    
                    <CardTitle className="text-lg">{product.name}</CardTitle>
                    <CardDescription>{product.description}</CardDescription>
                  </CardHeader>
                  
                  <CardContent className="pt-0">
                    <Button 
                      className="w-full bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600"
                      onClick={() => handleStartReview(product.id)}
                    >
                      <Edit3 className="w-4 h-4 mr-2" />
                      Start Review
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="in-progress" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {inProgressProducts.map((product) => (
                <Card key={product.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="aspect-video bg-gray-100 flex items-center justify-center">
                    <Package className="w-16 h-16 text-gray-400" />
                  </div>
                  
                  <CardHeader className="pb-3">
                    <div className="flex justify-between items-start mb-2">
                      <Badge className={getStatusColor(product.status)}>
                        <div className="flex items-center gap-1">
                          {getStatusIcon(product.status)}
                          {product.status}
                        </div>
                      </Badge>
                      <span className="text-sm text-amber-600 font-semibold">${product.reward} reward</span>
                    </div>
                    
                    <CardTitle className="text-lg">{product.name}</CardTitle>
                    <CardDescription>{product.description}</CardDescription>
                  </CardHeader>
                  
                  <CardContent className="pt-0">
                    <Button 
                      className="w-full bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600"
                      onClick={() => handleStartReview(product.id)}
                    >
                      <Edit3 className="w-4 h-4 mr-2" />
                      Continue Review
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="submitted" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {submittedProducts.map((product) => (
                <Card key={product.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="aspect-video bg-gray-100 flex items-center justify-center">
                    <Package className="w-16 h-16 text-gray-400" />
                  </div>
                  
                  <CardHeader className="pb-3">
                    <div className="flex justify-between items-start mb-2">
                      <Badge className={getStatusColor(product.status)}>
                        <div className="flex items-center gap-1">
                          {getStatusIcon(product.status)}
                          {product.status}
                        </div>
                      </Badge>
                      {getApprovalBadge(product.approvalStatus)}
                    </div>
                    
                    <CardTitle className="text-lg">{product.name}</CardTitle>
                    <CardDescription>{product.description}</CardDescription>
                  </CardHeader>
                  
                  <CardContent className="pt-0">
                    <Button variant="outline" className="w-full" disabled>
                      <AlertCircle className="w-4 h-4 mr-2" />
                      Awaiting Approval
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="completed" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {completedProducts.map((product) => (
                <Card key={product.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="aspect-video bg-gray-100 flex items-center justify-center">
                    <Package className="w-16 h-16 text-gray-400" />
                  </div>
                  
                  <CardHeader className="pb-3">
                    <div className="flex justify-between items-start mb-2">
                      <Badge className={getStatusColor(product.status)}>
                        <div className="flex items-center gap-1">
                          {getStatusIcon(product.status)}
                          {product.status}
                        </div>
                      </Badge>
                      <span className="text-sm text-green-600 font-semibold">${product.reward} earned</span>
                    </div>
                    
                    <CardTitle className="text-lg">{product.name}</CardTitle>
                    <CardDescription>{product.description}</CardDescription>
                  </CardHeader>
                  
                  <CardContent className="pt-0">
                    <Button variant="outline" className="w-full" disabled>
                      <CheckCircle className="w-4 h-4 mr-2" />
                      Review Completed
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
};

export default Reviews;
