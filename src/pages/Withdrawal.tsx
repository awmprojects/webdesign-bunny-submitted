
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Wallet, DollarSign, AlertCircle, CheckCircle } from "lucide-react";
import DashboardHeader from "@/components/dashboard/DashboardHeader";
import { useToast } from "@/hooks/use-toast";

const Withdrawal = () => {
  const [availableBalance] = useState(156.78); // This would come from your backend
  const [withdrawalAmount, setWithdrawalAmount] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("");
  const [paypalEmail, setPaypalEmail] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);
  const { toast } = useToast();

  const minimumWithdrawal = 50.00;
  const canWithdraw = availableBalance >= minimumWithdrawal;
  const requestedAmount = parseFloat(withdrawalAmount) || 0;
  const isValidAmount = requestedAmount >= minimumWithdrawal && requestedAmount <= availableBalance;

  const handleWithdrawalRequest = async () => {
    if (!isValidAmount || !paymentMethod) {
      toast({
        title: "Invalid Request",
        description: "Please check your withdrawal amount and payment method.",
        variant: "destructive",
      });
      return;
    }

    if (paymentMethod === "paypal" && !paypalEmail) {
      toast({
        title: "PayPal Email Required",
        description: "Please enter your PayPal email address.",
        variant: "destructive",
      });
      return;
    }

    setIsProcessing(true);

    // Simulate API call
    setTimeout(() => {
      setIsProcessing(false);
      toast({
        title: "Withdrawal Request Submitted",
        description: `Your withdrawal request for $${requestedAmount.toFixed(2)} has been submitted and will be processed within 3-5 business days.`,
      });
      
      // Reset form
      setWithdrawalAmount("");
      setPaymentMethod("");
      setPaypalEmail("");
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-amber-50">
      <DashboardHeader />
      
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Withdrawal Request</h1>
          <p className="text-gray-600">Request a payout of your earned rewards</p>
        </div>

        <div className="max-w-2xl mx-auto space-y-6">
          {/* Balance Overview */}
          <Card className="bg-gradient-to-br from-green-50 to-emerald-50 border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Wallet className="w-5 h-5 text-green-600" />
                <span>Available Balance</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-green-600 mb-2">
                ${availableBalance.toFixed(2)}
              </div>
              <p className="text-sm text-gray-600">
                Minimum withdrawal: ${minimumWithdrawal.toFixed(2)}
              </p>
            </CardContent>
          </Card>

          {/* Withdrawal Status Alert */}
          {!canWithdraw ? (
            <Alert className="border-amber-200 bg-amber-50">
              <AlertCircle className="h-4 w-4 text-amber-600" />
              <AlertDescription className="text-amber-800">
                You need at least ${minimumWithdrawal.toFixed(2)} to request a withdrawal. 
                Your current balance is ${availableBalance.toFixed(2)}.
              </AlertDescription>
            </Alert>
          ) : (
            <Alert className="border-green-200 bg-green-50">
              <CheckCircle className="h-4 w-4 text-green-600" />
              <AlertDescription className="text-green-800">
                Great! You can request a withdrawal. Your balance meets the minimum requirement.
              </AlertDescription>
            </Alert>
          )}

          {/* Withdrawal Form */}
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <DollarSign className="w-5 h-5" />
                <span>Withdrawal Request</span>
              </CardTitle>
              <CardDescription>
                Complete the form below to request your withdrawal
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="amount">Withdrawal Amount</Label>
                <Input
                  id="amount"
                  type="number"
                  placeholder="Enter amount"
                  value={withdrawalAmount}
                  onChange={(e) => setWithdrawalAmount(e.target.value)}
                  min={minimumWithdrawal}
                  max={availableBalance}
                  step="0.01"
                  disabled={!canWithdraw}
                />
                {requestedAmount > 0 && !isValidAmount && (
                  <p className="text-sm text-red-600">
                    Amount must be between ${minimumWithdrawal.toFixed(2)} and ${availableBalance.toFixed(2)}
                  </p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="payment-method">Payment Method</Label>
                <Select value={paymentMethod} onValueChange={setPaymentMethod} disabled={!canWithdraw}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select payment method" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="paypal">PayPal</SelectItem>
                    <SelectItem value="bank">Bank Transfer</SelectItem>
                    <SelectItem value="venmo">Venmo</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {paymentMethod === "paypal" && (
                <div className="space-y-2">
                  <Label htmlFor="paypal-email">PayPal Email</Label>
                  <Input
                    id="paypal-email"
                    type="email"
                    placeholder="Enter your PayPal email"
                    value={paypalEmail}
                    onChange={(e) => setPaypalEmail(e.target.value)}
                  />
                </div>
              )}

              {paymentMethod === "bank" && (
                <Alert className="border-blue-200 bg-blue-50">
                  <AlertCircle className="h-4 w-4 text-blue-600" />
                  <AlertDescription className="text-blue-800">
                    Bank transfer details will be collected after submission for security purposes.
                  </AlertDescription>
                </Alert>
              )}

              {paymentMethod === "venmo" && (
                <Alert className="border-purple-200 bg-purple-50">
                  <AlertCircle className="h-4 w-4 text-purple-600" />
                  <AlertDescription className="text-purple-800">
                    Venmo username will be collected after submission.
                  </AlertDescription>
                </Alert>
              )}

              <Button
                onClick={handleWithdrawalRequest}
                disabled={!canWithdraw || !isValidAmount || !paymentMethod || isProcessing}
                className="w-full bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600"
              >
                {isProcessing ? (
                  <>
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                    Processing...
                  </>
                ) : (
                  `Request Withdrawal${requestedAmount > 0 ? ` - $${requestedAmount.toFixed(2)}` : ''}`
                )}
              </Button>
            </CardContent>
          </Card>

          {/* Processing Information */}
          <Card className="bg-gray-50 border-gray-200">
            <CardHeader>
              <CardTitle className="text-lg">Processing Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 text-sm text-gray-600">
              <p>• Withdrawal requests are processed within 3-5 business days</p>
              <p>• You will receive an email confirmation once your request is submitted</p>
              <p>• PayPal payments are typically faster than bank transfers</p>
              <p>• A small processing fee may apply depending on the payment method</p>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default Withdrawal;
