
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Package, UserCheck, Plus, Eye } from "lucide-react";
import DashboardHeader from "@/components/dashboard/DashboardHeader";
import ProductManagement from "@/components/manager/ProductManagement";
import ReviewManagement from "@/components/manager/ReviewManagement";
import ProductForm from "@/components/manager/ProductForm";

const Manager = () => {
  const [activeTab, setActiveTab] = useState("products");
  const [showProductForm, setShowProductForm] = useState(false);
  const [editingProduct, setEditingProduct] = useState<any>(null);

  const handleAddProduct = () => {
    setEditingProduct(null);
    setShowProductForm(true);
  };

  const handleEditProduct = (product: any) => {
    setEditingProduct(product);
    setShowProductForm(true);
  };

  const handleCloseForm = () => {
    setShowProductForm(false);
    setEditingProduct(null);
  };

  if (showProductForm) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-amber-50">
        <DashboardHeader />
        <main className="container mx-auto px-4 py-8">
          <ProductForm 
            product={editingProduct}
            onClose={handleCloseForm}
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
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Manager Dashboard</h1>
          <p className="text-gray-600">Manage products and review approvals</p>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-6">
            <TabsTrigger value="products" className="flex items-center gap-2">
              <Package className="w-4 h-4" />
              Product Management
            </TabsTrigger>
            <TabsTrigger value="reviews" className="flex items-center gap-2">
              <UserCheck className="w-4 h-4" />
              Review Approval
            </TabsTrigger>
          </TabsList>

          <TabsContent value="products">
            <div className="space-y-6">
              <div className="flex justify-between items-center">
                <div>
                  <h2 className="text-2xl font-semibold text-gray-900">Products</h2>
                  <p className="text-gray-600">Add new products and edit existing ones</p>
                </div>
                <Button 
                  onClick={handleAddProduct}
                  className="bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600"
                >
                  <Plus className="w-4 h-4 mr-2" />
                  Add New Product
                </Button>
              </div>
              <ProductManagement onEditProduct={handleEditProduct} />
            </div>
          </TabsContent>

          <TabsContent value="reviews">
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-semibold text-gray-900">Review Approval</h2>
                <p className="text-gray-600">Approve or reject user-submitted reviews</p>
              </div>
              <ReviewManagement />
            </div>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
};

export default Manager;
