
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Star, CheckCircle, XCircle, Eye, Clock, AlertTriangle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

// Mock pending reviews data (same as ReviewApproval page)
const pendingReviews = [
  {
    id: 1,
    reviewer: "John Doe",
    product: "Premium Wireless Headphones",
    rating: 5,
    title: "Excellent sound quality and comfort",
    review: "These headphones exceeded my expectations. The noise cancellation is top-notch and the battery life is impressive.",
    submittedDate: "2024-01-15",
    reward: 15.00,
    status: "pending"
  },
  {
    id: 2,
    reviewer: "Jane Smith",
    product: "Smart Fitness Watch",
    rating: 4,
    title: "Great features but could be better",
    review: "The fitness tracking is accurate and the interface is intuitive. However, the battery life could be improved.",
    submittedDate: "2024-01-14",
    reward: 12.00,
    status: "pending"
  },
  {
    id: 3,
    reviewer: "Mike Johnson",
    product: "Organic Coffee Beans",
    rating: 5,
    title: "Best coffee I've ever had",
    review: "The flavor is rich and complex. You can really taste the quality of these organic beans.",
    submittedDate: "2024-01-13",
    reward: 5.00,
    status: "pending"
  }
];

const ReviewManagement = () => {
  const { toast } = useToast();
  const [reviews, setReviews] = useState(pendingReviews);
  const [selectedReview, setSelectedReview] = useState<number | null>(null);

  const approveReview = (reviewId: number) => {
    setReviews(reviews.map(review => 
      review.id === reviewId 
        ? { ...review, status: "approved" }
        : review
    ));
    
    toast({
      title: "Review Approved",
      description: "The review has been approved and the user will be paid.",
    });
  };

  const rejectReview = (reviewId: number) => {
    setReviews(reviews.map(review => 
      review.id === reviewId 
        ? { ...review, status: "rejected" }
        : review
    ));
    
    toast({
      title: "Review Rejected",
      description: "The review has been rejected and the user will not be paid.",
      variant: "destructive",
    });
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "pending":
        return <Badge variant="outline" className="text-yellow-600 border-yellow-200"><Clock className="w-3 h-3 mr-1" />Pending</Badge>;
      case "approved":
        return <Badge variant="outline" className="text-green-600 border-green-200"><CheckCircle className="w-3 h-3 mr-1" />Approved</Badge>;
      case "rejected":
        return <Badge variant="outline" className="text-red-600 border-red-200"><XCircle className="w-3 h-3 mr-1" />Rejected</Badge>;
      default:
        return null;
    }
  };

  const pendingCount = reviews.filter(r => r.status === "pending").length;
  const approvedCount = reviews.filter(r => r.status === "approved").length;
  const rejectedCount = reviews.filter(r => r.status === "rejected").length;
  const totalReward = reviews.filter(r => r.status === "approved").reduce((sum, r) => sum + r.reward, 0);

  if (selectedReview) {
    const review = reviews.find(r => r.id === selectedReview);
    if (!review) return null;

    return (
      <div>
        <Button
          variant="outline"
          onClick={() => setSelectedReview(null)}
          className="mb-6"
        >
          ← Back to Reviews
        </Button>

        <Card>
          <CardHeader>
            <div className="flex justify-between items-start">
              <div>
                <CardTitle className="text-xl">{review.product}</CardTitle>
                <CardDescription>Review by {review.reviewer}</CardDescription>
              </div>
              {getStatusBadge(review.status)}
            </div>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="flex">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    className={`w-5 h-5 ${
                      star <= review.rating ? "fill-amber-400 text-amber-400" : "text-gray-300"
                    }`}
                  />
                ))}
              </div>
              <span className="font-semibold">{review.rating}/5 stars</span>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-2">{review.title}</h3>
              <p className="text-gray-700 leading-relaxed">{review.review}</p>
            </div>

            <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
              <div className="text-sm text-gray-600">
                <p>Submitted: {new Date(review.submittedDate).toLocaleDateString()}</p>
                <p>Reward: ${review.reward}</p>
              </div>
            </div>

            {review.status === "pending" && (
              <div className="flex gap-4">
                <Button
                  onClick={() => rejectReview(review.id)}
                  variant="outline"
                  className="flex-1 text-red-600 border-red-200 hover:bg-red-50"
                >
                  <XCircle className="w-4 h-4 mr-2" />
                  Reject Review
                </Button>
                <Button
                  onClick={() => approveReview(review.id)}
                  className="flex-1 bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600"
                >
                  <CheckCircle className="w-4 h-4 mr-2" />
                  Approve Review
                </Button>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-yellow-50 p-4 rounded-lg">
          <div className="flex items-center gap-2">
            <AlertTriangle className="w-5 h-5 text-yellow-600" />
            <span className="text-sm font-medium text-yellow-600">Pending Reviews</span>
          </div>
          <p className="text-2xl font-bold text-yellow-900">{pendingCount}</p>
        </div>
        <div className="bg-green-50 p-4 rounded-lg">
          <div className="flex items-center gap-2">
            <CheckCircle className="w-5 h-5 text-green-600" />
            <span className="text-sm font-medium text-green-600">Approved</span>
          </div>
          <p className="text-2xl font-bold text-green-900">{approvedCount}</p>
        </div>
        <div className="bg-red-50 p-4 rounded-lg">
          <div className="flex items-center gap-2">
            <XCircle className="w-5 h-5 text-red-600" />
            <span className="text-sm font-medium text-red-600">Rejected</span>
          </div>
          <p className="text-2xl font-bold text-red-900">{rejectedCount}</p>
        </div>
        <div className="bg-blue-50 p-4 rounded-lg">
          <div className="flex items-center gap-2">
            <Star className="w-5 h-5 text-blue-600" />
            <span className="text-sm font-medium text-blue-600">Total Rewards</span>
          </div>
          <p className="text-2xl font-bold text-blue-900">${totalReward}</p>
        </div>
      </div>

      <Tabs defaultValue="pending" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="pending">Pending ({pendingCount})</TabsTrigger>
          <TabsTrigger value="approved">Approved ({approvedCount})</TabsTrigger>
          <TabsTrigger value="rejected">Rejected ({rejectedCount})</TabsTrigger>
        </TabsList>

        <TabsContent value="pending" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Pending Reviews</CardTitle>
              <CardDescription>Reviews waiting for your approval</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Reviewer</TableHead>
                    <TableHead>Product</TableHead>
                    <TableHead>Rating</TableHead>
                    <TableHead>Submitted</TableHead>
                    <TableHead>Reward</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {reviews.filter(r => r.status === "pending").map((review) => (
                    <TableRow key={review.id}>
                      <TableCell className="font-medium">{review.reviewer}</TableCell>
                      <TableCell>{review.product}</TableCell>
                      <TableCell>
                        <div className="flex items-center gap-1">
                          <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                          {review.rating}
                        </div>
                      </TableCell>
                      <TableCell>{new Date(review.submittedDate).toLocaleDateString()}</TableCell>
                      <TableCell className="text-green-600 font-semibold">${review.reward}</TableCell>
                      <TableCell>
                        <div className="flex gap-2">
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={() => setSelectedReview(review.id)}
                          >
                            <Eye className="w-4 h-4 mr-1" />
                            View
                          </Button>
                          <Button
                            size="sm"
                            onClick={() => approveReview(review.id)}
                            className="bg-green-500 hover:bg-green-600 text-white"
                          >
                            <CheckCircle className="w-4 h-4 mr-1" />
                            Approve
                          </Button>
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={() => rejectReview(review.id)}
                            className="text-red-600 border-red-200 hover:bg-red-50"
                          >
                            <XCircle className="w-4 h-4 mr-1" />
                            Reject
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="approved" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Approved Reviews</CardTitle>
              <CardDescription>Reviews that have been approved for payment</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Reviewer</TableHead>
                    <TableHead>Product</TableHead>
                    <TableHead>Rating</TableHead>
                    <TableHead>Submitted</TableHead>
                    <TableHead>Reward</TableHead>
                    <TableHead>Status</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {reviews.filter(r => r.status === "approved").map((review) => (
                    <TableRow key={review.id}>
                      <TableCell className="font-medium">{review.reviewer}</TableCell>
                      <TableCell>{review.product}</TableCell>
                      <TableCell>
                        <div className="flex items-center gap-1">
                          <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                          {review.rating}
                        </div>
                      </TableCell>
                      <TableCell>{new Date(review.submittedDate).toLocaleDateString()}</TableCell>
                      <TableCell className="text-green-600 font-semibold">${review.reward}</TableCell>
                      <TableCell>{getStatusBadge(review.status)}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="rejected" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Rejected Reviews</CardTitle>
              <CardDescription>Reviews that have been rejected</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Reviewer</TableHead>
                    <TableHead>Product</TableHead>
                    <TableHead>Rating</TableHead>
                    <TableHead>Submitted</TableHead>
                    <TableHead>Reward</TableHead>
                    <TableHead>Status</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {reviews.filter(r => r.status === "rejected").map((review) => (
                    <TableRow key={review.id}>
                      <TableCell className="font-medium">{review.reviewer}</TableCell>
                      <TableCell>{review.product}</TableCell>
                      <TableCell>
                        <div className="flex items-center gap-1">
                          <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                          {review.rating}
                        </div>
                      </TableCell>
                      <TableCell>{new Date(review.submittedDate).toLocaleDateString()}</TableCell>
                      <TableCell className="text-gray-500">${review.reward}</TableCell>
                      <TableCell>{getStatusBadge(review.status)}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default ReviewManagement;
