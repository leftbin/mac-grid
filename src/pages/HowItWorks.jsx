
import React from "react";
import { Download, Cpu, Cloud, Shield, Gauge, Zap, ArrowRight, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import CTABand from "../components/shared/CTABand";

const steps = [
  {
    number: "01",
    title: "Install the Agent",
    description: "Lightweight macOS agent respects system settings and user preferences. Opt-in participation with granular controls.",
    icon: Download,
    color: "from-blue-500 to-cyan-500",
    features: ["Apple Silicon optimized", "Respects quiet hours", "Battery-aware scheduling", "Zero developer impact"]
  },
  {
    number: "02",
    title: "Join the Cluster",
    description: "MacBooks become labeled Kubernetes nodes with policies and constraints. Enterprise-grade security throughout.",
    icon: Cpu,
    color: "from-purple-500 to-pink-500",
    features: ["Kubernetes-native", "Policy-driven placement", "Encrypted communication", "Audit logging"]
  },
  {
    number: "03",
    title: "Automatic Fallback",
    description: "When local capacity isn't available, workloads seamlessly migrate to your cloud infrastructure.",
    icon: Cloud,
    color: "from-green-500 to-emerald-500",
    features: ["EKS/GKE integration", "Zero downtime failover", "Cost optimization", "Reliability first"]
  }
];

const workloads = [
  { name: "CI/CD Pipelines", suitable: true },
  { name: "Test Suites", suitable: true },
  { name: "Preview Environments", suitable: true },
  { name: "Data Processing", suitable: true },
  { name: "ML Training", suitable: false },
  { name: "Production Services", suitable: false },
];

const architecture = [
  {
    component: "Control Plane",
    description: "Centralized orchestration, policy management, and monitoring dashboard"
  },
  {
    component: "Device Agent",
    description: "Lightweight client that manages workload execution and reports capacity"
  },
  {
    component: "Cloud Connector", 
    description: "Seamless integration with EKS, GKE, AKS, and other Kubernetes platforms"
  }
];

export default function HowItWorksPage() {
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
            <Badge className="mb-8 bg-blue-100 text-blue-700 border-blue-200">
              <Gauge className="w-4 h-4 mr-2" />
              Technical Deep Dive
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-8">
              How MacMesh
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
                orchestrates compute
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 max-w-4xl mx-auto">
              Built on Kubernetes primitives you already know and trust. 
              Enterprise-grade security with developer-first experience.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Three Steps Process */}
      <section className="py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              Simple 3-step process
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              From zero to workstation orchestration in minutes, not hours.
            </p>
          </div>

          <div className="space-y-20">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                }`}
              >
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <div className="flex items-center mb-6">
                    <div className={`w-16 h-16 bg-gradient-to-br ${step.color} rounded-xl flex items-center justify-center shadow-lg mr-6`}>
                      <step.icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="text-4xl font-bold text-slate-200">{step.number}</div>
                  </div>
                  <h3 className="text-3xl font-bold text-slate-900 mb-4">{step.title}</h3>
                  <p className="text-xl text-slate-600 mb-8">{step.description}</p>
                  
                  <div className="grid grid-cols-2 gap-4">
                    {step.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                        <span className="text-slate-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                  <Card className="border-0 shadow-xl bg-gradient-to-br from-slate-50 to-white">
                    <CardContent className="p-12">
                      <div className="aspect-square bg-gradient-to-br from-slate-100 to-slate-200 rounded-2xl flex items-center justify-center">
                        <div className={`w-24 h-24 bg-gradient-to-br ${step.color} rounded-2xl flex items-center justify-center shadow-2xl`}>
                          <step.icon className="w-12 h-12 text-white" />
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Architecture Overview */}
      <section className="py-20 lg:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              System Architecture
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Enterprise-grade architecture designed for security, scalability, and reliability.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {architecture.map((item, index) => (
              <motion.div
                key={item.component}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="text-xl font-bold text-slate-900">
                      {item.component}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-600">{item.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Suitable Workloads */}
      <section className="py-20 lg:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              What workloads work best?
            </h2>
            <p className="text-xl text-slate-600">
              MacMesh excels with stateless, fault-tolerant workloads that benefit from local execution speed.
            </p>
          </div>

          <Card className="border-0 shadow-xl">
            <CardContent className="p-8">
              <div className="space-y-4">
                {workloads.map((workload, index) => (
                  <motion.div
                    key={workload.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center justify-between p-4 rounded-lg border border-slate-200"
                  >
                    <span className="font-medium text-slate-900">{workload.name}</span>
                    <div className="flex items-center">
                      {workload.suitable ? (
                        <>
                          <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                          <Badge className="bg-green-100 text-green-700">Excellent fit</Badge>
                        </>
                      ) : (
                        <>
                          <div className="w-5 h-5 border-2 border-slate-300 rounded-full mr-2" />
                          <Badge variant="outline" className="text-slate-500">Use cloud</Badge>
                        </>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Security & Compliance */}
      <section className="py-20 lg:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center mb-6">
                <Shield className="w-12 h-12 text-blue-600 mr-4" />
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
                  Enterprise Security
                </h2>
              </div>
              <p className="text-xl text-slate-600 mb-8">
                Built with security as a first-class citizen. Every component designed for enterprise compliance and audit requirements.
              </p>
              
              <div className="space-y-6">
                {[
                  "Container isolation with least-privilege access",
                  "End-to-end encryption for all communications", 
                  "Comprehensive audit logging and monitoring",
                  "Policy-driven workload placement controls",
                  "Integration with enterprise identity systems"
                ].map((feature, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700 text-lg">{feature}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="border-0 shadow-xl bg-gradient-to-br from-blue-50 to-cyan-50">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-slate-900">
                    Policy Controls
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="bg-white rounded-lg p-4">
                    <h4 className="font-semibold text-slate-900 mb-2">Time-based Scheduling</h4>
                    <p className="text-slate-600 text-sm">Respect work hours, meetings, and focus time</p>
                  </div>
                  <div className="bg-white rounded-lg p-4">
                    <h4 className="font-semibold text-slate-900 mb-2">Resource Limits</h4>
                    <p className="text-slate-600 text-sm">CPU, memory, and network constraints</p>
                  </div>
                  <div className="bg-white rounded-lg p-4">
                    <h4 className="font-semibold text-slate-900 mb-2">Workload Types</h4>
                    <p className="text-slate-600 text-sm">Define which jobs can run on devices</p>
                  </div>
                  <div className="bg-white rounded-lg p-4">
                    <h4 className="font-semibold text-slate-900 mb-2">User Consent</h4>
                    <p className="text-slate-600 text-sm">Opt-in participation with granular controls</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      <CTABand />
    </div>
  );
}
