
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { LineChart, Line, BarChart, Bar, PieChart, Pie, ResponsiveContainer, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Cell } from 'recharts';

// Sample data - would be replaced with real data from your API
const userActivityData = [
  { name: 'Jan', users: 400, matches: 240 },
  { name: 'Feb', users: 300, matches: 139 },
  { name: 'Mar', users: 200, matches: 180 },
  { name: 'Apr', users: 278, matches: 190 },
  { name: 'May', users: 189, matches: 120 },
  { name: 'Jun', users: 239, matches: 170 },
  { name: 'Jul', users: 349, matches: 230 },
];

const genderDistribution = [
  { name: 'Male', value: 540 },
  { name: 'Female', value: 620 },
  { name: 'Non-binary', value: 120 },
];

const ageDistribution = [
  { name: '18-24', users: 120 },
  { name: '25-34', users: 280 },
  { name: '35-44', users: 200 },
  { name: '45-54', users: 180 },
  { name: '55+', users: 60 },
];

const GENDER_COLORS = ['#5EA9FF', '#FF66C4', '#A78BFA'];

const AdminDashboard = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
        <p className="text-muted-foreground">
          Overview of your Mi Amour platform statistics.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card className="border-miamour-100">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Users</CardTitle>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="h-4 w-4 text-miamour-500"
            >
              <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
              <circle cx="9" cy="7" r="4" />
              <path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
            </svg>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1,280</div>
            <p className="text-xs text-muted-foreground">
              +20% from last month
            </p>
          </CardContent>
        </Card>
        
        <Card className="border-miamour-100">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Matches Made</CardTitle>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="h-4 w-4 text-miamour-500"
            >
              <path d="M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572" />
            </svg>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">523</div>
            <p className="text-xs text-muted-foreground">
              +12% from last month
            </p>
          </CardContent>
        </Card>
        
        <Card className="border-miamour-100">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Events</CardTitle>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="h-4 w-4 text-miamour-500"
            >
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
              <line x1="16" y1="2" x2="16" y2="6" />
              <line x1="8" y1="2" x2="8" y2="6" />
              <line x1="3" y1="10" x2="21" y2="10" />
            </svg>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12</div>
            <p className="text-xs text-muted-foreground">
              +2 new this week
            </p>
          </CardContent>
        </Card>
        
        <Card className="border-miamour-100">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Messages Sent</CardTitle>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="h-4 w-4 text-miamour-500"
            >
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
            </svg>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3,729</div>
            <p className="text-xs text-muted-foreground">
              +40% from last month
            </p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="activity" className="space-y-4">
        <TabsList className="bg-miamour-50 text-miamour-900">
          <TabsTrigger value="activity">User Activity</TabsTrigger>
          <TabsTrigger value="demographics">Demographics</TabsTrigger>
        </TabsList>
        
        <TabsContent value="activity" className="space-y-4">
          <Card className="border-miamour-100">
            <CardHeader>
              <CardTitle>User Activity & Matches</CardTitle>
              <CardDescription>
                Monthly user registrations and match creation trends over time.
              </CardDescription>
            </CardHeader>
            <CardContent className="px-2">
              <div className="h-80 mt-4">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart
                    data={userActivityData}
                    margin={{
                      top: 5,
                      right: 30,
                      left: 20,
                      bottom: 5,
                    }}
                  >
                    <CartesianGrid strokeDasharray="3 3" stroke="#f3f3f3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line
                      type="monotone"
                      dataKey="users"
                      stroke="#6A7BFF"
                      activeDot={{ r: 8 }}
                      strokeWidth={2}
                    />
                    <Line
                      type="monotone" 
                      dataKey="matches" 
                      stroke="#FF66C4" 
                      strokeWidth={2}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="demographics" className="grid gap-4 md:grid-cols-2">
          <Card className="border-miamour-100">
            <CardHeader>
              <CardTitle>Gender Distribution</CardTitle>
              <CardDescription>
                Breakdown of users by gender identity.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-80 mt-4">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={genderDistribution}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                      outerRadius={80}
                      fill="#8884d8"
                      dataKey="value"
                    >
                      {genderDistribution.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={GENDER_COLORS[index % GENDER_COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip />
                    <Legend />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
          
          <Card className="border-miamour-100">
            <CardHeader>
              <CardTitle>Age Distribution</CardTitle>
              <CardDescription>
                Breakdown of users by age group.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-80 mt-4">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart
                    data={ageDistribution}
                    margin={{
                      top: 5,
                      right: 30,
                      left: 20,
                      bottom: 5,
                    }}
                  >
                    <CartesianGrid strokeDasharray="3 3" stroke="#f3f3f3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="users" name="Users" fill="#FF66C4" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default AdminDashboard;
