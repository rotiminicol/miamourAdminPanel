
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";

const AdminSettings = () => {
  const { toast } = useToast();
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [adminEmail, setAdminEmail] = useState("admin@miamour.me");
  const [siteTitle, setSiteTitle] = useState("Mi Amour");
  const [siteDescription, setSiteDescription] = useState("Find your perfect match with Mi Amour - the premier wedding matching service.");
  
  const handleSave = () => {
    toast({
      title: "Settings saved",
      description: "Your settings have been saved successfully.",
    });
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Settings</h1>
        <p className="text-muted-foreground">
          Manage your Mi Amour platform settings and preferences.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="border-miamour-100">
          <CardHeader>
            <CardTitle>General Settings</CardTitle>
            <CardDescription>
              Configure general platform settings.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="site-title">Site Title</Label>
              <Input 
                id="site-title" 
                value={siteTitle}
                onChange={(e) => setSiteTitle(e.target.value)}
                className="border-miamour-200"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="site-description">Site Description</Label>
              <Textarea 
                id="site-description" 
                value={siteDescription}
                onChange={(e) => setSiteDescription(e.target.value)}
                className="border-miamour-200"
                rows={3}
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="admin-email">Admin Email</Label>
              <Input 
                id="admin-email" 
                type="email" 
                value={adminEmail}
                onChange={(e) => setAdminEmail(e.target.value)}
                className="border-miamour-200"
              />
            </div>
            
            <div className="flex items-center space-x-2 pt-2">
              <Switch 
                id="email-notifications" 
                checked={emailNotifications} 
                onCheckedChange={setEmailNotifications}
              />
              <Label htmlFor="email-notifications">Email Notifications</Label>
            </div>

            <Button
              className="w-full mt-4 bg-miamour-500 hover:bg-miamour-600"
              onClick={handleSave}
            >
              Save Changes
            </Button>
          </CardContent>
        </Card>

        <Card className="border-miamour-100">
          <CardHeader>
            <CardTitle>Security Settings</CardTitle>
            <CardDescription>
              Manage security settings and admin access.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="current-password">Current Password</Label>
              <Input id="current-password" type="password" className="border-miamour-200" />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="new-password">New Password</Label>
              <Input id="new-password" type="password" className="border-miamour-200" />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="confirm-password">Confirm New Password</Label>
              <Input id="confirm-password" type="password" className="border-miamour-200" />
            </div>

            <Button
              className="w-full mt-4 bg-miamour-500 hover:bg-miamour-600"
              onClick={() => {
                toast({
                  title: "Password updated",
                  description: "Your password has been updated successfully.",
                });
              }}
            >
              Update Password
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AdminSettings;
