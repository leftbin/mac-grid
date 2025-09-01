
import React from "react";
import { FileText, Calendar, ArrowRight, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import CTABand from "../components/shared/CTABand";

const articles = [
  {
    title: "The Hidden Cost of Idle Developer Machines",
    excerpt: "Every M2 MacBook has more compute power than most production servers. Here's how to unlock it.",
    date: "March 15, 2024",
    category: "FinOps",
    readTime: "5 min read",
    featured: true
  },
  {
    title: "Kubernetes at the Edge: Workstation Orchestration",
    excerpt: "Technical deep dive into how ACME DevGrid extends Kubernetes orchestration to developer laptops.",
    date: "March 8, 2024", 
    category: "Technical",
    readTime: "12 min read"
  },
  {
    title: "CI/CD Queue Times: The Silent Productivity Killer",
    excerpt: "Analysis of how queue wait times impact developer velocity and what local-first execution means.",
    date: "February 28, 2024",
    category: "Developer Experience", 
    readTime: "8 min read"
  },
  {
    title: "Security Considerations for Workstation Compute",
    excerpt: "Enterprise security framework for running workloads on developer devices safely.",
    date: "February 22, 2024",
    category: "Security",
    readTime: "10 min read"
  }
];

const updates = [
  {
    title: "Alpha Release 0.3: Multi-Cloud Failover",
    date: "March 20, 2024",
    type: "Product Update",
    summary: "Added seamless failover to EKS, GKE, and AKS when local capacity isn't available."
  },
  {
    title: "Design Partner Spotlight: TechCorp's Results", 
    date: "March 12, 2024",
    type: "Case Study",
    summary: "How TechCorp reduced CI/CD costs by 70% while improving pipeline speed."
  },
  {
    title: "Seed Funding: $8M to Scale Platform Development",
    date: "March 5, 2024", 
    type: "Company News",
    summary: "Led by Andreessen Horowitz to accelerate enterprise features and team growth."
  }
];

const resources = [
  {
    title: "Technical Architecture Guide",
    description: "Deep dive into our Kubernetes-native orchestration system",
    type: "Whitepaper",
    pages: "24 pages"
  },
  {
    title: "ROI Calculator Spreadsheet", 
    description: "Model your potential cost savings with workstation compute",
    type: "Tool",
    pages: "Excel/Sheets"
  },
  {
    title: "Security & Compliance Checklist",
    description: "Enterprise security controls and audit requirements",
    type: "Checklist", 
    pages: "8 pages"
  }
];

export default function ResourcesPage() {
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
              <FileText className="w-4 h-4 mr-2" />
              Resources & Updates
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-8">
              Stay up to date with
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
                MacMesh
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 max-w-4xl mx-auto">
              Technical insights, product updates, and thought leadership on the future of workstation orchestration.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Latest Updates */}
      <section className="py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
              Latest Updates
            </h2>
            <Badge className="bg-green-100 text-green-700 border-green-200">
              <Calendar className="w-4 h-4 mr-2" />
              Updated Weekly
            </Badge>
          </div>

          <div className="space-y-6">
            {updates.map((update, index) => (
              <motion.div
                key={update.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer">
                  <CardContent className="p-8">
                    <div className="flex flex-col md:flex-row justify-between items-start mb-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-4 mb-3">
                          <Badge variant="outline" className="text-xs">
                            {update.type}
                          </Badge>
                          <span className="text-slate-500 text-sm">{update.date}</span>
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 mb-3">{update.title}</h3>
                        <p className="text-slate-600">{update.summary}</p>
                      </div>
                      <ArrowRight className="w-5 h-5 text-slate-400 mt-2 md:mt-0 flex-shrink-0" />
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog/Articles */}
      <section className="py-20 lg:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              Insights & Thought Leadership
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Deep dives into workstation orchestration, FinOps, and the future of distributed compute.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {articles.map((article, index) => (
              <motion.div
                key={article.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className={`h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer ${
                  article.featured ? 'ring-2 ring-blue-500 ring-opacity-20' : ''
                }`}>
                  <CardContent className="p-8">
                    <div className="flex items-center justify-between mb-4">
                      <Badge 
                        variant="outline" 
                        className={article.featured ? 'bg-blue-50 text-blue-700 border-blue-200' : ''}
                      >
                        {article.category}
                      </Badge>
                      {article.featured && (
                        <Badge className="bg-blue-500 text-white">
                          Featured
                        </Badge>
                      )}
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-3 leading-tight">
                      {article.title}
                    </h3>
                    <p className="text-slate-600 mb-6 leading-relaxed">
                      {article.excerpt}
                    </p>
                    <div className="flex items-center justify-between text-sm text-slate-500">
                      <span>{article.date}</span>
                      <span>{article.readTime}</span>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Resources Downloads */}
      <section className="py-20 lg:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              Technical Resources
            </h2>
            <p className="text-xl text-slate-600">
              Whitepapers, tools, and guides to help you understand and evaluate workstation orchestration.
            </p>
          </div>

          <div className="space-y-6">
            {resources.map((resource, index) => (
              <motion.div
                key={resource.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer">
                  <CardContent className="p-8">
                    <div className="flex items-center justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-4 mb-3">
                          <Badge variant="outline">{resource.type}</Badge>
                          <span className="text-slate-500 text-sm">{resource.pages}</span>
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 mb-2">{resource.title}</h3>
                        <p className="text-slate-600">{resource.description}</p>
                      </div>
                      <Button variant="outline" className="ml-6">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Download
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTABand />
    </div>
  );
}
