
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Search, ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

// Sample transaction data based on the image
const transactionData = [
  { id: "OL678057", userName: "Davi Malhotra", date: "11-03-2024", time: "01:30 PM", amount: "12,000XAF" },
  { id: "OL678057", userName: "Davi Malhotra", date: "21-03-2024", time: "11:30 PM", amount: "2,000XAF" },
  { id: "OL678057", userName: "Davi Malhotra", date: "22-03-2024", time: "10:30 PM", amount: "92,000XAF" },
  { id: "OL678057", userName: "Davi Malhotra", date: "22-03-2024", time: "10:30 PM", amount: "32,000XAF" },
  { id: "OL678057", userName: "Davi Malhotra", date: "22-03-2024", time: "10:30 PM", amount: "18,000XAF" },
  { id: "OL678057", userName: "Davi Malhotra", date: "22-03-2024", time: "10:30 PM", amount: "1,000XAF" },
];

export default function TransactionDetails() {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  
  const filteredTransactions = searchQuery
    ? transactionData.filter(
        (transaction) =>
          transaction.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
          transaction.userName.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : transactionData;

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white pt-4 pb-2 px-4">
        <div className="flex items-center gap-2 mb-4">
          <div className="rounded-full bg-gray-200 w-8 h-8 flex items-center justify-center">
            <span className="text-gray-600">👤</span>
          </div>
          <p className="text-sm">Hello, Burise</p>
        </div>
        
        <h1 className="text-xl font-semibold mb-4">Transaction History</h1>
        
        <div className="relative mb-4">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-4 w-4" />
          <Input
            type="text"
            placeholder="Search"
            className="pl-10 border-gray-300"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>
      
      <div className="overflow-x-auto">
        <Table>
          <TableHeader className="bg-amber-100">
            <TableRow>
              <TableHead className="font-medium">Transaction ID</TableHead>
              <TableHead className="font-medium">User Name</TableHead>
              <TableHead className="font-medium">Date</TableHead>
              <TableHead className="font-medium">Time</TableHead>
              <TableHead className="font-medium">Amount</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredTransactions.map((transaction, index) => (
              <TableRow key={index} className="bg-white">
                <TableCell>{transaction.id}</TableCell>
                <TableCell>{transaction.userName}</TableCell>
                <TableCell>{transaction.date}</TableCell>
                <TableCell>{transaction.time}</TableCell>
                <TableCell className="font-medium">{transaction.amount}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      
      <div className="flex justify-center my-6">
        <div className="w-48 h-2 bg-gray-200 rounded-full overflow-hidden">
          <div className="w-1/3 h-full bg-green-700"></div>
        </div>
      </div>

      <div className="fixed bottom-4 right-4">
        <Button 
          onClick={() => navigate("/profile-details")} 
          className="rounded-full bg-white text-gray-800 shadow-lg p-3"
        >
          👤
        </Button>
      </div>
    </div>
  );
}
