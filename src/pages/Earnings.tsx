
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { DollarSign, TrendingUp, Clock, CheckCircle, AlertCircle, Wallet, CalendarIcon, Download } from "lucide-react";
import { Link } from "react-router-dom";
import DashboardHeader from "@/components/dashboard/DashboardHeader";
import { format } from "date-fns";
import { cn } from "@/lib/utils";

const Earnings = () => {
  const [date, setDate] = useState<Date>();
  const [statusFilter, setStatusFilter] = useState("all");

  // Mock data for earnings
  const earningsStats = {
    totalEarnings: 2847.50,
    thisMonth: 485.20,
    pendingPayments: 125.75,
    availableBalance: 2721.75
  };

  const paymentHistory = [
    {
      id: 1,
      date: "2024-06-10",
      amount: 125.50,
      type: "Review Payment",
      product: "Wireless Headphones",
      status: "completed",
      transactionId: "TXN001234"
    },
    {
      id: 2,
      date: "2024-06-08",
      amount: 85.00,
      type: "Affiliate Commission",
      product: "Smart Watch",
      status: "completed",
      transactionId: "TXN001235"
    },
    {
      id: 3,
      date: "2024-06-05",
      amount: 95.25,
      type: "Review Payment",
      product: "Bluetooth Speaker",
      status: "pending",
      transactionId: "TXN001236"
    },
    {
      id: 4,
      date: "2024-06-03",
      amount: 67.80,
      type: "Bonus Payment",
      product: "Quality Bonus",
      status: "completed",
      transactionId: "TXN001237"
    },
    {
      id: 5,
      date: "2024-06-01",
      amount: 110.00,
      type: "Review Payment",
      product: "Gaming Mouse",
      status: "completed",
      transactionId: "TXN001238"
    }
  ];

  const withdrawalHistory = [
    {
      id: 1,
      date: "2024-05-30",
      amount: 500.00,
      method: "PayPal",
      status: "completed",
      processedDate: "2024-06-01"
    },
    {
      id: 2,
      date: "2024-05-15",
      amount: 300.00,
      method: "Bank Transfer",
      status: "completed",
      processedDate: "2024-05-17"
    },
    {
      id: 3,
      date: "2024-06-12",
      amount: 200.00,
      method: "PayPal",
      status: "processing",
      processedDate: null
    }
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "completed":
        return <Badge className="bg-green-100 text-green-800 hover:bg-green-100"><CheckCircle className="w-3 h-3 mr-1" />Completed</Badge>;
      case "pending":
        return <Badge className="bg-yellow-100 text-yellow-800 hover:bg-yellow-100"><Clock className="w-3 h-3 mr-1" />Pending</Badge>;
      case "processing":
        return <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100"><AlertCircle className="w-3 h-3 mr-1" />Processing</Badge>;
      default:
        return <Badge variant="secondary">{status}</Badge>;
    }
  };

  const filteredPayments = statusFilter === "all" 
    ? paymentHistory 
    : paymentHistory.filter(payment => payment.status === statusFilter);

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-amber-50">
      <DashboardHeader />
      
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Earnings Dashboard</h1>
          <p className="text-gray-600">Track your payments, commissions, and withdrawal history</p>
        </div>

        {/* Earnings Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="shadow-lg border-l-4 border-l-green-500">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">Total Earnings</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-2xl font-bold text-green-600">${earningsStats.totalEarnings.toFixed(2)}</p>
                  <p className="text-xs text-gray-500 mt-1">All time</p>
                </div>
                <DollarSign className="w-8 h-8 text-green-500" />
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-lg border-l-4 border-l-blue-500">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">This Month</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-2xl font-bold text-blue-600">${earningsStats.thisMonth.toFixed(2)}</p>
                  <p className="text-xs text-green-600 mt-1 flex items-center">
                    <TrendingUp className="w-3 h-3 mr-1" />
                    +12.5% from last month
                  </p>
                </div>
                <TrendingUp className="w-8 h-8 text-blue-500" />
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-lg border-l-4 border-l-yellow-500">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">Pending Payments</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-2xl font-bold text-yellow-600">${earningsStats.pendingPayments.toFixed(2)}</p>
                  <p className="text-xs text-gray-500 mt-1">Being processed</p>
                </div>
                <Clock className="w-8 h-8 text-yellow-500" />
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-lg border-l-4 border-l-purple-500">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">Available Balance</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-2xl font-bold text-purple-600">${earningsStats.availableBalance.toFixed(2)}</p>
                  <Button asChild size="sm" className="mt-2 bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600">
                    <Link to="/withdrawal">
                      <Wallet className="w-3 h-3 mr-1" />
                      Withdraw
                    </Link>
                  </Button>
                </div>
                <Wallet className="w-8 h-8 text-purple-500" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Tabs for Payment History and Withdrawals */}
        <Tabs defaultValue="payments" className="space-y-6">
          <TabsList className="grid w-full grid-cols-2 max-w-md">
            <TabsTrigger value="payments">Payment History</TabsTrigger>
            <TabsTrigger value="withdrawals">Withdrawals</TabsTrigger>
          </TabsList>

          <TabsContent value="payments">
            <Card className="shadow-lg">
              <CardHeader>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                  <div>
                    <CardTitle>Payment History</CardTitle>
                    <CardDescription>Your earnings and payment details</CardDescription>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-2">
                    <Select value={statusFilter} onValueChange={setStatusFilter}>
                      <SelectTrigger className="w-[140px]">
                        <SelectValue placeholder="Filter by status" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Status</SelectItem>
                        <SelectItem value="completed">Completed</SelectItem>
                        <SelectItem value="pending">Pending</SelectItem>
                      </SelectContent>
                    </Select>
                    <Button variant="outline" size="sm">
                      <Download className="w-4 h-4 mr-2" />
                      Export
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Date</TableHead>
                        <TableHead>Type</TableHead>
                        <TableHead>Product/Description</TableHead>
                        <TableHead>Amount</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>Transaction ID</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {filteredPayments.map((payment) => (
                        <TableRow key={payment.id}>
                          <TableCell className="font-medium">
                            {format(new Date(payment.date), "MMM dd, yyyy")}
                          </TableCell>
                          <TableCell>{payment.type}</TableCell>
                          <TableCell>{payment.product}</TableCell>
                          <TableCell className="font-semibold text-green-600">
                            ${payment.amount.toFixed(2)}
                          </TableCell>
                          <TableCell>{getStatusBadge(payment.status)}</TableCell>
                          <TableCell className="text-gray-500 text-sm">
                            {payment.transactionId}
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="withdrawals">
            <Card className="shadow-lg">
              <CardHeader>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                  <div>
                    <CardTitle>Withdrawal History</CardTitle>
                    <CardDescription>Your withdrawal requests and their status</CardDescription>
                  </div>
                  <Button asChild className="bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600">
                    <Link to="/withdrawal">
                      <Wallet className="w-4 h-4 mr-2" />
                      New Withdrawal
                    </Link>
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Request Date</TableHead>
                        <TableHead>Amount</TableHead>
                        <TableHead>Method</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>Processed Date</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {withdrawalHistory.map((withdrawal) => (
                        <TableRow key={withdrawal.id}>
                          <TableCell className="font-medium">
                            {format(new Date(withdrawal.date), "MMM dd, yyyy")}
                          </TableCell>
                          <TableCell className="font-semibold text-red-600">
                            -${withdrawal.amount.toFixed(2)}
                          </TableCell>
                          <TableCell>{withdrawal.method}</TableCell>
                          <TableCell>{getStatusBadge(withdrawal.status)}</TableCell>
                          <TableCell>
                            {withdrawal.processedDate 
                              ? format(new Date(withdrawal.processedDate), "MMM dd, yyyy")
                              : "-"
                            }
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
};

export default Earnings;
