
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import { Search, DollarSign, Calendar, Mail, CheckCircle, X, Clock, Ban } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

// Mock withdrawal requests data
const mockWithdrawalRequests = [
  {
    id: 1,
    userId: 1,
    userName: "Alice Johnson",
    userEmail: "alice@example.com",
    amount: 125.50,
    paymentMethod: "paypal",
    paymentDetails: "alice@example.com",
    status: "pending",
    requestDate: "2024-06-10",
    submittedAt: "2024-06-10T14:30:00Z"
  },
  {
    id: 2,
    userId: 3,
    userName: "Carol Davis",
    userEmail: "carol@example.com",
    amount: 200.00,
    paymentMethod: "bank",
    paymentDetails: "Bank Transfer",
    status: "pending",
    requestDate: "2024-06-12",
    submittedAt: "2024-06-12T09:15:00Z"
  },
  {
    id: 3,
    userId: 2,
    userName: "Bob Smith",
    userEmail: "bob@example.com",
    amount: 89.75,
    paymentMethod: "venmo",
    paymentDetails: "Venmo",
    status: "approved",
    requestDate: "2024-06-08",
    submittedAt: "2024-06-08T16:45:00Z",
    processedDate: "2024-06-09"
  },
  {
    id: 4,
    userId: 4,
    userName: "David Wilson",
    userEmail: "david@example.com",
    amount: 75.00,
    paymentMethod: "paypal",
    paymentDetails: "david@example.com",
    status: "rejected",
    requestDate: "2024-06-05",
    submittedAt: "2024-06-05T11:20:00Z",
    processedDate: "2024-06-06",
    rejectionReason: "Insufficient account activity"
  }
];

