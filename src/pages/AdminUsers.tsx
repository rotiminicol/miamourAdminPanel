
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Table, 
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from "@/components/ui/table";
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import {
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle
} from "@/components/ui/card";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious
} from "@/components/ui/pagination";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { MoreHorizontal, Search, Users, Filter, UserCheck } from "lucide-react";

// Mock data - would be fetched from your API
const mockUsers = [
  {
    id: 1,
    name: "Jessica Smith",
    email: "jessica@example.com",
    status: "active",
    joinDate: "2023-03-12",
    matchCount: 7,
    age: 29,
    gender: "Female",
    location: "Los Angeles, CA"
  },
  {
    id: 2,
    name: "Michael Johnson",
    email: "michael@example.com",
    status: "active",
    joinDate: "2023-04-05",
    matchCount: 5,
    age: 34,
    gender: "Male",
    location: "New York, NY"
  },
  {
    id: 3,
    name: "Sarah Williams",
    email: "sarah@example.com",
    status: "inactive",
    joinDate: "2023-02-18",
    matchCount: 2,
    age: 27,
    gender: "Female", 
    location: "Chicago, IL"
  },
  {
    id: 4,
    name: "David Brown",
    email: "david@example.com",
    status: "active",
    joinDate: "2023-05-20",
    matchCount: 4,
    age: 31,
    gender: "Male",
    location: "Miami, FL"
  },
  {
    id: 5,
    name: "Emily Davis",
    email: "emily@example.com",
    status: "active",
    joinDate: "2023-03-25",
    matchCount: 9,
    age: 26,
    gender: "Female",
    location: "Seattle, WA"
  },
  {
    id: 6,
    name: "Alex Lee",
    email: "alex@example.com",
    status: "inactive",
    joinDate: "2023-04-10",
    matchCount: 0,
    age: 33,
    gender: "Non-binary",
    location: "Portland, OR"
  },
  {
    id: 7,
    name: "Taylor Wilson",
    email: "taylor@example.com",
    status: "active",
    joinDate: "2023-05-05",
    matchCount: 3,
    age: 30,
    gender: "Female",
    location: "Austin, TX"
  }
];

const AdminUsers = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [users, setUsers] = useState(mockUsers);

  // Filter users based on search term
  const filteredUsers = users.filter((user) => {
    return (
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.location.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Users</h1>
        <p className="text-muted-foreground">
          Manage your platform users and view their profiles.
        </p>
      </div>

      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input 
              placeholder="Search users..." 
              className="pl-10 w-[300px] border-miamour-200"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="sm" className="border-miamour-200">
                <Filter className="mr-2 h-4 w-4" />
                Filter
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>Filter by</DropdownMenuLabel>
              <DropdownMenuItem>Status</DropdownMenuItem>
              <DropdownMenuItem>Location</DropdownMenuItem>
              <DropdownMenuItem>Join Date</DropdownMenuItem>
              <DropdownMenuItem>Match Count</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        <Button className="bg-miamour-500 hover:bg-miamour-600">
          <UserCheck className="mr-2 h-4 w-4" />
          Add User
        </Button>
      </div>

      <Card className="border-miamour-100">
        <CardHeader className="pb-3">
          <div className="flex items-center justify-between">
            <CardTitle>All Users</CardTitle>
            <div className="flex items-center space-x-2">
              <Badge variant="outline" className="text-miamour-500 border-miamour-200">
                <Users className="mr-1 h-3 w-3" />
                {filteredUsers.length} users
              </Badge>
            </div>
          </div>
          <CardDescription>
            View and manage all registered users on Mi Amour.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>User</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Joined</TableHead>
                <TableHead>Location</TableHead>
                <TableHead>Age</TableHead>
                <TableHead>Matches</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredUsers.map((user) => (
                <TableRow key={user.id}>
                  <TableCell className="font-medium">
                    <div className="flex items-center">
                      <Avatar className="h-8 w-8 mr-2">
                        <AvatarImage src={`/placeholder.svg`} />
                        <AvatarFallback className="bg-miamour-100 text-miamour-500">
                          {user.name.charAt(0)}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <div className="font-medium">{user.name}</div>
                        <div className="text-xs text-muted-foreground">{user.email}</div>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge variant={user.status === "active" ? "default" : "secondary"} 
                      className={user.status === "active" ? "bg-green-100 text-green-700 hover:bg-green-100" : "bg-gray-100 text-gray-700 hover:bg-gray-100"}>
                      {user.status}
                    </Badge>
                  </TableCell>
                  <TableCell>{user.joinDate}</TableCell>
                  <TableCell>{user.location}</TableCell>
                  <TableCell>{user.age}</TableCell>
                  <TableCell>
                    <Badge variant="outline" className="bg-miamour-50 border-miamour-100">
                      {user.matchCount}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-right">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" className="h-8 w-8 p-0 text-miamour-500 hover:text-miamour-700 hover:bg-miamour-50">
                          <span className="sr-only">Open menu</span>
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuLabel>Actions</DropdownMenuLabel>
                        <DropdownMenuItem>View profile</DropdownMenuItem>
                        <DropdownMenuItem>View matches</DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>Edit user</DropdownMenuItem>
                        <DropdownMenuItem className="text-red-600">Deactivate account</DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          <Pagination className="mt-4">
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious href="#" />
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#" isActive>1</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">2</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">3</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationEllipsis />
              </PaginationItem>
              <PaginationItem>
                <PaginationNext href="#" />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </CardContent>
      </Card>
    </div>
  );
};

export default AdminUsers;
