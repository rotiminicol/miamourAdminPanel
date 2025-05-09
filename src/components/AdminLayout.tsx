
import { useState, useEffect } from "react";
import { useNavigate, Link, Outlet } from "react-router-dom";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { 
  LayoutDashboard, 
  Users, 
  Settings, 
  LogOut, 
  Calendar, 
  Heart, 
  MessageSquare
} from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

const AdminLayout = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  
  useEffect(() => {
    const authStatus = localStorage.getItem("admin-authenticated");
    if (authStatus !== "true") {
      navigate("/admin/login");
    } else {
      setIsAuthenticated(true);
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("admin-authenticated");
    toast({
      title: "Logged out",
      description: "You have been successfully logged out",
    });
    navigate("/admin/login");
  };

  if (!isAuthenticated) {
    return null; // Don't render anything until authentication is checked
  }

  // Admin navigation items
  const navItems = [
    { 
      title: "Dashboard", 
      path: "/admin/dashboard", 
      icon: <LayoutDashboard className="h-4 w-4" /> 
    },
    { 
      title: "Users", 
      path: "/admin/users", 
      icon: <Users className="h-4 w-4" /> 
    },
    { 
      title: "Matches", 
      path: "/admin/matches", 
      icon: <Heart className="h-4 w-4" /> 
    },
    { 
      title: "Messages", 
      path: "/admin/messages", 
      icon: <MessageSquare className="h-4 w-4" /> 
    },
    { 
      title: "Events", 
      path: "/admin/events", 
      icon: <Calendar className="h-4 w-4" /> 
    },
    { 
      title: "Settings", 
      path: "/admin/settings", 
      icon: <Settings className="h-4 w-4" /> 
    },
  ];

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full">
        <Sidebar className="border-r border-miamour-100">
          <SidebarHeader className="flex h-14 items-center px-4">
            <Link to="/admin/dashboard" className="flex items-center space-x-2">
              <Heart className="h-6 w-6 text-miamour-500" />
              <span className="text-xl font-semibold">Mi Amour</span>
            </Link>
          </SidebarHeader>
          <SidebarContent className="flex-1">
            <SidebarGroup>
              <SidebarGroupLabel>Main</SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  {navItems.map((item) => (
                    <SidebarMenuItem key={item.title}>
                      <SidebarMenuButton asChild>
                        <Link to={item.path} className="flex items-center">
                          {item.icon}
                          <span>{item.title}</span>
                        </Link>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  ))}
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          </SidebarContent>
          <SidebarFooter>
            <div className="flex items-center justify-between px-4 py-2">
              <div className="flex items-center space-x-3">
                <Avatar className="h-9 w-9">
                  <AvatarImage src="/placeholder.svg" alt="Admin" />
                  <AvatarFallback className="bg-miamour-200 text-miamour-700">AD</AvatarFallback>
                </Avatar>
                <div>
                  <p className="text-sm font-medium">Admin User</p>
                  <p className="text-xs text-muted-foreground">admin@miamour.me</p>
                </div>
              </div>
              <Button
                variant="ghost" 
                size="icon" 
                onClick={handleLogout}
                className="text-miamour-500 hover:text-miamour-700 hover:bg-miamour-50"
              >
                <LogOut className="h-4 w-4" />
              </Button>
            </div>
          </SidebarFooter>
        </Sidebar>

        <div className="flex-1 w-full">
          <header className="flex h-14 items-center gap-4 border-b border-miamour-100 px-6">
            <SidebarTrigger />
            <div className="flex-1" />
            <div className="flex items-center gap-4">
              <Button
                variant="ghost" 
                size="icon"
                onClick={handleLogout}
                className="text-miamour-500 hover:text-miamour-700 hover:bg-miamour-50"
              >
                <LogOut className="h-4 w-4" />
              </Button>
            </div>
          </header>
          <main className="flex-1 p-6 admin-gradient-bg min-h-[calc(100vh-56px)]">
            <Outlet />
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
};

export default AdminLayout;
