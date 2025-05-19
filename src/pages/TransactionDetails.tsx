
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CreditCard, ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function TransactionDetails() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-md mx-auto">
        <div className="flex items-center mb-6">
          <Button 
            variant="ghost" 
            size="sm" 
            onClick={() => navigate("/profile-details")} 
            className="mr-2"
          >
            <ArrowLeft className="h-4 w-4" />
          </Button>
          <h1 className="text-xl font-bold">Transaction Details</h1>
        </div>
        
        <Card className="mb-6">
          <CardHeader className="pb-4">
            <CardTitle className="text-lg font-semibold">Transaction Information</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-gray-500">Transaction ID</span>
              <span className="font-medium">#123456789</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-500">Date</span>
              <span className="font-medium">May 19, 2025</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-500">Time</span>
              <span className="font-medium">14:30 PM</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-500">Status</span>
              <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-medium">Completed</span>
            </div>
          </CardContent>
        </Card>
        
        <Card className="mb-6">
          <CardHeader className="pb-4">
            <CardTitle className="text-lg font-semibold">Payment Details</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-gray-500">Amount</span>
              <span className="font-medium">$350.00</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-500">Payment Method</span>
              <div className="flex items-center">
                <CreditCard className="h-4 w-4 mr-2 text-gray-500" />
                <span className="font-medium">**** 4242</span>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-4">
            <CardTitle className="text-lg font-semibold">Customer Information</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-gray-500">Name</span>
              <span className="font-medium">John Doe</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-500">Email</span>
              <span className="font-medium">john.doe@example.com</span>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
