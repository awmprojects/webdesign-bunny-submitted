
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Edit, Trash2, Package, DollarSign, Star } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

// Mock products data that matches the existing structure
const mockProducts = [
  {
    id: 1,
    name: "Premium Wireless Headphones",
    category: "Electronics",
    price: 299.99,
    rating: 4.5,
    reviewCount: 1247,
    reward: 15.00,
    description: "High-quality wireless headphones with noise cancellation",
    available: true,
    stock: 25
  },
  {
    id: 2,
    name: "Smart Fitness Watch",
    category: "Electronics",
    price: 199.99,
    rating: 4.3,
    reviewCount: 892,
    reward: 12.00,
    description: "Track your fitness goals with this advanced smartwatch",
    available: true,
    stock: 18
  },
  {
    id: 3,
    name: "Organic Coffee Beans",
    category: "Food & Beverage",
    price: 24.99,
    rating: 4.7,
    reviewCount: 456,
    reward: 5.00,
    description: "Premium organic coffee beans from sustainable farms",
    available: true,
    stock: 50
  },
  {
    id: 4,
    name: "Leather Laptop Bag",
    category: "Accessories",
    price: 89.99,
    rating: 4.4,
    reviewCount: 234,
    reward: 8.00,
    description: "Stylish leather bag perfect for professionals",
    available: false,
    stock: 0
  }
];

interface ProductManagementProps {
  onEditProduct: (product: any) => void;
}

const ProductManagement = ({ onEditProduct }: ProductManagementProps) => {
  const [products, setProducts] = useState(mockProducts);
  const { toast } = useToast();

  const handleDeleteProduct = (productId: number) => {
    setProducts(products.filter(p => p.id !== productId));
    toast({
      title: "Product Deleted",
      description: "The product has been successfully deleted.",
    });
  };

  const toggleAvailability = (productId: number) => {
    setProducts(products.map(p => 
      p.id === productId 
        ? { ...p, available: !p.available }
        : p
    ));
    
    const product = products.find(p => p.id === productId);
    toast({
      title: `Product ${product?.available ? 'Disabled' : 'Enabled'}`,
      description: `${product?.name} is now ${product?.available ? 'unavailable' : 'available'} for claiming.`,
    });
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Product Inventory</CardTitle>
        <CardDescription>Manage your product catalog</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {/* Quick Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
            <div className="bg-blue-50 p-4 rounded-lg">
              <div className="flex items-center gap-2">
                <Package className="w-5 h-5 text-blue-600" />
                <span className="text-sm font-medium text-blue-600">Total Products</span>
              </div>
              <p className="text-2xl font-bold text-blue-900">{products.length}</p>
            </div>
            <div className="bg-green-50 p-4 rounded-lg">
              <div className="flex items-center gap-2">
                <Package className="w-5 h-5 text-green-600" />
                <span className="text-sm font-medium text-green-600">Available</span>
              </div>
              <p className="text-2xl font-bold text-green-900">{products.filter(p => p.available).length}</p>
            </div>
            <div className="bg-amber-50 p-4 rounded-lg">
              <div className="flex items-center gap-2">
                <DollarSign className="w-5 h-5 text-amber-600" />
                <span className="text-sm font-medium text-amber-600">Avg. Price</span>
              </div>
              <p className="text-2xl font-bold text-amber-900">
                ${(products.reduce((sum, p) => sum + p.price, 0) / products.length).toFixed(0)}
              </p>
            </div>
            <div className="bg-purple-50 p-4 rounded-lg">
              <div className="flex items-center gap-2">
                <Star className="w-5 h-5 text-purple-600" />
                <span className="text-sm font-medium text-purple-600">Avg. Rating</span>
              </div>
              <p className="text-2xl font-bold text-purple-900">
                {(products.reduce((sum, p) => sum + p.rating, 0) / products.length).toFixed(1)}
              </p>
            </div>
          </div>

          {/* Products Table */}
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Product</TableHead>
                <TableHead>Category</TableHead>
                <TableHead>Price</TableHead>
                <TableHead>Reward</TableHead>
                <TableHead>Rating</TableHead>
                <TableHead>Stock</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {products.map((product) => (
                <TableRow key={product.id}>
                  <TableCell>
                    <div>
                      <p className="font-medium">{product.name}</p>
                      <p className="text-sm text-gray-500">{product.description}</p>
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge variant="secondary">{product.category}</Badge>
                  </TableCell>
                  <TableCell className="font-medium">${product.price}</TableCell>
                  <TableCell className="text-green-600 font-medium">${product.reward}</TableCell>
                  <TableCell>
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                      <span>{product.rating}</span>
                      <span className="text-gray-500 text-sm">({product.reviewCount})</span>
                    </div>
                  </TableCell>
                  <TableCell>
                    <span className={product.stock > 10 ? "text-green-600" : product.stock > 0 ? "text-amber-600" : "text-red-600"}>
                      {product.stock}
                    </span>
                  </TableCell>
                  <TableCell>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => toggleAvailability(product.id)}
                      className={product.available ? "text-green-600 border-green-200" : "text-red-600 border-red-200"}
                    >
                      {product.available ? "Available" : "Disabled"}
                    </Button>
                  </TableCell>
                  <TableCell>
                    <div className="flex gap-2">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => onEditProduct(product)}
                      >
                        <Edit className="w-4 h-4 mr-1" />
                        Edit
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handleDeleteProduct(product.id)}
                        className="text-red-600 border-red-200 hover:bg-red-50"
                      >
                        <Trash2 className="w-4 h-4 mr-1" />
                        Delete
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductManagement;
