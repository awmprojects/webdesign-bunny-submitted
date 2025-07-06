
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Plus, Globe, Palette, Settings, MessageSquare, FileText, Gift, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

const QuickActions = () => {
  return (
    <Card className="shadow-lg">
      <CardHeader>
        <CardTitle className="flex items-center space-x-2">
          <Sparkles className="w-5 h-5 text-orange-500" />
          <span>Quick Actions</span>
        </CardTitle>
        <CardDescription>Start your web design journey today</CardDescription>
      </CardHeader>
      <CardContent className="space-y-3">
        <Button asChild className="w-full justify-start bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white font-semibold">
          <Link to="/claim-credit">
            <Gift className="w-4 h-4 mr-2" />
            🎉 Claim FREE $500 Credit
          </Link>
        </Button>
        
        <Button className="w-full justify-start bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600">
          <Plus className="w-4 h-4 mr-2" />
          Start New Project
        </Button>
        
        <Button variant="outline" className="w-full justify-start border-orange-200 hover:bg-orange-50">
          <Globe className="w-4 h-4 mr-2" />
          View Live Websites
        </Button>
        
        <Button variant="outline" className="w-full justify-start">
          <Palette className="w-4 h-4 mr-2" />
          Design Gallery
        </Button>
        
        <Button variant="outline" className="w-full justify-start">
          <MessageSquare className="w-4 h-4 mr-2" />
          Client Messages
        </Button>
        
        <Button variant="outline" className="w-full justify-start">
          <FileText className="w-4 h-4 mr-2" />
          Project Proposals
        </Button>
        
        <Button variant="outline" className="w-full justify-start">
          <Settings className="w-4 h-4 mr-2" />
          Account Settings
        </Button>
      </CardContent>
    </Card>
  );
};

export default QuickActions;
