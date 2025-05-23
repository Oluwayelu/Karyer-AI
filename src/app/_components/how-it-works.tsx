"use client";
import { User, Briefcase, Rocket } from "lucide-react";
import { motion } from "motion/react";

const HowItWorks = () => {
  return (
    <section className="py-20 px-4">
      <h2 className="text-3xl font-semibold text-center mb-10">How It Works</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {[
          {
            title: "Create Profile",
            desc: "Tell us your goals and upload your resume.",
            icon: User,
          },
          {
            title: "Chat with Coach",
            desc: "Talk with our AI-powered career coach.",
            icon: Rocket,
          },
          {
            title: "Track & Grow",
            desc: "Get weekly career insights and job leads.",
            icon: Briefcase,
          },
        ].map(({ title, desc, icon: Icon }, i) => (
          <motion.div
            key={i}
            className="bg-card p-6 rounded-xl shadow"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <Icon className="text-primary w-8 h-8 mb-4" />
            <h3 className="text-xl font-semibold mb-2">{title}</h3>
            <p className="text-muted-foreground">{desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;
