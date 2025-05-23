"use client";
import { Button } from "@/components/ui/button";
import { motion } from "motion/react";

const CtaSection = () => {
  return (
    <section className="py-20 px-4 bg-primary text-white text-center">
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="text-3xl font-bold mb-4"
      >
        Ready to Take Charge of Your Career?
      </motion.h2>
      <p className="mb-6 text-lg">
        Join thousands using Karyer AI to grow smarter.
      </p>
      <Button variant="secondary">Get Started — It’s Free</Button>
    </section>
  );
};

export default CtaSection;
