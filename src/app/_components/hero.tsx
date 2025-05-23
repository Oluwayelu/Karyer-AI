"use client";
import { Button } from "@/components/ui/button";
import { motion } from "motion/react";

const HeroSection = () => {
  return (
    <section className="py-24 text-center px-4">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-5xl font-bold max-w-3xl mx-auto"
      >
        Unlock Your Career Potential with{" "}
        <span className="text-sky-400">Karyer AI</span>
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="mt-4 text-lg max-w-xl mx-auto text-muted-text"
      >
        Personalized AI coaching for students, professionals, and job seekers.
        Plan smarter. Grow faster.
      </motion.p>
      <div className="mt-6 flex justify-center gap-4">
        <Button>Get Started</Button>
        <Button variant="outline">See Demo</Button>
      </div>
    </section>
  );
};

export default HeroSection;
