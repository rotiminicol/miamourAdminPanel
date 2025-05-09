
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { LineChart, Line, BarChart, Bar, PieChart, Pie, ResponsiveContainer, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Cell } from 'recharts';
import { useEffect, useState } from 'react';

const GENDER_COLORS = ['#5EA9FF', '#FF66C4', '#A78BFA'];

interface UserActivity {
  name: string;
  users: number;
  matches: number;
}

interface GenderDistribution {
  name: string;
  value: number;
}

interface AgeDistribution {
  name: string;
  users: number;
}

interface DashboardStats {
  totalUsers: number;
  matchesMade: number;
  activeEvents: number;
  messagesSent: number;
}

const AdminDashboard = () => {
  const [userActivity, setUserActivity] = useState<UserActivity[]>([]);
  const [genderData, setGenderData] = useState<GenderDistribution[]>([]);
  const [ageData, setAgeData] = useState<AgeDistribution[]>([]);
  const [stats, setStats] = useState<DashboardStats | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';
        
        // Make requests with proper headers
        const headers = {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        };

        // Make requests with proper headers
        const [activityRes, matchesRes, messagesRes, eventsRes] = await Promise.all([
          fetch(`${API_BASE_URL}/api/analytics/activity`, { headers }),
          fetch(`${API_BASE_URL}/api/analytics/matches`, { headers }),
          fetch(`${API_BASE_URL}/api/analytics/messages`, { headers }),
          fetch(`${API_BASE_URL}/api/analytics/events`, { headers })
        ]);

        // Check response status
        if (!activityRes.ok || !matchesRes.ok || !messagesRes.ok || !eventsRes.ok) {
          throw new Error('API request failed');
        }

        // Parse responses
        const [activityData, matchesData, messagesData, eventsData] = await Promise.all([
          activityRes.json(),
          matchesRes.json(),
          messagesRes.json(),
          eventsRes.json()
        ]);

        // Check if responses are in the expected format
        if (!activityData?.success || !matchesData?.success || !messagesData?.success || !eventsData?.success) {
          throw new Error('Invalid API response format');
        }

        // Transform data to match our state structure
        const transformedActivity = activityData.data.map(item => ({
          name: item._id,
          users: item.users || 0,
          matches: item.matches || 0
        }));

        const transformedMatches = matchesData.data.map(item => ({
          name: item._id,
          count: item.count || 0
        }));

        const transformedMessages = messagesData.data.map(item => ({
          name: item._id,
          count: item.count || 0
        }));

        const transformedEvents = eventsData.data.map(item => ({
          name: item._id,
          count: item.count || 0
        }));

        // Set state with the transformed data
        setUserActivity(transformedActivity);
        setGenderData(transformedMatches);
        setAgeData(transformedMessages);
        setStats(eventsData.data);
        setLoading(false);
      } catch (err) {
        console.error('Error fetching analytics:', err);
        setError('Failed to fetch analytics data');
        setLoading(false);
      }
    };

    fetchDashboardData();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-miamour-500"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center p-4">
        <h2 className="text-lg font-semibold text-red-500">Error</h2>
        <p className="text-muted-foreground">{error}</p>
      </div>
    );
  }

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
            <div className="text-2xl font-bold">{stats?.totalUsers || 0}</div>
            <p className="text-xs text-muted-foreground">
              +{stats?.totalUsers ? '20%' : '0%'} from last month
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
            <div className="text-2xl font-bold">{stats?.matchesMade || 0}</div>
            <p className="text-xs text-muted-foreground">
              +{stats?.matchesMade ? '12%' : '0%'} from last month
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
            <div className="text-2xl font-bold">{stats?.activeEvents || 0}</div>
            <p className="text-xs text-muted-foreground">
              +{stats?.activeEvents ? '2' : '0'} new this week
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
            <div className="text-2xl font-bold">{stats?.messagesSent || 0}</div>
            <p className="text-xs text-muted-foreground">
              +{stats?.messagesSent ? '40%' : '0%'} from last month
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
                    data={userActivity}
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
                      data={genderData}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                      outerRadius={80}
                      fill="#8884d8"
                      dataKey="value"
                    >
                      {genderData.map((entry, index) => (
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
                    data={ageData}
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
