import { Card, CardContent } from "@/components/ui/card";
import { DollarSign, Globe, TrendingUp, Briefcase } from "lucide-react";
const DashboardStats = () => {
  const stats = [{
    title: "Active Projects",
    value: "12",
    subValue: "+3 this month",
    icon: Briefcase,
    color: "from-blue-500 to-indigo-500",
    bgColor: "from-blue-50 to-indigo-50"
  }, {
    title: "Completed Designs",
    value: "47",
    subValue: "This year",
    icon: Globe,
    color: "from-green-500 to-emerald-500",
    bgColor: "from-green-50 to-emerald-50"
  }, {
    title: "Client Satisfaction",
    value: "4.9",
    subValue: "Average rating",
    icon: TrendingUp,
    color: "from-orange-500 to-amber-500",
    bgColor: "from-orange-50 to-amber-50"
  }, {
    title: "Project Revenue",
    value: "$24,500",
    subValue: "This quarter",
    icon: DollarSign,
    color: "from-purple-500 to-violet-500",
    bgColor: "from-purple-50 to-violet-50"
  }];
  return <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      {stats.map(stat => <Card key={stat.title} className={`bg-gradient-to-br ${stat.bgColor} border-0 shadow-lg hover:shadow-xl transition-shadow`}>
          
        </Card>)}
    </div>;
};
export default DashboardStats;