
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const AdminMessages = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Messages</h1>
        <p className="text-muted-foreground">
          Monitor and moderate user messages across the platform.
        </p>
      </div>

      <Card className="border-miamour-100">
        <CardHeader>
          <CardTitle>Message Management</CardTitle>
          <CardDescription>
            This is where you can monitor and moderate user messages.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="rounded-md bg-miamour-50 p-8 text-center">
            <h3 className="text-lg font-medium text-miamour-700">Message Management</h3>
            <p className="mt-2 text-sm text-miamour-500">
              This feature will allow you to view, search, and moderate messages between users.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AdminMessages;
