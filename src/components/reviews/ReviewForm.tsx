
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Star, ArrowLeft, Package, AlertCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  reward: number;
  image: string;
  description: string;
  claimedAt: string;
  status: string;
  dueDate: string;
}

interface ReviewFormProps {
  product: Product;
  onBack: () => void;
}

const ReviewForm = ({ product, onBack }: ReviewFormProps) => {
  const [rating, setRating] = useState(0);
  const [hoveredRating, setHoveredRating] = useState(0);
  const [title, setTitle] = useState("");
  const [review, setReview] = useState("");
  const [pros, setPros] = useState("");
  const [cons, setCons] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (rating === 0) {
      toast({
        title: "Rating Required",
        description: "Please select a star rating for this product.",
        variant: "destructive",
      });
      return;
    }

    if (!title.trim() || !review.trim()) {
      toast({
        title: "Required Fields Missing",
        description: "Please fill in both the title and review text.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));

    toast({
      title: "Review Submitted Successfully!",
      description: `Your review for ${product.name} has been submitted and is awaiting manager approval. You'll be paid once it's approved.`,
    });

    console.log("Review submitted:", {
      productId: product.id,
      rating,
      title,
      review,
      pros,
      cons,
      status: "submitted" // This would update the product status to "submitted"
    });

    setIsSubmitting(false);
    onBack();
  };

  return (
    <div className="max-w-4xl mx-auto">
      <Button
        variant="outline"
        onClick={onBack}
        className="mb-6"
      >
        <ArrowLeft className="w-4 h-4 mr-2" />
        Back to Reviews
      </Button>

      {/* Approval Process Info */}
      <div className="mb-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
        <div className="flex items-start gap-2">
          <AlertCircle className="w-5 h-5 text-blue-600 mt-0.5" />
          <div className="text-sm text-blue-800">
            <p className="font-semibold">Review Approval Process</p>
            <p>Your review will be submitted to our managers for approval. Payment will be processed once your review is approved. This typically takes 1-3 business days.</p>
          </div>
        </div>
      </div>

      <Card className="mb-6">
        <CardHeader>
          <div className="flex items-start gap-4">
            <div className="w-20 h-20 bg-gray-100 rounded-lg flex items-center justify-center flex-shrink-0">
              <Package className="w-8 h-8 text-gray-400" />
            </div>
            <div className="flex-1">
              <CardTitle className="text-xl mb-2">{product.name}</CardTitle>
              <CardDescription className="text-base">{product.description}</CardDescription>
              <div className="flex items-center gap-4 mt-2 text-sm text-gray-600">
                <span>Price: ${product.price}</span>
                <span>Reward: ${product.reward}</span>
                <span>Due: {new Date(product.dueDate).toLocaleDateString()}</span>
              </div>
            </div>
          </div>
        </CardHeader>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Write Your Review</CardTitle>
          <CardDescription>
            Share your honest experience with this product to help other customers make informed decisions.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Star Rating */}
            <div className="space-y-2">
              <Label>Overall Rating *</Label>
              <div className="flex items-center gap-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    type="button"
                    className="focus:outline-none"
                    onMouseEnter={() => setHoveredRating(star)}
                    onMouseLeave={() => setHoveredRating(0)}
                    onClick={() => setRating(star)}
                  >
                    <Star
                      className={`w-8 h-8 transition-colors ${
                        star <= (hoveredRating || rating)
                          ? "fill-amber-400 text-amber-400"
                          : "text-gray-300"
                      }`}
                    />
                  </button>
                ))}
                <span className="ml-2 text-sm text-gray-600">
                  {rating > 0 && `${rating} out of 5 stars`}
                </span>
              </div>
            </div>

            {/* Review Title */}
            <div className="space-y-2">
              <Label htmlFor="title">Review Title *</Label>
              <input
                id="title"
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Summarize your experience in a few words"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                maxLength={100}
              />
              <p className="text-xs text-gray-500">{title.length}/100 characters</p>
            </div>

            {/* Review Text */}
            <div className="space-y-2">
              <Label htmlFor="review">Your Review *</Label>
              <Textarea
                id="review"
                value={review}
                onChange={(e) => setReview(e.target.value)}
                placeholder="Share your detailed experience with this product. What did you like? How did it perform? Would you recommend it to others?"
                className="min-h-32 resize-none"
                maxLength={2000}
              />
              <p className="text-xs text-gray-500">{review.length}/2000 characters</p>
            </div>

            {/* Pros */}
            <div className="space-y-2">
              <Label htmlFor="pros">What did you like? (Optional)</Label>
              <Textarea
                id="pros"
                value={pros}
                onChange={(e) => setPros(e.target.value)}
                placeholder="List the positive aspects of this product"
                className="min-h-20 resize-none"
                maxLength={500}
              />
              <p className="text-xs text-gray-500">{pros.length}/500 characters</p>
            </div>

            {/* Cons */}
            <div className="space-y-2">
              <Label htmlFor="cons">What could be improved? (Optional)</Label>
              <Textarea
                id="cons"
                value={cons}
                onChange={(e) => setCons(e.target.value)}
                placeholder="List any areas where the product could be better"
                className="min-h-20 resize-none"
                maxLength={500}
              />
              <p className="text-xs text-gray-500">{cons.length}/500 characters</p>
            </div>

            {/* Submit Button */}
            <div className="flex gap-4 pt-4">
              <Button
                type="button"
                variant="outline"
                onClick={onBack}
                disabled={isSubmitting}
                className="flex-1"
              >
                Cancel
              </Button>
              <Button
                type="submit"
                disabled={isSubmitting}
                className="flex-1 bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600"
              >
                {isSubmitting ? "Submitting..." : "Submit for Approval"}
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default ReviewForm;
