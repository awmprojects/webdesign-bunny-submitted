import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Star, ShoppingBag, DollarSign, Package, Clock, Filter } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import DashboardHeader from "@/components/dashboard/DashboardHeader";

// Mock product data
const products = [
  {
    id: 1,
    name: "Premium Wireless Headphones",
    category: "Electronics",
    price: 299.99,
    rating: 4.5,
    reviewCount: 1247,
    reward: 15.00,
    image: "/placeholder.svg",
    description: "High-quality wireless headphones with noise cancellation",
    available: true,
    claimed: false
  },
  {
    id: 2,
    name: "Smart Fitness Watch",
    category: "Electronics",
    price: 199.99,
    rating: 4.3,
    reviewCount: 892,
    reward: 12.00,
    image: "/placeholder.svg",
    description: "Track your fitness goals with this advanced smartwatch",
    available: true,
    claimed: true
  },
  {
    id: 3,
    name: "Organic Coffee Beans",
    category: "Food & Beverage",
    price: 24.99,
    rating: 4.7,
    reviewCount: 456,
    reward: 5.00,
    image: "/placeholder.svg",
    description: "Premium organic coffee beans from sustainable farms",
    available: true,
    claimed: false
  },
  {
    id: 4,
    name: "Leather Laptop Bag",
    category: "Accessories",
    price: 89.99,
    rating: 4.4,
    reviewCount: 234,
    reward: 8.00,
    image: "/placeholder.svg",
    description: "Stylish leather bag perfect for professionals",
    available: false,
    claimed: false
  },
  {
    id: 5,
    name: "Skincare Set",
    category: "Beauty",
    price: 149.99,
    rating: 4.6,
    reviewCount: 678,
    reward: 10.00,
    image: "/placeholder.svg",
    description: "Complete skincare routine for healthy, glowing skin",
    available: true,
    claimed: false
  },
  {
    id: 6,
    name: "Gaming Mechanical Keyboard",
    category: "Electronics",
    price: 129.99,
    rating: 4.8,
    reviewCount: 1534,
    reward: 9.00,
    image: "/placeholder.svg",
    description: "RGB mechanical keyboard for gaming enthusiasts",
    available: true,
    claimed: false
  }
];

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [claimFilter, setClaimFilter] = useState("All");
  const [claimedProducts, setClaimedProducts] = useState<number[]>([2]); // Product 2 is already claimed
  const [claimingProduct, setClaimingProduct] = useState<number | null>(null);
  const { toast } = useToast();

  const categories = ["All", "Electronics", "Food & Beverage", "Accessories", "Beauty"];

  // Helper functions defined before they're used
  const isProductClaimed = (productId: number) => claimedProducts.includes(productId);
  const isProductBeingClaimed = (productId: number) => claimingProduct === productId;

  const filteredProducts = products.filter(product => {
    const categoryMatch = selectedCategory === "All" || product.category === selectedCategory;
    const claimMatch = claimFilter === "All" || 
      (claimFilter === "Claimed" && isProductClaimed(product.id)) ||
      (claimFilter === "Not Claimed" && !isProductClaimed(product.id));
    
    return categoryMatch && claimMatch;
  });

  const handleClaimProduct = async (productId: number) => {
    setClaimingProduct(productId);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setClaimedProducts(prev => [...prev, productId]);
    setClaimingProduct(null);
    
    const product = products.find(p => p.id === productId);
    toast({
      title: "Product Claimed Successfully!",
      description: `You have claimed "${product?.name}" for review. You have 7 days to complete your review.`,
    });
    
    console.log(`Claimed product ${productId} for review`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-amber-50">
      <DashboardHeader />
      
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Product Reviews</h1>
          <p className="text-gray-600">Browse available products and claim them to write reviews and earn rewards</p>
        </div>

        {/* Filters */}
        <div className="mb-6 space-y-4">
          {/* Category Filter */}
          <div>
            <h3 className="text-sm font-medium text-gray-700 mb-2">Category</h3>
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  onClick={() => setSelectedCategory(category)}
                  className={selectedCategory === category ? "bg-gradient-to-r from-orange-500 to-amber-500" : ""}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>

          {/* Claim Status Filter */}
          <div>
            <h3 className="text-sm font-medium text-gray-700 mb-2">Claim Status</h3>
            <Select value={claimFilter} onValueChange={setClaimFilter}>
              <SelectTrigger className="w-48">
                <Filter className="w-4 h-4 mr-2" />
                <SelectValue placeholder="Filter by claim status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="All">All Products</SelectItem>
                <SelectItem value="Claimed">Claimed Only</SelectItem>
                <SelectItem value="Not Claimed">Not Claimed Only</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((product) => (
            <Card key={product.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="aspect-video bg-gray-100 flex items-center justify-center">
                <Package className="w-16 h-16 text-gray-400" />
              </div>
              
              <CardHeader className="pb-3">
                <div className="flex justify-between items-start mb-2">
                  <Badge variant="secondary">{product.category}</Badge>
                  <div className="flex items-center gap-1 text-sm text-amber-600">
                    <DollarSign className="w-4 h-4" />
                    <span className="font-semibold">${product.reward}</span>
                    <span className="text-gray-500">reward</span>
                  </div>
                </div>
                
                <CardTitle className="text-lg">{product.name}</CardTitle>
                <CardDescription>{product.description}</CardDescription>
              </CardHeader>
              
              <CardContent className="pt-0">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                    <span className="font-medium">{product.rating}</span>
                    <span className="text-gray-500 text-sm">({product.reviewCount})</span>
                  </div>
                  <span className="font-bold text-lg">${product.price}</span>
                </div>
                
                {!product.available ? (
                  <Button disabled className="w-full" variant="outline">
                    <Clock className="w-4 h-4 mr-2" />
                    Currently Unavailable
                  </Button>
                ) : isProductClaimed(product.id) ? (
                  <Button disabled className="w-full bg-green-100 text-green-800 hover:bg-green-100">
                    <Package className="w-4 h-4 mr-2" />
                    Already Claimed
                  </Button>
                ) : (
                  <Button 
                    className="w-full bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600"
                    onClick={() => handleClaimProduct(product.id)}
                    disabled={isProductBeingClaimed(product.id)}
                  >
                    {isProductBeingClaimed(product.id) ? (
                      <>
                        <Clock className="w-4 h-4 mr-2 animate-spin" />
                        Claiming...
                      </>
                    ) : (
                      <>
                        <ShoppingBag className="w-4 h-4 mr-2" />
                        Claim to Review
                      </>
                    )}
                  </Button>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <Package className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">No products found</h3>
            <p className="text-gray-500">Try adjusting your filters or selecting a different category</p>
          </div>
        )}
      </main>
    </div>
  );
};

export default Products;
