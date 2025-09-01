
import React, { useState, useEffect } from "react";
import { createPageUrl } from "@/utils";
import { CheckCircle, Rocket, Users, TrendingUp, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export default function WaitlistPage() {
  const [submitted, setSubmitted] = useState(false);

  // Listen for form submission (basic detection)
  useEffect(() => {
    const handleMessage = (event) => {
      // Google Forms sends messages when submitted
      if (event.data && typeof event.data === 'string' && event.data.includes('formSubmitted')) {
        setSubmitted(true);
      }
    };

    window.addEventListener('message', handleMessage);
    return () => window.removeEventListener('message', handleMessage);
  }, []);

  const benefits = [
    {
      icon: Rocket,
      title: "Early Access",
      description: "Be among the first to transform your infrastructure costs"
    },
    {
      icon: Users,
      title: "Shape the Product",
      description: "Your feedback directly influences our roadmap and features"
    },
    {
      icon: TrendingUp,
      title: "Exclusive Updates",
      description: "Get insider progress reports and technical deep dives"
    }
  ];

  if (submitted) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-green-50 to-white flex items-center justify-center px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-2xl mx-auto text-center"
        >
          <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-8">
            <CheckCircle className="w-12 h-12 text-white" />
          </div>
          <h1 className="text-4xl font-bold text-slate-900 mb-6">
            Welcome to the waitlist! 🎉
          </h1>
          <p className="text-xl text-slate-600 mb-8">
            Thank you for your interest in MacMesh. We'll be in touch soon with updates 
            and early access opportunities.
          </p>
          <div className="bg-blue-50 rounded-lg p-6 mb-8">
            <h3 className="font-semibold text-slate-900 mb-2">What happens next?</h3>
            <ul className="text-slate-700 space-y-2 text-left">
              <li>• We'll send a confirmation email within 24 hours</li>
              <li>• Early design partners get first priority for alpha access</li>
              <li>• Expect monthly updates on our progress</li>
              <li>• Beta invitations roll out Q2 2024</li>
            </ul>
          </div>
          <Button 
            variant="outline" 
            onClick={() => window.location.href = createPageUrl("Home")}
          >
            Back to Home
            <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Badge className="mb-6 bg-blue-100 text-blue-700 border-blue-200">
              <Rocket className="w-4 h-4 mr-2" />
              Join the Revolution
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6">
              Get early access to
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
                MacMesh
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 max-w-3xl mx-auto mb-8">
              Join forward-thinking platform teams who are reimagining infrastructure costs. 
              Shape the future of workstation orchestration.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Benefits */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-2xl font-bold text-slate-900 mb-8">
              Why join the waitlist?
            </h2>
            
            <div className="space-y-6 mb-12">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 + index * 0.1 }}
                >
                  <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center flex-shrink-0">
                          <benefit.icon className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-slate-900 mb-2">{benefit.title}</h3>
                          <p className="text-slate-600">{benefit.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl p-8">
              <h3 className="font-semibold text-slate-900 mb-4">Current Status</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-slate-700">Alpha Development</span>
                  <Badge className="bg-yellow-100 text-yellow-700">In Progress</Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-700">Design Partner Program</span>
                  <Badge className="bg-green-100 text-green-700">Open</Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-700">Beta Launch</span>
                  <Badge className="bg-blue-100 text-blue-700">Q3 2025</Badge>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Waitlist Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Card className="border-0 shadow-2xl">
              <CardHeader className="text-center pb-2">
                <CardTitle className="text-2xl font-bold text-slate-900">
                  Join the Waitlist
                </CardTitle>
                <p className="text-slate-600 mt-2">
                  No spam. We review signups weekly and invite in waves.
                </p>
              </CardHeader>
              <CardContent className="p-0">
                {/* Google Form Embed */}
                <div className="relative">
                  <iframe
                    src="https://docs.google.com/forms/d/e/1FAIpQLSf7gaaHCWQQ1-X369Ge4l2l6w8-xphnT14vsaXATJ2v3F4d2g/viewform?embedded=true"
                    width="100%"
                    height="1200"
                    frameBorder="0"
                    marginHeight="0"
                    marginWidth="0"
                    className="rounded-b-lg"
                    title="MacMesh Waitlist"
                    data-analytics="waitlist_form_load"
                  >
                    Loading…
                  </iframe>
                  
                  {/* Fallback link */}
                  <div className="p-6 text-center border-t">
                    <p className="text-slate-600 mb-4">
                      Having trouble with the form?
                    </p>
                    <a
                      href="https://docs.google.com/forms/d/e/1FAIpQLSf7gaaHCWQQ1-X369Ge4l2l6w8-xphnT14vsaXATJ2v3F4d2g/viewform"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-700 font-medium underline"
                      data-analytics="outbound_click"
                    >
                      Open form in new tab
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
        
        {/* Copyright notice */}
        <div className="text-center text-sm text-slate-500 mt-16 pb-8">
          © {new Date().getFullYear()} MacMesh. All rights reserved.
        </div>
      </div>
    </div>
  );
}