const WithdrawalManagement = () => {
  const [requests, setRequests] = useState(mockWithdrawalRequests);
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const { toast } = useToast();

  const filteredRequests = requests.filter(request => {
    const matchesSearch = request.userName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         request.userEmail.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === "all" || request.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const handleApproveRequest = (requestId: number) => {
    setRequests(requests.map(r => 
      r.id === requestId 
        ? { ...r, status: 'approved', processedDate: new Date().toISOString().split('T')[0] }
        : r
    ));
    
    const request = requests.find(r => r.id === requestId);
    toast({
      title: "Request Approved",
      description: `Withdrawal request for $${request?.amount.toFixed(2)} has been approved.`,
    });
  };

  const handleRejectRequest = (requestId: number) => {
    setRequests(requests.map(r => 
      r.id === requestId 
        ? { ...r, status: 'rejected', processedDate: new Date().toISOString().split('T')[0], rejectionReason: 'Rejected by admin' }
        : r
    ));
    
    const request = requests.find(r => r.id === requestId);
    toast({
      title: "Request Rejected",
      description: `Withdrawal request for $${request?.amount.toFixed(2)} has been rejected.`,
      variant: "destructive"
    });
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'pending': return 'bg-yellow-100 text-yellow-800';
      case 'approved': return 'bg-green-100 text-green-800';
      case 'rejected': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'pending': return <Clock className="w-4 h-4" />;
      case 'approved': return <CheckCircle className="w-4 h-4" />;
      case 'rejected': return <Ban className="w-4 h-4" />;
      default: return <Clock className="w-4 h-4" />;
    }
  };

  const pendingRequests = requests.filter(r => r.status === 'pending');
  const approvedRequests = requests.filter(r => r.status === 'approved');
  const rejectedRequests = requests.filter(r => r.status === 'rejected');
  const totalPendingAmount = pendingRequests.reduce((sum, r) => sum + r.amount, 0);

  return (
    <Card>
      <CardHeader>
        <CardTitle>Withdrawal Request Management</CardTitle>
        <CardDescription>Review and manage user withdrawal requests</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {/* Search and Filter */}
          <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
            <div className="relative w-full sm:w-80">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <Input
                placeholder="Search by user name or email..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <div className="flex gap-2">
              <Button
                variant={statusFilter === "all" ? "default" : "outline"}
                size="sm"
                onClick={() => setStatusFilter("all")}
              >
                All
              </Button>
              <Button
                variant={statusFilter === "pending" ? "default" : "outline"}
                size="sm"
                onClick={() => setStatusFilter("pending")}
              >
                Pending
              </Button>
              <Button
                variant={statusFilter === "approved" ? "default" : "outline"}
                size="sm"
                onClick={() => setStatusFilter("approved")}
              >
                Approved
              </Button>
              <Button
                variant={statusFilter === "rejected" ? "default" : "outline"}
                size="sm"
                onClick={() => setStatusFilter("rejected")}
              >
                Rejected
              </Button>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
            <div className="bg-yellow-50 p-4 rounded-lg">
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-yellow-600" />
                <span className="text-sm font-medium text-yellow-600">Pending</span>
              </div>
              <p className="text-2xl font-bold text-yellow-900">{pendingRequests.length}</p>
              <p className="text-sm text-yellow-700">${totalPendingAmount.toFixed(2)}</p>
            </div>
            <div className="bg-green-50 p-4 rounded-lg">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-600" />
                <span className="text-sm font-medium text-green-600">Approved</span>
              </div>
              <p className="text-2xl font-bold text-green-900">{approvedRequests.length}</p>
            </div>
            <div className="bg-red-50 p-4 rounded-lg">
              <div className="flex items-center gap-2">
                <Ban className="w-5 h-5 text-red-600" />
                <span className="text-sm font-medium text-red-600">Rejected</span>
              </div>
              <p className="text-2xl font-bold text-red-900">{rejectedRequests.length}</p>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg">
              <div className="flex items-center gap-2">
                <DollarSign className="w-5 h-5 text-blue-600" />
                <span className="text-sm font-medium text-blue-600">Total Requests</span>
              </div>
              <p className="text-2xl font-bold text-blue-900">{requests.length}</p>
            </div>
          </div>

          {/* Requests Table */}
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>User</TableHead>
                <TableHead>Amount</TableHead>
                <TableHead>Payment Method</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Request Date</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredRequests.map((request) => (
                <TableRow key={request.id}>
                  <TableCell>
                    <div>
                      <p className="font-medium">{request.userName}</p>
                      <p className="text-sm text-gray-500 flex items-center gap-1">
                        <Mail className="w-3 h-3" />
                        {request.userEmail}
                      </p>
                    </div>
                  </TableCell>
                  <TableCell className="font-semibold text-green-600">
                    ${request.amount.toFixed(2)}
                  </TableCell>
                  <TableCell>
                    <div>
                      <p className="capitalize font-medium">{request.paymentMethod}</p>
                      <p className="text-sm text-gray-500">{request.paymentDetails}</p>
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge className={`${getStatusColor(request.status)} flex items-center gap-1 w-fit`}>
                      {getStatusIcon(request.status)}
                      <span className="capitalize">{request.status}</span>
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-1 text-sm">
                      <Calendar className="w-3 h-3" />
                      {new Date(request.requestDate).toLocaleDateString()}
                    </div>
                    {request.processedDate && (
                      <p className="text-xs text-gray-500">
                        Processed: {new Date(request.processedDate).toLocaleDateString()}
                      </p>
                    )}
                  </TableCell>
                  <TableCell>
                    {request.status === 'pending' ? (
                      <div className="flex gap-2">
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => handleApproveRequest(request.id)}
                          className="text-green-600 border-green-200 hover:bg-green-50"
                        >
                          <CheckCircle className="w-4 h-4 mr-1" />
                          Approve
                        </Button>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => handleRejectRequest(request.id)}
                          className="text-red-600 border-red-200 hover:bg-red-50"
                        >
                          <X className="w-4 h-4 mr-1" />
                          Reject
                        </Button>
                      </div>
                    ) : (
                      <span className="text-sm text-gray-500">
                        {request.status === 'approved' ? 'Approved' : 'Rejected'}
                      </span>
                    )}
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

export default WithdrawalManagement;
