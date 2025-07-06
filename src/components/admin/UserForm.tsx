
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Save, X } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface UserFormProps {
  user?: any;
  userType: "user" | "manager";
  onClose: () => void;
}

const UserForm = ({ user, userType, onClose }: UserFormProps) => {
  const [formData, setFormData] = useState({
    name: user?.name || "",
    email: user?.email || "",
    status: user?.status || "active",
    department: user?.department || "",
    permissions: user?.permissions || []
  });

  const [selectedPermissions, setSelectedPermissions] = useState<string[]>(
    user?.permissions || []
  );

  const { toast } = useToast();

  const availablePermissions = [
    "review_approval",
    "product_management", 
    "user_support",
    "analytics_access",
    "payment_processing"
  ];

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const togglePermission = (permission: string) => {
    setSelectedPermissions(prev => 
      prev.includes(permission)
        ? prev.filter(p => p !== permission)
        : [...prev, permission]
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const finalData = {
      ...formData,
      permissions: userType === "manager" ? selectedPermissions : []
    };

    console.log("Submitting:", finalData);
    
    toast({
      title: user ? "User Updated" : "User Created",
      description: `The ${userType} has been successfully ${user ? 'updated' : 'created'}.`,
    });
    
    onClose();
  };

  const getPermissionBadgeColor = (permission: string) => {
    switch (permission) {
      case 'review_approval': return 'bg-blue-100 text-blue-800';
      case 'product_management': return 'bg-purple-100 text-purple-800';
      case 'user_support': return 'bg-green-100 text-green-800';
      case 'analytics_access': return 'bg-amber-100 text-amber-800';
      case 'payment_processing': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <Card className="max-w-2xl mx-auto">
      <CardHeader>
        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="sm"
            onClick={onClose}
            className="p-2"
          >
            <ArrowLeft className="w-4 h-4" />
          </Button>
          <div>
            <CardTitle>
              {user ? `Edit ${userType}` : `Add New ${userType}`}
            </CardTitle>
            <CardDescription>
              {user 
                ? `Update ${userType} information and permissions`
                : `Create a new ${userType} account with appropriate permissions`
              }
            </CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Basic Information */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Basic Information</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name</Label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) => handleInputChange("name", e.target.value)}
                  placeholder="Enter full name"
                  required
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  placeholder="Enter email address"
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="status">Account Status</Label>
                <select
                  id="status"
                  value={formData.status}
                  onChange={(e) => handleInputChange("status", e.target.value)}
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                >
                  <option value="active">Active</option>
                  <option value="suspended">Suspended</option>
                  <option value="inactive">Inactive</option>
                </select>
              </div>

              {userType === "manager" && (
                <div className="space-y-2">
                  <Label htmlFor="department">Department</Label>
                  <Input
                    id="department"
                    value={formData.department}
                    onChange={(e) => handleInputChange("department", e.target.value)}
                    placeholder="Enter department"
                  />
                </div>
              )}
            </div>
          </div>

          {/* Manager Permissions */}
          {userType === "manager" && (
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Permissions</h3>
              <p className="text-sm text-gray-600">
                Select the permissions this manager should have access to.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {availablePermissions.map((permission) => (
                  <div
                    key={permission}
                    className={`p-3 border rounded-lg cursor-pointer transition-colors ${
                      selectedPermissions.includes(permission)
                        ? 'border-blue-500 bg-blue-50'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                    onClick={() => togglePermission(permission)}
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">
                          {permission.replace('_', ' ').replace(/\b\w/g, l => l.toUpperCase())}
                        </p>
                        <p className="text-xs text-gray-500">
                          {permission === 'review_approval' && 'Approve and reject user reviews'}
                          {permission === 'product_management' && 'Add and edit platform products'}
                          {permission === 'user_support' && 'Handle user support requests'}
                          {permission === 'analytics_access' && 'View platform analytics and reports'}
                          {permission === 'payment_processing' && 'Process user payments and withdrawals'}
                        </p>
                      </div>
                      {selectedPermissions.includes(permission) && (
                        <Badge className={getPermissionBadgeColor(permission)}>
                          Selected
                        </Badge>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {selectedPermissions.length > 0 && (
                <div className="mt-4">
                  <p className="text-sm font-medium mb-2">Selected Permissions:</p>
                  <div className="flex flex-wrap gap-2">
                    {selectedPermissions.map((permission) => (
                      <Badge 
                        key={permission} 
                        className={getPermissionBadgeColor(permission)}
                      >
                        {permission.replace('_', ' ')}
                        <button
                          type="button"
                          onClick={() => togglePermission(permission)}
                          className="ml-2 hover:bg-black/10 rounded-full p-0.5"
                        >
                          <X className="w-3 h-3" />
                        </button>
                      </Badge>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Actions */}
          <div className="flex gap-3 pt-4">
            <Button
              type="submit"
              className="bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600"
            >
              <Save className="w-4 h-4 mr-2" />
              {user ? 'Update' : 'Create'} {userType}
            </Button>
            <Button
              type="button"
              variant="outline"
              onClick={onClose}
            >
              Cancel
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
};

export default UserForm;
