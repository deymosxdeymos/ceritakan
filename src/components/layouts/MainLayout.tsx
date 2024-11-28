import Footer from "../common/Footer/Footer";
import Navbar from "../common/Navbar/Navbar";
import { Privacy } from "../home/Privacy/Privacy";

export const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main className="container mx-auto px-4 py-10">{children}</main>
      <Privacy />
      <Footer />
    </div>
  );
};
