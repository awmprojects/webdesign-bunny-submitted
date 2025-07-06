
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import { Edit, Trash2, Search, Mail, Calendar, Shield, Users, Ban, CheckCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

// Mock managers data
const mockManagers = [
  {
    id: 1,
    name: "Sarah Manager",
    email: "sarah@company.com",
    status: "active",
    joinDate: "2023-10-15",
    role: "manager",
    permissions: ["review_approval", "product_management", "user_support"],
    managedUsers: 45,
    approvedReviews: 234,
    department: "Product Management"
  },
  {
    id: 2,
    name: "Mike Supervisor",
    email: "mike@company.com",
    status: "active",
    joinDate: "2023-11-20",
    role: "manager",
    permissions: ["review_approval", "user_support"],
    managedUsers: 32,
    approvedReviews: 189,
    department: "Customer Support"
  },
  {
    id: 3,
    name: "Lisa Admin",
    email: "lisa@company.com",
    status: "suspended",
    joinDate: "2023-09-05",
    role: "manager",
    permissions: ["review_approval", "product_management"],
    managedUsers: 28,
    approvedReviews: 156,
    department: "Quality Assurance"
  }
];

interface ManagerManagementProps {
  onEditManager: (manager: any) => void;
}

const ManagerManagement = ({ onEditManager }: ManagerManagementProps) => {
  const [managers, setManagers] = useState(mockManagers);
  const [searchTerm, setSearchTerm] = useState("");
  const { toast } = useToast();

  const filteredManagers = managers.filter(manager =>
    manager.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    manager.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    manager.department.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleDeleteManager = (managerId: number) => {
    setManagers(managers.filter(m => m.id !== managerId));
    toast({
      title: "Manager Deleted",
      description: "The manager has been successfully deleted.",
    });
  };

  const toggleManagerStatus = (managerId: number) => {
    setManagers(managers.map(m => 
      m.id === managerId 
        ? { ...m, status: m.status === 'active' ? 'suspended' : 'active' }
        : m
    ));
    
    const manager = managers.find(m => m.id === managerId);
    toast({
      title: `Manager ${manager?.status === 'active' ? 'Suspended' : 'Activated'}`,
      description: `${manager?.name} has been ${manager?.status === 'active' ? 'suspended' : 'activated'}.`,
    });
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'bg-green-100 text-green-800';
      case 'suspended': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getPermissionBadgeColor = (permission: string) => {
    switch (permission) {
      case 'review_approval': return 'bg-blue-100 text-blue-800';
      case 'product_management': return 'bg-purple-100 text-purple-800';
      case 'user_support': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Manager Management</CardTitle>
        <CardDescription>Manage platform managers and their permissions</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {/* Search */}
          <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
            <div className="relative w-full sm:w-80">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <Input
                placeholder="Search managers by name, email, or department..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
            <div className="bg-purple-50 p-4 rounded-lg">
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-purple-600" />
                <span className="text-sm font-medium text-purple-600">Total Managers</span>
              </div>
              <p className="text-2xl font-bold text-purple-900">{managers.length}</p>
            </div>
            <div className="bg-green-50 p-4 rounded-lg">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-600" />
                <span className="text-sm font-medium text-green-600">Active</span>
              </div>
              <p className="text-2xl font-bold text-green-900">{managers.filter(m => m.status === 'active').length}</p>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg">
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5 text-blue-600" />
                <span className="text-sm font-medium text-blue-600">Managed Users</span>
              </div>
              <p className="text-2xl font-bold text-blue-900">{managers.reduce((sum, m) => sum + m.managedUsers, 0)}</p>
            </div>
            <div className="bg-amber-50 p-4 rounded-lg">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-amber-600" />
                <span className="text-sm font-medium text-amber-600">Reviews Approved</span>
              </div>
              <p className="text-2xl font-bold text-amber-900">{managers.reduce((sum, m) => sum + m.approvedReviews, 0)}</p>
            </div>
          </div>

          {/* Managers Table */}
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Manager</TableHead>
                <TableHead>Department</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Permissions</TableHead>
                <TableHead>Managed Users</TableHead>
                <TableHead>Reviews Approved</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredManagers.map((manager) => (
                <TableRow key={manager.id}>
                  <TableCell>
                    <div>
                      <p className="font-medium">{manager.name}</p>
                      <p className="text-sm text-gray-500 flex items-center gap-1">
                        <Mail className="w-3 h-3" />
                        {manager.email}
                      </p>
                      <p className="text-xs text-gray-400 flex items-center gap-1 mt-1">
                        <Calendar className="w-3 h-3" />
                        Joined {new Date(manager.joinDate).toLocaleDateString()}
                      </p>
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge variant="secondary">{manager.department}</Badge>
                  </TableCell>
                  <TableCell>
                    <Badge className={getStatusColor(manager.status)}>
                      {manager.status}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <div className="flex flex-wrap gap-1">
                      {manager.permissions.map((permission) => (
                        <Badge 
                          key={permission} 
                          className={`text-xs ${getPermissionBadgeColor(permission)}`}
                        >
                          {permission.replace('_', ' ')}
                        </Badge>
                      ))}
                    </div>
                  </TableCell>
                  <TableCell className="text-center">
                    <div className="flex items-center gap-1 justify-center">
                      <Users className="w-4 h-4 text-gray-500" />
                      {manager.managedUsers}
                    </div>
                  </TableCell>
                  <TableCell className="text-center">{manager.approvedReviews}</TableCell>
                  <TableCell>
                    <div className="flex gap-2">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => onEditManager(manager)}
                      >
                        <Edit className="w-4 h-4 mr-1" />
                        Edit
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => toggleManagerStatus(manager.id)}
                        className={manager.status === 'active' ? "text-red-600 border-red-200 hover:bg-red-50" : "text-green-600 border-green-200 hover:bg-green-50"}
                      >
                        {manager.status === 'active' ? <Ban className="w-4 h-4 mr-1" /> : <CheckCircle className="w-4 h-4 mr-1" />}
                        {manager.status === 'active' ? 'Suspend' : 'Activate'}
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handleDeleteManager(manager.id)}
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

export default ManagerManagement;
