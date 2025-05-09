
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const AdminEvents = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Events</h1>
        <p className="text-muted-foreground">
          Manage events and activities for Mi Amour users.
        </p>
      </div>

      <Card className="border-miamour-100">
        <CardHeader>
          <CardTitle>Event Management</CardTitle>
          <CardDescription>
            This is where you can create and manage events for users.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="rounded-md bg-miamour-50 p-8 text-center">
            <h3 className="text-lg font-medium text-miamour-700">Event Management</h3>
            <p className="mt-2 text-sm text-miamour-500">
              This feature will allow you to create, edit, and manage events for users.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AdminEvents;
