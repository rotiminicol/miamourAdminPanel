
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const AdminMatches = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Matches</h1>
        <p className="text-muted-foreground">
          View and manage matches between users on Mi Amour.
        </p>
      </div>

      <Card className="border-miamour-100">
        <CardHeader>
          <CardTitle>Match Management</CardTitle>
          <CardDescription>
            This is where you can view and manage all user matches in the platform.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="rounded-md bg-miamour-50 p-8 text-center">
            <h3 className="text-lg font-medium text-miamour-700">Match Management</h3>
            <p className="mt-2 text-sm text-miamour-500">
              This feature will allow you to view and manage all matches between users.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AdminMatches;
