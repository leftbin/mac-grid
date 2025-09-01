import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { ArrowRight, Cpu, Shield, TrendingDown, Zap, CheckCircle, Play, Users, Building2, Laptop } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

import Hero from "../components/home/Hero";
import ValueProps from "../components/home/ValueProps";
import HowItWorks from "../components/home/HowItWorks";
import CostSavings from "../components/home/CostSavings";
import CTABand from "../components/shared/CTABand";

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Prelaunch Banner */}
      <div className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white py-2 px-4">
        <div className="max-w-7xl mx-auto text-center text-sm">
          <Badge variant="secondary" className="bg-white/20 text-white border-white/30 mr-3">
            PRELAUNCH
          </Badge>
          We're building the future of workstation orchestration. Join the waitlist for early access.
        </div>
      </div>

      <Hero />
      <ValueProps />
      <HowItWorks />
      <CostSavings />
      <CTABand />
    </div>
  );
}