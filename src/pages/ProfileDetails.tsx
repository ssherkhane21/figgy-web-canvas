
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function ProfileDetails() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header with green background */}
      <div className="bg-green-700 text-white p-4 pb-32 relative">
        <div className="flex items-center">
          <Button 
            variant="ghost" 
            size="sm" 
            onClick={() => navigate("/transaction-details")} 
            className="text-white p-0"
          >
            <ArrowLeft className="h-5 w-5" />
          </Button>
          <h1 className="text-xl font-semibold ml-2">Profile</h1>
        </div>
        
        {/* Profile Avatar */}
        <div className="absolute left-1/2 transform -translate-x-1/2 bottom-0 translate-y-1/2">
          <div className="bg-gray-200 rounded-full w-24 h-24 flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
          </div>
        </div>
      </div>
      
      {/* Profile details card */}
      <div className="max-w-md mx-auto px-4 mt-16">
        <Card className="bg-white shadow-sm">
          <CardContent className="p-6">
            <h2 className="text-lg font-semibold text-center mb-6">Personal Details</h2>
            
            <div className="space-y-4">
              <div className="space-y-1">
                <p className="text-sm text-gray-600">Name</p>
                <p>- Dezusa</p>
              </div>
              
              <div className="space-y-1">
                <p className="text-sm text-gray-600">Tel</p>
                <p>- 8767760912</p>
              </div>
              
              <div className="space-y-1">
                <p className="text-sm text-gray-600">Email ID</p>
                <p>- pd@gmail.com</p>
              </div>
              
              <div className="space-y-1">
                <p className="text-sm text-gray-600">DOB</p>
                <p>- 27/09/1990</p>
              </div>
              
              <div className="space-y-1">
                <p className="text-sm text-gray-600">User ID</p>
                <p>- 980DUUOIU</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
