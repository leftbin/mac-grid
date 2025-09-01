import React from "react";
import { TrendingDown, Zap, Shield, Cpu } from "lucide-react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

const valueProps = [
  {
    icon: TrendingDown,
    title: "60-80% Cost Reduction",
    description: "Transform idle MacBook compute into production infrastructure. Reduce cloud spend while maintaining reliability.",
    color: "from-green-500 to-emerald-500"
  },
  {
    icon: Zap,
    title: "Lightning-Fast Pipelines",
    description: "Local-first CI/CD and preview environments. No more waiting in queues—instant feedback loops.",
    color: "from-blue-500 to-cyan-500"
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "Containerized isolation, encrypted transit, audit logs. Policy-driven workload placement you can trust.",
    color: "from-purple-500 to-pink-500"
  },
  {
    icon: Cpu,
    title: "Automatic Fallback",
    description: "Kubernetes orchestration with seamless cloud failover. Never sacrifice reliability for cost savings.",
    color: "from-orange-500 to-red-500"
  }
];

export default function ValueProps() {
  return (
    <section className="py-20 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
              Unlock the compute
              <span className="block text-blue-600">sitting on every desk</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Every developer laptop packs serious compute power that sits idle most of the day. 
              We're changing that with intelligent workstation orchestration.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {valueProps.map((prop, index) => (
            <motion.div
              key={prop.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300 group">
                <CardContent className="p-8 text-center">
                  <div className={`w-16 h-16 mx-auto mb-6 bg-gradient-to-br ${prop.color} rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <prop.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-4">{prop.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{prop.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}