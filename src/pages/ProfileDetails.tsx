
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, User, Settings } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function ProfileDetails() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-md mx-auto">
        <div className="flex items-center mb-6">
          <Button 
            variant="ghost" 
            size="sm" 
            onClick={() => navigate("/")} 
            className="mr-2"
          >
            <ArrowLeft className="h-4 w-4" />
          </Button>
          <h1 className="text-xl font-bold">Profile Details</h1>
        </div>
        
        <div className="flex flex-col items-center justify-center mb-6">
          <div className="bg-primary rounded-full p-6 mb-3">
            <User className="h-12 w-12 text-white" />
          </div>
          <h2 className="text-xl font-bold">John Doe</h2>
          <p className="text-gray-500">john.doe@example.com</p>
        </div>

        <Card className="mb-6">
          <CardHeader className="pb-4">
            <CardTitle className="text-lg font-semibold">Personal Information</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-gray-500">Full Name</span>
              <span className="font-medium">John Doe</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-500">Email</span>
              <span className="font-medium">john.doe@example.com</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-500">Phone Number</span>
              <span className="font-medium">+1 (555) 123-4567</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-500">Date of Birth</span>
              <span className="font-medium">January 1, 1990</span>
            </div>
          </CardContent>
        </Card>

        <Card className="mb-6">
          <CardHeader className="pb-4">
            <CardTitle className="text-lg font-semibold">Account Information</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-gray-500">Member Since</span>
              <span className="font-medium">January 2023</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-500">Last Login</span>
              <span className="font-medium">May 19, 2025</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-500">Account Status</span>
              <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-medium">Active</span>
            </div>
          </CardContent>
        </Card>

        <Button className="w-full" variant="outline" onClick={() => navigate("/transaction-details")}>
          <Settings className="mr-2 h-4 w-4" /> View Transactions
        </Button>
      </div>
    </div>
  );
}
