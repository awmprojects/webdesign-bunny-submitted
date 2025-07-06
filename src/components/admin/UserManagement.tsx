
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import { Edit, Trash2, Search, Mail, Calendar, DollarSign, Star, Ban, CheckCircle, Users } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

// Mock users data with affiliate earnings
const mockUsers = [
  {
    id: 1,
    name: "Alice Johnson",
    email: "alice@example.com",
    status: "active",
    joinDate: "2024-01-15",
    totalEarnings: 245.50,
    affiliateEarnings: 125.75,
    reviewsSubmitted: 23,
    averageRating: 4.2,
    role: "user"
  },
  {
    id: 2,
    name: "Bob Smith",
    email: "bob@example.com",
    status: "suspended",
    joinDate: "2024-02-20",
    totalEarnings: 189.75,
    affiliateEarnings: 89.25,
    reviewsSubmitted: 18,
    averageRating: 3.8,
    role: "user"
  },
  {
    id: 3,
    name: "Carol Davis",
    email: "carol@example.com",
    status: "active",
    joinDate: "2024-01-05",
    totalEarnings: 567.25,
    affiliateEarnings: 234.50,
    reviewsSubmitted: 45,
    averageRating: 4.6,
    role: "user"
  },
  {
    id: 4,
    name: "David Wilson",
    email: "david@example.com",
    status: "inactive",
    joinDate: "2023-12-10",
    totalEarnings: 89.00,
    affiliateEarnings: 45.00,
    reviewsSubmitted: 8,
    averageRating: 3.5,
    role: "user"
  }
];

interface UserManagementProps {
  onEditUser: (user: any) => void;
}

const UserManagement = ({ onEditUser }: UserManagementProps) => {
  const [users, setUsers] = useState(mockUsers);
  const [searchTerm, setSearchTerm] = useState("");
  const { toast } = useToast();

  const filteredUsers = users.filter(user =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleDeleteUser = (userId: number) => {
    setUsers(users.filter(u => u.id !== userId));
    toast({
      title: "User Deleted",
      description: "The user has been successfully deleted.",
    });
  };

  const toggleUserStatus = (userId: number) => {
    setUsers(users.map(u => 
      u.id === userId 
        ? { ...u, status: u.status === 'active' ? 'suspended' : 'active' }
        : u
    ));
    
    const user = users.find(u => u.id === userId);
    toast({
      title: `User ${user?.status === 'active' ? 'Suspended' : 'Activated'}`,
      description: `${user?.name} has been ${user?.status === 'active' ? 'suspended' : 'activated'}.`,
    });
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'bg-green-100 text-green-800';
      case 'suspended': return 'bg-red-100 text-red-800';
      case 'inactive': return 'bg-gray-100 text-gray-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const totalAffiliateEarnings = users.reduce((sum, u) => sum + u.affiliateEarnings, 0);

  return (
    <Card>
      <CardHeader>
        <CardTitle>User Management</CardTitle>
        <CardDescription>Manage platform users and their account status</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {/* Search and Stats */}
          <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
            <div className="relative w-full sm:w-80">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <Input
                placeholder="Search users by name or email..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-6">
            <div className="bg-blue-50 p-4 rounded-lg">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-blue-600" />
                <span className="text-sm font-medium text-blue-600">Active Users</span>
              </div>
              <p className="text-2xl font-bold text-blue-900">{users.filter(u => u.status === 'active').length}</p>
            </div>
            <div className="bg-red-50 p-4 rounded-lg">
              <div className="flex items-center gap-2">
                <Ban className="w-5 h-5 text-red-600" />
                <span className="text-sm font-medium text-red-600">Suspended</span>
              </div>
              <p className="text-2xl font-bold text-red-900">{users.filter(u => u.status === 'suspended').length}</p>
            </div>
            <div className="bg-green-50 p-4 rounded-lg">
              <div className="flex items-center gap-2">
                <DollarSign className="w-5 h-5 text-green-600" />
                <span className="text-sm font-medium text-green-600">Total Earnings</span>
              </div>
              <p className="text-2xl font-bold text-green-900">
                ${users.reduce((sum, u) => sum + u.totalEarnings, 0).toFixed(0)}
              </p>
            </div>
            <div className="bg-purple-50 p-4 rounded-lg">
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5 text-purple-600" />
                <span className="text-sm font-medium text-purple-600">Affiliate Earnings</span>
              </div>
              <p className="text-2xl font-bold text-purple-900">
                ${totalAffiliateEarnings.toFixed(0)}
              </p>
            </div>
            <div className="bg-amber-50 p-4 rounded-lg">
              <div className="flex items-center gap-2">
                <Star className="w-5 h-5 text-amber-600" />
                <span className="text-sm font-medium text-amber-600">Avg. Rating</span>
              </div>
              <p className="text-2xl font-bold text-amber-900">
                {(users.reduce((sum, u) => sum + u.averageRating, 0) / users.length).toFixed(1)}
              </p>
            </div>
          </div>

          {/* Users Table */}
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>User</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Join Date</TableHead>
                <TableHead>Reviews</TableHead>
                <TableHead>Rating</TableHead>
                <TableHead>Earnings</TableHead>
                <TableHead>Affiliate Earnings</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredUsers.map((user) => (
                <TableRow key={user.id}>
                  <TableCell>
                    <div>
                      <p className="font-medium">{user.name}</p>
                      <p className="text-sm text-gray-500 flex items-center gap-1">
                        <Mail className="w-3 h-3" />
                        {user.email}
                      </p>
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge className={getStatusColor(user.status)}>
                      {user.status}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-1 text-sm">
                      <Calendar className="w-3 h-3" />
                      {new Date(user.joinDate).toLocaleDateString()}
                    </div>
                  </TableCell>
                  <TableCell className="text-center">{user.reviewsSubmitted}</TableCell>
                  <TableCell>
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                      <span>{user.averageRating}</span>
                    </div>
                  </TableCell>
                  <TableCell className="font-medium text-green-600">
                    ${user.totalEarnings.toFixed(2)}
                  </TableCell>
                  <TableCell className="font-medium text-purple-600">
                    ${user.affiliateEarnings.toFixed(2)}
                  </TableCell>
                  <TableCell>
                    <div className="flex gap-2">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => onEditUser(user)}
                      >
                        <Edit className="w-4 h-4 mr-1" />
                        Edit
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => toggleUserStatus(user.id)}
                        className={user.status === 'active' ? "text-red-600 border-red-200 hover:bg-red-50" : "text-green-600 border-green-200 hover:bg-green-50"}
                      >
                        {user.status === 'active' ? <Ban className="w-4 h-4 mr-1" /> : <CheckCircle className="w-4 h-4 mr-1" />}
                        {user.status === 'active' ? 'Suspend' : 'Activate'}
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handleDeleteUser(user.id)}
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

export default UserManagement;
