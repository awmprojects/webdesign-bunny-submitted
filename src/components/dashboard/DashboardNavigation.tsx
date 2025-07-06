
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";
import { BarChart3, FileText, Settings, User, Wallet, Star, ShoppingBag, Users } from "lucide-react";

const DashboardNavigation = () => {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Dashboard</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <Link
                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-orange-500/20 to-orange-600/20 p-6 no-underline outline-none focus:shadow-md"
                    to="/dashboard"
                  >
                    <BarChart3 className="h-6 w-6" />
                    <div className="mb-2 mt-4 text-lg font-medium">
                      Overview
                    </div>
                    <p className="text-sm leading-tight text-muted-foreground">
                      View your earnings, reviews, and performance metrics.
                    </p>
                  </Link>
                </NavigationMenuLink>
              </li>
              <li>
                <NavigationMenuLink asChild>
                  <Link
                    to="/products"
                    className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                  >
                    <div className="text-sm font-medium leading-none flex items-center gap-2">
                      <ShoppingBag className="h-4 w-4" />
                      Products
                    </div>
                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                      Browse and select products to review
                    </p>
                  </Link>
                </NavigationMenuLink>
              </li>
              <li>
                <NavigationMenuLink asChild>
                  <Link
                    to="/reviews"
                    className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                  >
                    <div className="text-sm font-medium leading-none flex items-center gap-2">
                      <FileText className="h-4 w-4" />
                      Reviews
                    </div>
                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                      Manage your reviews and submissions
                    </p>
                  </Link>
                </NavigationMenuLink>
              </li>
              <li>
                <NavigationMenuLink asChild>
                  <Link
                    to="/dashboard/earnings"
                    className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                  >
                    <div className="text-sm font-medium leading-none flex items-center gap-2">
                      <Wallet className="h-4 w-4" />
                      Earnings
                    </div>
                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                      Track your payments and rewards
                    </p>
                  </Link>
                </NavigationMenuLink>
              </li>
              <li>
                <NavigationMenuLink asChild>
                  <Link
                    to="/affiliate"
                    className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                  >
                    <div className="text-sm font-medium leading-none flex items-center gap-2">
                      <Users className="h-4 w-4" />
                      Affiliate Program
                    </div>
                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                      Earn commissions from referrals
                    </p>
                  </Link>
                </NavigationMenuLink>
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        
        <NavigationMenuItem>
          <Link to="/products" className={navigationMenuTriggerStyle()}>
            Products
          </Link>
        </NavigationMenuItem>
        
        <NavigationMenuItem>
          <Link to="/reviews" className={navigationMenuTriggerStyle()}>
            Reviews
          </Link>
        </NavigationMenuItem>
        
        <NavigationMenuItem>
          <Link to="/dashboard/earnings" className={navigationMenuTriggerStyle()}>
            Earnings
          </Link>
        </NavigationMenuItem>
        
        <NavigationMenuItem>
          <NavigationMenuTrigger>Account</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <Link
                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-amber-500/20 to-orange-500/20 p-6 no-underline outline-none focus:shadow-md"
                    to="/dashboard/profile"
                  >
                    <User className="h-6 w-6" />
                    <div className="mb-2 mt-4 text-lg font-medium">
                      Profile
                    </div>
                    <p className="text-sm leading-tight text-muted-foreground">
                      Manage your account settings and preferences.
                    </p>
                  </Link>
                </NavigationMenuLink>
              </li>
              <li>
                <NavigationMenuLink asChild>
                  <Link
                    to="/dashboard/settings"
                    className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                  >
                    <div className="text-sm font-medium leading-none flex items-center gap-2">
                      <Settings className="h-4 w-4" />
                      Settings
                    </div>
                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                      Configure notifications and preferences
                    </p>
                  </Link>
                </NavigationMenuLink>
              </li>
              <li>
                <NavigationMenuLink asChild>
                  <Link
                    to="/dashboard/achievements"
                    className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                  >
                    <div className="text-sm font-medium leading-none flex items-center gap-2">
                      <Star className="h-4 w-4" />
                      Achievements
                    </div>
                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                      View your badges and milestones
                    </p>
                  </Link>
                </NavigationMenuLink>
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default DashboardNavigation;
