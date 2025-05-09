
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen flex items-center justify-center admin-gradient-bg">
      <div className="text-center space-y-6 px-4">
        <h1 className="text-4xl font-bold mb-4 text-miamour-700">Mi Amour Wedding Matching</h1>
        <p className="text-xl text-miamour-600 max-w-md mx-auto">
          Welcome to Mi Amour's administration portal. Manage your wedding matching service with ease.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
          <Link to="/admin/login">
            <Button className="bg-miamour-500 hover:bg-miamour-600 px-8">
              Admin Login
            </Button>
          </Link>
          <a href="https://www.miamour.me" target="_blank" rel="noopener noreferrer">
            <Button variant="outline" className="border-miamour-300 text-miamour-600 hover:bg-miamour-50 px-8">
              Visit Main Site
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Index;
