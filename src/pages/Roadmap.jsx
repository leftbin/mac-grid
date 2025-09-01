
import React from "react";
import { Calendar, Target, Rocket, Users, CheckCircle, Clock, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import CTABand from "../components/shared/CTABand";

const phases = [
  {
    phase: "Alpha",
    timeline: "Q1 2024",
    status: "in_progress",
    title: "Core Platform & Early Testing",
    description: "Building the foundational orchestration platform with select design partners",
    features: [
      "macOS agent for Apple Silicon",
      "Basic Kubernetes integration", 
      "Policy engine MVP",
      "Local workload execution",
      "Cloud failover prototype"
    ],
    icon: Rocket,
    color: "from-blue-500 to-cyan-500"
  },
  {
    phase: "Beta",
    timeline: "Q2 2024", 
    status: "planned",
    title: "Enterprise Features & Scale Testing",
    description: "Production-ready security, monitoring, and multi-cloud support",
    features: [
      "Enterprise security controls",
      "Multi-cloud orchestration (EKS, GKE, AKS)",
      "Advanced monitoring & analytics",
      "RBAC and audit logging",
      "Performance optimizations"
    ],
    icon: Users,
    color: "from-purple-500 to-pink-500"
  },
  {
    phase: "GA",
    timeline: "Q3 2024",
    status: "planned", 
    title: "General Availability",
    description: "Fully supported product with enterprise SLAs and expanded platform support",
    features: [
      "24/7 enterprise support",
      "SLA guarantees", 
      "Windows support (Intel/ARM)",
      "Advanced cost analytics",
      "Third-party integrations"
    ],
    icon: Target,
    color: "from-green-500 to-emerald-500"
  }
];

const milestones = [
  { date: "Jan 2024", title: "Alpha launch with design partners", completed: true },
  { date: "Feb 2024", title: "Multi-cloud failover implementation", completed: true },
  { date: "Mar 2024", title: "Security audit & enterprise controls", completed: false },
  { date: "Apr 2024", title: "Beta program opens", completed: false },
  { date: "May 2024", title: "Performance benchmarking", completed: false },
  { date: "Jun 2024", title: "Production readiness review", completed: false },
];

export default function RoadmapPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Hero Section */}
      <section className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Badge className="mb-8 bg-purple-100 text-purple-700 border-purple-200">
              <Calendar className="w-4 h-4 mr-2" />
              Product Development Timeline
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-8">
              Building the future of
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
                MacMesh
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 max-w-4xl mx-auto">
              Our transparent roadmap shows exactly where we're headed. 
              Join early to influence priorities and get first access to new capabilities.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Development Phases */}
      <section className="py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              Development Phases
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              From proof of concept to production-ready platform in three major phases.
            </p>
          </div>

          <div className="space-y-12">
            {phases.map((phase, index) => (
              <motion.div
                key={phase.phase}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="border-0 shadow-xl overflow-hidden">
                  <div className={`h-2 bg-gradient-to-r ${phase.color}`} />
                  <CardContent className="p-8">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                      <div>
                        <div className="flex items-center mb-4">
                          <div className={`w-12 h-12 bg-gradient-to-br ${phase.color} rounded-lg flex items-center justify-center mr-4`}>
                            <phase.icon className="w-6 h-6 text-white" />
                          </div>
                          <div>
                            <h3 className="text-2xl font-bold text-slate-900">{phase.phase}</h3>
                            <p className="text-slate-500">{phase.timeline}</p>
                          </div>
                        </div>
                        <div className="flex items-center mb-4">
                          {phase.status === 'in_progress' ? (
                            <>
                              <Clock className="w-5 h-5 text-blue-500 mr-2" />
                              <Badge className="bg-blue-100 text-blue-700">In Progress</Badge>
                            </>
                          ) : phase.status === 'completed' ? (
                            <>
                              <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                              <Badge className="bg-green-100 text-green-700">Completed</Badge>
                            </>
                          ) : (
                            <>
                              <Clock className="w-5 h-5 text-slate-400 mr-2" />
                              <Badge variant="outline">Planned</Badge>
                            </>
                          )}
                        </div>
                        <h4 className="text-xl font-bold text-slate-900 mb-2">{phase.title}</h4>
                        <p className="text-slate-600">{phase.description}</p>
                      </div>

                      <div className="lg:col-span-2">
                        <h5 className="font-semibold text-slate-900 mb-4">Key Features</h5>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                          {phase.features.map((feature, featureIndex) => (
                            <div key={featureIndex} className="flex items-start">
                              <div className={`w-2 h-2 bg-gradient-to-br ${phase.color} rounded-full mt-2 mr-3 flex-shrink-0`} />
                              <span className="text-slate-700">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Milestone Timeline */}
      <section className="py-20 lg:py-24 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              2024 Milestones
            </h2>
            <p className="text-xl text-slate-600">
              Key milestones and deliverables throughout our development journey.
            </p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-slate-300" />
            
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={milestone.date}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative flex items-center"
                >
                  <div className={`w-4 h-4 rounded-full border-4 border-white z-10 ${
                    milestone.completed 
                      ? 'bg-green-500' 
                      : 'bg-slate-300'
                  }`} />
                  <div className="ml-8 flex-1">
                    <Card className="border-0 shadow-md hover:shadow-lg transition-all duration-300">
                      <CardContent className="p-6">
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="text-sm font-medium text-slate-500 mb-1">
                              {milestone.date}
                            </p>
                            <h4 className="text-lg font-semibold text-slate-900">
                              {milestone.title}
                            </h4>
                          </div>
                          {milestone.completed && (
                            <CheckCircle className="w-6 h-6 text-green-500" />
                          )}
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Get Involved */}
      <section className="py-20 lg:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              Want to influence our roadmap?
            </h2>
            <p className="text-xl text-slate-600 mb-12 max-w-2xl mx-auto">
              Join our design partner program and get early access while helping shape the future of MacMesh.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <Card className="border-0 shadow-lg">
                <CardContent className="p-6 text-center">
                  <Users className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                  <h4 className="font-semibold text-slate-900 mb-2">Design Partner</h4>
                  <p className="text-slate-600 text-sm">Shape features and priorities</p>
                </CardContent>
              </Card>
              <Card className="border-0 shadow-lg">
                <CardContent className="p-6 text-center">
                  <Rocket className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                  <h4 className="font-semibold text-slate-900 mb-2">Early Access</h4>
                  <p className="text-slate-600 text-sm">First to try new features</p>
                </CardContent>
              </Card>
              <Card className="border-0 shadow-lg">
                <CardContent className="p-6 text-center">
                  <Target className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                  <h4 className="font-semibold text-slate-900 mb-2">Direct Input</h4>
                  <p className="text-slate-600 text-sm">Weekly feedback sessions</p>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        </div>
      </section>

      <CTABand />

      {/* Copyright Footer */}
      <footer className="py-8 bg-slate-50 text-center text-slate-600 text-sm">
        <p>&copy; {new Date().getFullYear()} MacMesh. All rights reserved.</p>
      </footer>
    </div>
  );
}
