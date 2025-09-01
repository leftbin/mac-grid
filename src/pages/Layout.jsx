

import React from "react";
import { Link, useLocation } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { 
  Menu, X, Cpu, ArrowRight
} from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const navigation = [
  { name: "How It Works", href: createPageUrl("HowItWorks") },
  { name: "Roadmap", href: createPageUrl("Roadmap") },
  { name: "About", href: createPageUrl("About") },
];

// Simplified footer for prelaunch

export default function Layout({ children, currentPageName }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link to={createPageUrl("Home")} className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-lg flex items-center justify-center shadow-md">
                <Cpu className="w-6 h-6 text-white" />
              </div>
              <div>
                <span className="text-xl font-bold text-slate-900">MacMesh</span>
                <Badge variant="secondary" className="ml-2 text-xs bg-blue-100 text-blue-700">
                  Prelaunch
                </Badge>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`text-sm font-medium transition-colors hover:text-blue-600 ${
                    location.pathname === item.href 
                      ? 'text-blue-600' 
                      : 'text-slate-600'
                  }`}
                  data-analytics="nav_click"
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            {/* CTA Button & Mobile Menu */}
            <div className="flex items-center space-x-4">
              <Link to={createPageUrl("Waitlist")} className="hidden sm:block">
                <Button className="bg-blue-600 hover:bg-blue-700" data-analytics="nav_waitlist_click">
                  Join the waitlist
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>

              {/* Mobile menu button */}
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-slate-200 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
              <div className="flex flex-col space-y-4">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className="text-slate-600 hover:text-blue-600 font-medium py-2"
                    onClick={() => setIsMenuOpen(false)}
                    data-analytics="mobile_nav_click"
                  >
                    {item.name}
                  </Link>
                ))}
                <Link to={createPageUrl("Waitlist")} className="pt-4">
                  <Button 
                    className="w-full bg-blue-600 hover:bg-blue-700"
                    onClick={() => setIsMenuOpen(false)}
                    data-analytics="mobile_waitlist_click"
                  >
                    Join the waitlist
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-1">
        {children}
      </main>

      {/* Footer (simplified for prelaunch) */}
      <footer className="bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="flex flex-col items-center text-center">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-9 h-9 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-lg flex items-center justify-center">
                <Cpu className="w-5 h-5 text-white" />
              </div>
              <span className="text-lg font-bold">MacMesh</span>
            </div>
            <p className="text-slate-400 text-sm mb-6">
              Product in prelaunch development. Join the waitlist to get updates.
            </p>
            <Link to={createPageUrl("Waitlist")}>
              <Button 
                className="bg-blue-600 hover:bg-blue-700"
                data-analytics="footer_waitlist_click"
              >
                Join the waitlist
              </Button>
            </Link>
            <p className="text-slate-500 text-xs mt-6">© {new Date().getFullYear()} MacMesh</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

