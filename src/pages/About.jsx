
import React from "react";
import { Users, Target, Lightbulb, Award } from "lucide-react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import CTABand from "../components/shared/CTABand";


const advisors = [
  "Platform Engineering Leaders",
  "CNCF Maintainers",
  "Cloud Provider Architects", 
  "FinOps Practitioners",
  "Security & Compliance Experts"
];

const values = [
  {
    icon: Target,
    title: "Developer First",
    description: "Every decision starts with developer experience. If it slows down or interrupts development, we don't ship it."
  },
  {
    icon: Lightbulb,
    title: "Radical Transparency",
    description: "Open roadmap, honest communication, and clear pricing. No surprises, no hidden agendas."
  },
  {
    icon: Award,
    title: "Enterprise Grade",
    description: "Built for production from day one. Security, reliability, and compliance aren't afterthoughts."
  }
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Hero Section */}
      <section className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Badge className="mb-8 bg-blue-100 text-blue-700 border-blue-200">
                <Users className="w-4 h-4 mr-2" />
                About MacMesh
              </Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-8">
                Reimagining
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
                  infrastructure economics
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-slate-600 mb-8 leading-relaxed">
                We believe every organization has massive untapped compute resources sitting on developers' desks. 
                MacMesh makes that power accessible, reliable, and cost-effective.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Badge variant="outline" className="px-4 py-2 text-base">
                  🚀 Bootstrapped
                </Badge>
                <Badge variant="outline" className="px-4 py-2 text-base">
                  👥 12 design partners
                </Badge>
                <Badge variant="outline" className="px-4 py-2 text-base">
                  💻 Apple Silicon first
                </Badge>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Card className="border-0 shadow-2xl bg-gradient-to-br from-blue-50 to-cyan-50">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-slate-900 mb-6">The Problem</h3>
                  <div className="space-y-4 mb-8">
                    <div className="flex items-start">
                      <div className="w-3 h-3 bg-red-500 rounded-full mt-2 mr-4 flex-shrink-0" />
                      <p className="text-slate-700">$200B+ spent annually on cloud compute</p>
                    </div>
                    <div className="flex items-start">
                      <div className="w-3 h-3 bg-red-500 rounded-full mt-2 mr-4 flex-shrink-0" />
                      <p className="text-slate-700">Developer laptops idle 80% of the time</p>
                    </div>
                    <div className="flex items-start">
                      <div className="w-3 h-3 bg-red-500 rounded-full mt-2 mr-4 flex-shrink-0" />
                      <p className="text-slate-700">CI/CD queues slow down development</p>
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-slate-900 mb-6">Our Solution</h3>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <div className="w-3 h-3 bg-green-500 rounded-full mt-2 mr-4 flex-shrink-0" />
                      <p className="text-slate-700">Turn laptops into Kubernetes nodes</p>
                    </div>
                    <div className="flex items-start">
                      <div className="w-3 h-3 bg-green-500 rounded-full mt-2 mr-4 flex-shrink-0" />
                      <p className="text-slate-700">Automatic cloud fallback for reliability</p>
                    </div>
                    <div className="flex items-start">
                      <div className="w-3 h-3 bg-green-500 rounded-full mt-2 mr-4 flex-shrink-0" />
                      <p className="text-slate-700">60-80% cost reduction potential</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              Our Values
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              These principles guide every product decision and customer interaction.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300 text-center">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mx-auto mb-6">
                      <value.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-4">{value.title}</h3>
                    <p className="text-slate-600 leading-relaxed">{value.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      

      {/* Advisors */}
      <section className="py-20 lg:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              Advised by Industry Leaders
            </h2>
            <p className="text-xl text-slate-600 mb-12">
              We're bootstrapped and guided by seasoned industry leaders who advise our strategy and product direction.
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
              {advisors.map((advisor, index) => (
                <motion.div
                  key={advisor}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="p-4 bg-slate-50 rounded-lg"
                >
                  <p className="text-sm font-medium text-slate-700">{advisor}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <CTABand />
    </div>
  );
}
