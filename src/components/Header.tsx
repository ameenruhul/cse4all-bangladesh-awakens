
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <a href="/" className="flex items-center">
              <span className="text-xl font-bold text-cse-dark">
                CSE<span className="text-cse-purple">4</span>ALL
              </span>
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={toggleMenu}
              className="text-gray-500 hover:text-gray-700"
            >
              <Menu className="h-5 w-5" />
            </Button>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <NavLink href="/" active>Home</NavLink>
            <NavLink href="#about">About</NavLink>
            <NavLink href="#how-it-works">How It Works</NavLink>
            <NavLink href="#join-us">Join Us</NavLink>
          </nav>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="absolute top-16 inset-x-0 bg-white shadow-lg rounded-b-lg border-t md:hidden animate-fade-in">
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                <MobileNavLink href="/" active>Home</MobileNavLink>
                <MobileNavLink href="#about">About</MobileNavLink>
                <MobileNavLink href="#how-it-works">How It Works</MobileNavLink>
                <MobileNavLink href="#join-us">Join Us</MobileNavLink>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  active?: boolean;
}

const NavLink = ({ href, children, active }: NavLinkProps) => {
  return (
    <a
      href={href}
      className={`text-base font-medium transition-colors hover:text-cse-purple ${
        active ? "text-cse-purple" : "text-gray-700"
      }`}
    >
      {children}
    </a>
  );
};

const MobileNavLink = ({ href, children, active }: NavLinkProps) => {
  return (
    <a
      href={href}
      className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
        active 
          ? "bg-cse-softPurple text-cse-purple" 
          : "text-gray-700 hover:bg-gray-50 hover:text-cse-purple"
      }`}
    >
      {children}
    </a>
  );
};

export default Header;
