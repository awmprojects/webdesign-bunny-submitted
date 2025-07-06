
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Star, Eye, ThumbsUp, DollarSign } from "lucide-react";

const RecentReviews = () => {
  const reviews = [
    {
      id: 1,
      product: "Wireless Noise-Canceling Headphones",
      rating: 5,
      earnings: "$8.50",
      status: "Published",
      views: 234,
      likes: 18,
      date: "2 days ago",
    },
    {
      id: 2,
      product: "Smart Home Security Camera",
      rating: 4,
      earnings: "$6.25",
      status: "Under Review",
      views: 0,
      likes: 0,
      date: "1 week ago",
    },
    {
      id: 3,
      product: "Ergonomic Office Chair",
      rating: 5,
      earnings: "$12.75",
      status: "Published",
      views: 456,
      likes: 32,
      date: "2 weeks ago",
    },
  ];

  return (
    <Card className="shadow-lg">
      <CardHeader>
        <CardTitle>Recent Reviews</CardTitle>
        <CardDescription>Your latest product reviews and their performance</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {reviews.map((review) => (
            <div key={review.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between mb-3">
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900 mb-1">{review.product}</h3>
                  <div className="flex items-center space-x-2 mb-2">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${
                            i < review.rating ? "text-yellow-400 fill-current" : "text-gray-300"
                          }`}
                        />
                      ))}
                    </div>
                    <Badge 
                      variant={review.status === "Published" ? "default" : "secondary"}
                      className={review.status === "Published" ? "bg-green-100 text-green-800" : ""}
                    >
                      {review.status}
                    </Badge>
                  </div>
                </div>
                <div className="text-right">
                  <div className="flex items-center text-green-600 font-semibold mb-1">
                    <DollarSign className="w-4 h-4 mr-1" />
                    {review.earnings}
                  </div>
                  <p className="text-xs text-gray-500">{review.date}</p>
                </div>
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4 text-sm text-gray-500">
                  <div className="flex items-center">
                    <Eye className="w-4 h-4 mr-1" />
                    {review.views} views
                  </div>
                  <div className="flex items-center">
                    <ThumbsUp className="w-4 h-4 mr-1" />
                    {review.likes} helpful
                  </div>
                </div>
                <Button variant="outline" size="sm">
                  View Review
                </Button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-6 text-center">
          <Button variant="outline" className="w-full">
            View All Reviews
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default RecentReviews;
