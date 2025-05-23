"use client";
import { motion } from "motion/react";

const Features = () => {
  return (
    <section className="py-20 px-4">
      <h2 className="text-3xl font-semibold text-center mb-10">
        Why Choose Karyer AI?
      </h2>
      <div className="grid md:grid-cols-3 gap-8">
        {[
          {
            title: "AI Career Coach",
            desc: "Smart coaching powered by Gemini tailored to your goals.",
          },
          {
            title: "Resume Review",
            desc: "AI-powered feedback on your resume and LinkedIn.",
          },
          {
            title: "Personal Roadmaps",
            desc: "Clear career plans aligned with market trends.",
          },
        ].map(({ title, desc }, i) => (
          <motion.div
            key={i}
            className="bg-card p-6 rounded-xl shadow"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <h3 className="text-xl font-semibold mb-2">{title}</h3>
            <p className="text-muted-foreground">{desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Features;
