import React from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { ArrowRight, Rocket } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function CTABand() {
  return (
    <section className="py-20 lg:py-24 bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="mb-8">
            <Rocket className="w-16 h-16 mx-auto mb-6 text-blue-400" />
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Ready to transform your
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
                infrastructure costs?
              </span>
            </h2>
            <p className="text-xl text-slate-300 mb-12 max-w-2xl mx-auto">
              Join forward-thinking platform teams who are reimagining compute orchestration. 
              Get early access and help shape the future.
            </p>
          </div>

          <Link to={createPageUrl("Waitlist")}>
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white px-12 py-6 text-xl font-semibold shadow-xl hover:shadow-2xl transition-all duration-300"
              data-analytics="cta_waitlist_click"
            >
              Join the waitlist
              <ArrowRight className="ml-3 w-6 h-6" />
            </Button>
          </Link>
          
          <p className="text-slate-400 text-sm mt-6">
            No spam. We review signups weekly and invite in waves.
          </p>
        </motion.div>
      </div>
    </section>
  );
}