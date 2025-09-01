
import React from "react";
import { ArrowRight, Download, Cpu, Cloud } from "lucide-react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const steps = [
  {
    number: "01",
    title: "Install Agent",
    description: "Lightweight agent runs on macOS with Apple Silicon optimization. Respects power settings and quiet hours.",
    icon: Download,
    color: "from-blue-500 to-cyan-500"
  },
  {
    number: "02", 
    title: "Join Cluster",
    description: "MacBooks become tainted Kubernetes nodes with labels and policies. Automatic discovery and scheduling.",
    icon: Cpu,
    color: "from-purple-500 to-pink-500"
  },
  {
    number: "03",
    title: "Smart Fallback",
    description: "When local capacity isn't enough, workloads automatically migrate to EKS, GKE, or your cloud of choice.",
    icon: Cloud,
    color: "from-green-500 to-emerald-500"
  }
];

export default function HowItWorks() {
  return (
    <section className="py-20 lg:py-32 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Badge className="mb-6 bg-blue-100 text-blue-700 border-blue-200">
              Simple 3-step process
            </Badge>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
              How MacMesh works
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              From installation to production workloads in minutes. 
              Built on Kubernetes primitives you already know and trust.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative"
            >
              <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300 group">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <div className={`w-12 h-12 bg-gradient-to-br ${step.color} rounded-lg flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300`}>
                      <step.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="ml-4">
                      <div className="text-2xl font-bold text-slate-300">{step.number}</div>
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">{step.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{step.description}</p>
                </CardContent>
              </Card>

              {/* Arrow connector for desktop */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-6 transform -translate-y-1/2">
                  <ArrowRight className="w-8 h-8 text-slate-300" />
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
