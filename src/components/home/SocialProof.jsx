import React from "react";
import { Building2, Quote } from "lucide-react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const testimonials = [
  {
    quote: "This could revolutionize how we think about compute costs. Our M2 MacBooks have more power than half our production instances.",
    author: "Sarah Chen",
    role: "VP Engineering",
    company: "TechCorp",
    size: "500+ engineers"
  },
  {
    quote: "Finally, a practical way to reduce our $200K+ monthly cloud bill without sacrificing developer velocity.",
    author: "Marcus Rodriguez", 
    role: "FinOps Lead",
    company: "ScaleUp Inc",
    size: "200+ engineers"
  },
  {
    quote: "Local-first preview environments would eliminate so many CI queue issues. This is exactly what we need.",
    author: "Alex Kim",
    role: "Platform Lead", 
    company: "InnovateNow",
    size: "150+ engineers"
  }
];

const logos = [
  "Private Beta Partner",
  "Early Design Partner", 
  "Stealth Participant",
  "Alpha Tester",
  "Advisory Customer"
];

export default function SocialProof() {
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
            <Badge className="mb-6 bg-purple-100 text-purple-700 border-purple-200">
              Early signals from the market
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              Platform teams are excited
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              We're working closely with forward-thinking engineering leaders to validate and refine our approach.
            </p>
          </motion.div>
        </div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.author}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full border-0 shadow-lg">
                <CardContent className="p-8">
                  <Quote className="w-8 h-8 text-blue-500 mb-6" />
                  <blockquote className="text-slate-700 mb-6 italic leading-relaxed">
                    "{testimonial.quote}"
                  </blockquote>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gradient-to-br from-slate-400 to-slate-500 rounded-full flex items-center justify-center mr-4">
                      <span className="text-white font-semibold">
                        {testimonial.author.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <div>
                      <div className="font-semibold text-slate-900">{testimonial.author}</div>
                      <div className="text-slate-600 text-sm">{testimonial.role}</div>
                      <div className="text-slate-500 text-sm">{testimonial.size}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Partner Logos Placeholder */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-slate-500 mb-8">Validating with forward-thinking teams at:</p>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            {logos.map((logo, index) => (
              <div key={index} className="flex items-center gap-2 px-4 py-2 bg-slate-100 rounded-lg">
                <Building2 className="w-4 h-4 text-slate-400" />
                <span className="text-sm text-slate-600 font-medium">{logo}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}