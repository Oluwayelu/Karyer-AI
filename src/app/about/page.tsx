"use client";

import { motion } from "framer-motion";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function AboutPage() {
  return (
    <main className="max-w-5xl mx-auto px-6 py-20">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold text-center mb-4"
      >
        About Karyer AI
      </motion.h1>
      <Separator className="my-6" />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="space-y-6 text-lg text-muted-foreground"
      >
        <p>
          Karyer AI is your personal career coach built with state-of-the-art AI
          technology to support students, professionals, and job seekers across
          all stages of their career journey.
        </p>

        <p>
          From resume building to interview prep, we provide personalized
          guidance, actionable insights, and real-time mentorship powered by
          Gemini AI. Whether you&apos;re exploring new career paths, upgrading
          your skillset, or switching industries, Karyer AI is designed to walk
          with you every step of the way.
        </p>

        <p>
          Our mission is to democratize access to high-quality career coaching
          and empower users to confidently pursue their goals with clarity and
          purpose.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-10 mt-12">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="rounded-lg overflow-hidden shadow-lg"
        >
          <Image
            src="https://images.unsplash.com/photo-1581093588401-16f88f9bff5b"
            alt="Team brainstorming"
            width={600}
            height={400}
            className="w-full object-cover"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="rounded-lg overflow-hidden shadow-lg"
        >
          <Image
            src="https://images.unsplash.com/photo-1603570423445-d14ca3da0cf8"
            alt="AI technology"
            width={600}
            height={400}
            className="w-full object-cover"
          />
        </motion.div>
      </div>

      <div className="text-center mt-16">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-lg"
        >
          Want to know more or collaborate with us?
        </motion.p>
        <Button className="mt-4">Contact Us</Button>
      </div>
    </main>
  );
}
