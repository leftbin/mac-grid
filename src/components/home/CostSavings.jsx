import React, { useState } from "react";
import { Calculator, TrendingDown, DollarSign } from "lucide-react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function CostSavings() {
  const [developers, setDevelopers] = useState(50);
  const [monthlySpend, setMonthlySpend] = useState(25000);
  
  const savings = Math.floor(monthlySpend * 0.65); // 65% average savings
  const laptopUtilization = Math.min(developers * 8, 100); // Hours per day potential
  
  return (
    <section className="py-20 lg:py-32 bg-gradient-to-br from-blue-50 to-cyan-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Badge className="mb-6 bg-green-100 text-green-700 border-green-200">
              <Calculator className="w-4 h-4 mr-2" />
              ROI Calculator
            </Badge>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
              Calculate your potential
              <span className="block text-green-600">cost savings</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              See how much you could save by utilizing existing laptop compute 
              instead of paying for dedicated cloud infrastructure.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="border-0 shadow-xl">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-slate-900">
                  Your Current Setup
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="developers">Number of Developers</Label>
                  <Input
                    id="developers"
                    type="number"
                    value={developers}
                    onChange={(e) => setDevelopers(Number(e.target.value))}
                    className="text-lg"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="spend">Monthly Cloud Spend</Label>
                  <div className="relative">
                    <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400" />
                    <Input
                      id="spend"
                      type="number"
                      value={monthlySpend}
                      onChange={(e) => setMonthlySpend(Number(e.target.value))}
                      className="pl-10 text-lg"
                    />
                  </div>
                </div>
                
                <div className="bg-slate-50 rounded-lg p-4 mt-6">
                  <h4 className="font-semibold text-slate-900 mb-2">Assumptions:</h4>
                  <ul className="text-sm text-slate-600 space-y-1">
                    <li>• MacBooks active 8 hours/day average</li>
                    <li>• 65% of workloads suitable for local execution</li>
                    <li>• CI/CD, testing, preview environments</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <Card className="border-0 shadow-xl bg-gradient-to-br from-green-500 to-emerald-500 text-white">
              <CardContent className="p-8 text-center">
                <TrendingDown className="w-16 h-16 mx-auto mb-4 opacity-90" />
                <h3 className="text-3xl font-bold mb-2">
                  ${savings.toLocaleString()}/month
                </h3>
                <p className="text-xl opacity-90">Potential Monthly Savings</p>
                <p className="mt-4 opacity-80">
                  That's ${(savings * 12).toLocaleString()} per year
                </p>
              </CardContent>
            </Card>

            <div className="grid grid-cols-2 gap-4">
              <Card className="border-0 shadow-lg">
                <CardContent className="p-6 text-center">
                  <div className="text-2xl font-bold text-blue-600 mb-1">
                    {Math.floor((savings / monthlySpend) * 100)}%
                  </div>
                  <div className="text-slate-600">Cost Reduction</div>
                </CardContent>
              </Card>
              
              <Card className="border-0 shadow-lg">
                <CardContent className="p-6 text-center">
                  <div className="text-2xl font-bold text-purple-600 mb-1">
                    {laptopUtilization}h
                  </div>
                  <div className="text-slate-600">Daily Compute Hours</div>
                </CardContent>
              </Card>
            </div>

            <div className="bg-blue-50 rounded-xl p-6">
              <h4 className="font-semibold text-slate-900 mb-3">Additional Benefits:</h4>
              <ul className="space-y-2 text-slate-700">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-3" />
                  Faster CI/CD pipelines (local execution)
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-3" />
                  Instant preview environments
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-3" />
                  Reduced queue wait times
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-3" />
                  Better resource utilization
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}