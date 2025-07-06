
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Users, UserCog, Plus, DollarSign } from "lucide-react";
import DashboardHeader from "@/components/dashboard/DashboardHeader";
import UserManagement from "@/components/admin/UserManagement";
import ManagerManagement from "@/components/admin/ManagerManagement";
import WithdrawalManagement from "@/components/admin/WithdrawalManagement";
import UserForm from "@/components/admin/UserForm";

const Admin = () => {
  const [activeTab, setActiveTab] = useState("users");
  const [showUserForm, setShowUserForm] = useState(false);
  const [editingUser, setEditingUser] = useState<any>(null);
  const [userType, setUserType] = useState<"user" | "manager">("user");

  const handleAddUser = (type: "user" | "manager") => {
    setUserType(type);
    setEditingUser(null);
    setShowUserForm(true);
  };

  const handleEditUser = (user: any, type: "user" | "manager") => {
    setUserType(type);
    setEditingUser(user);
    setShowUserForm(true);
  };

  const handleCloseForm = () => {
    setShowUserForm(false);
    setEditingUser(null);
  };

  if (showUserForm) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
        <DashboardHeader />
        <main className="container mx-auto px-4 py-8">
          <UserForm 
            user={editingUser}
            userType={userType}
            onClose={handleCloseForm}
          />
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      <DashboardHeader />
      
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Admin Dashboard</h1>
          <p className="text-gray-600">Manage users, managers, and withdrawal requests across the platform</p>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-6">
            <TabsTrigger value="users" className="flex items-center gap-2">
              <Users className="w-4 h-4" />
              User Management
            </TabsTrigger>
            <TabsTrigger value="managers" className="flex items-center gap-2">
              <UserCog className="w-4 h-4" />
              Manager Management
            </TabsTrigger>
            <TabsTrigger value="withdrawals" className="flex items-center gap-2">
              <DollarSign className="w-4 h-4" />
              Withdrawal Requests
            </TabsTrigger>
          </TabsList>

          <TabsContent value="users">
            <div className="space-y-6">
              <div className="flex justify-between items-center">
                <div>
                  <h2 className="text-2xl font-semibold text-gray-900">Users</h2>
                  <p className="text-gray-600">Manage regular users and their permissions</p>
                </div>
                <Button 
                  onClick={() => handleAddUser("user")}
                  className="bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600"
                >
                  <Plus className="w-4 h-4 mr-2" />
                  Add New User
                </Button>
              </div>
              <UserManagement onEditUser={(user) => handleEditUser(user, "user")} />
            </div>
          </TabsContent>

          <TabsContent value="managers">
            <div className="space-y-6">
              <div className="flex justify-between items-center">
                <div>
                  <h2 className="text-2xl font-semibold text-gray-900">Managers</h2>
                  <p className="text-gray-600">Manage platform managers and their roles</p>
                </div>
                <Button 
                  onClick={() => handleAddUser("manager")}
                  className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600"
                >
                  <Plus className="w-4 h-4 mr-2" />
                  Add New Manager
                </Button>
              </div>
              <ManagerManagement onEditManager={(manager) => handleEditUser(manager, "manager")} />
            </div>
          </TabsContent>

          <TabsContent value="withdrawals">
            <div className="space-y-6">
              <div className="flex justify-between items-center">
                <div>
                  <h2 className="text-2xl font-semibold text-gray-900">Withdrawal Requests</h2>
                  <p className="text-gray-600">Review and manage user withdrawal requests</p>
                </div>
              </div>
              <WithdrawalManagement />
            </div>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
};

export default Admin;
