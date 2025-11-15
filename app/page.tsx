"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Home() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="px-4 py-20 md:py-32 max-w-7xl mx-auto">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
            How developers build
            <br />
            <span className="text-posthog">successful products</span>
          </h1>
          <p className="text-xl md:text-2xl text-darkblue/80 mb-10 max-w-3xl mx-auto">
            All the tools you need to build better products. Analytics, feature flags,
            session recording, A/B testing, and more. Built for engineers.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="bg-posthog hover:bg-yellow-500 text-darkblue font-bold py-4 px-8 rounded-md text-lg transition-all transform hover:scale-105 shadow-lg">
              Get started - free
            </button>
            <button className="bg-darkblue hover:bg-darkblue/90 text-cream font-bold py-4 px-8 rounded-md text-lg transition-all transform hover:scale-105 border-2 border-darkblue">
              Book a demo
            </button>
          </div>
          <p className="text-sm text-darkblue/60 mt-6">
            No credit card required • Generous free tier • Cancel anytime
          </p>
        </motion.div>
      </section>

      {/* Customer Logos */}
      <section className="py-16 border-y border-darkblue/10">
        <div className="max-w-7xl mx-auto px-4">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center text-sm uppercase tracking-wider text-darkblue/60 mb-8"
          >
            Trusted by teams at
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center"
          >
            {["Airbnb", "Spotify", "GitHub", "Netflix", "Stripe", "Shopify"].map(
              (company) => (
                <div
                  key={company}
                  className="flex items-center justify-center grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all"
                >
                  <div className="text-2xl font-bold text-darkblue">{company}</div>
                </div>
              )
            )}
          </motion.div>
        </div>
      </section>

      {/* Feature Section 1 - Image Left */}
      <section className="py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="order-2 md:order-1"
            >
              <div className="bg-darkblue/5 rounded-lg p-8 aspect-square flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl mb-4">📊</div>
                  <p className="text-darkblue/60">Product Analytics Dashboard</p>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="order-1 md:order-2"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Product analytics that actually make sense
              </h2>
              <p className="text-xl text-darkblue/80 mb-6">
                Track every click, conversion, and user journey. No SQL required.
                Autocapture means you never miss a data point again.
              </p>
              <ul className="space-y-3">
                {[
                  "Autocapture events automatically",
                  "Funnel and retention analysis",
                  "User paths and lifecycle tracking",
                  "Custom dashboards that don't suck",
                ].map((feature) => (
                  <li key={feature} className="flex items-start">
                    <span className="text-posthog mr-2 text-xl">✓</span>
                    <span className="text-lg">{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Feature Section 2 - Image Right */}
      <section className="py-20 md:py-32 bg-darkblue/5">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Feature flags for the win
              </h2>
              <p className="text-xl text-darkblue/80 mb-6">
                Roll out features safely. Test in production. Kill switches for when
                things go wrong. Because they will.
              </p>
              <ul className="space-y-3">
                {[
                  "Deploy without fear",
                  "A/B test everything",
                  "Gradual rollouts and kill switches",
                  "Target by user properties",
                ].map((feature) => (
                  <li key={feature} className="flex items-start">
                    <span className="text-posthog mr-2 text-xl">✓</span>
                    <span className="text-lg">{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="bg-cream rounded-lg p-8 aspect-square flex items-center justify-center border-2 border-darkblue/10">
                <div className="text-center">
                  <div className="text-6xl mb-4">🚀</div>
                  <p className="text-darkblue/60">Feature Flags Interface</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Feature Section 3 - Image Left */}
      <section className="py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="order-2 md:order-1"
            >
              <div className="bg-darkblue/5 rounded-lg p-8 aspect-square flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl mb-4">🎬</div>
                  <p className="text-darkblue/60">Session Recording Player</p>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="order-1 md:order-2"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Watch users break your UI
              </h2>
              <p className="text-xl text-darkblue/80 mb-6">
                Session recordings show you exactly what went wrong. No more &ldquo;works on
                my machine&rdquo; excuses.
              </p>
              <ul className="space-y-3">
                {[
                  "Privacy-friendly by default",
                  "Console logs included",
                  "Network requests tracked",
                  "Skip the boring parts",
                ].map((feature) => (
                  <li key={feature} className="flex items-start">
                    <span className="text-posthog mr-2 text-xl">✓</span>
                    <span className="text-lg">{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 md:py-32 bg-darkblue/5">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              Pay for what you use
            </h2>
            <p className="text-xl text-darkblue/80 max-w-2xl mx-auto">
              No seat-based pricing nonsense. You only pay for the events you track.
              Start free, scale forever.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Free",
                price: "$0",
                description: "Perfect for side projects",
                features: [
                  "1 million events/mo",
                  "1 year data retention",
                  "Unlimited team members",
                  "Community support",
                ],
                cta: "Start free",
                highlighted: false,
              },
              {
                name: "Growth",
                price: "Usage-based",
                description: "For growing products",
                features: [
                  "Pay per event",
                  "Unlimited data retention",
                  "Advanced features",
                  "Priority support",
                ],
                cta: "Get started",
                highlighted: true,
              },
              {
                name: "Enterprise",
                price: "Custom",
                description: "For large teams",
                features: [
                  "Volume discounts",
                  "SSO & SAML",
                  "SLA & dedicated support",
                  "Custom contracts",
                ],
                cta: "Talk to sales",
                highlighted: false,
              },
            ].map((plan) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className={`bg-cream rounded-lg p-8 ${
                  plan.highlighted
                    ? "ring-4 ring-posthog transform scale-105"
                    : "border-2 border-darkblue/10"
                }`}
              >
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <div className="text-4xl font-bold mb-2">{plan.price}</div>
                <p className="text-darkblue/70 mb-6">{plan.description}</p>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start">
                      <span className="text-posthog mr-2">✓</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <button
                  className={`w-full py-3 px-6 rounded-md font-bold transition-all transform hover:scale-105 ${
                    plan.highlighted
                      ? "bg-posthog hover:bg-yellow-500 text-darkblue"
                      : "bg-darkblue hover:bg-darkblue/90 text-cream"
                  }`}
                >
                  {plan.cta}
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              Ready to ship better products?
            </h2>
            <p className="text-xl text-darkblue/80 mb-10">
              Join thousands of developers who actually enjoy their analytics tool.
            </p>
            <button className="bg-posthog hover:bg-yellow-500 text-darkblue font-bold py-4 px-8 rounded-md text-lg transition-all transform hover:scale-105 shadow-lg">
              Get started for free
            </button>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-darkblue/10 py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h4 className="font-bold mb-4">Product</h4>
              <ul className="space-y-2 text-darkblue/70">
                <li>Analytics</li>
                <li>Feature Flags</li>
                <li>Session Recording</li>
                <li>A/B Testing</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Company</h4>
              <ul className="space-y-2 text-darkblue/70">
                <li>About</li>
                <li>Blog</li>
                <li>Careers</li>
                <li>Contact</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Resources</h4>
              <ul className="space-y-2 text-darkblue/70">
                <li>Documentation</li>
                <li>API Reference</li>
                <li>Tutorials</li>
                <li>Community</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Legal</h4>
              <ul className="space-y-2 text-darkblue/70">
                <li>Privacy</li>
                <li>Terms</li>
                <li>Security</li>
                <li>GDPR</li>
              </ul>
            </div>
          </div>
          <div className="text-center text-darkblue/60 text-sm">
            © 2024 PostHog Clone. Built with Next.js, Tailwind, and Framer Motion.
          </div>
        </div>
      </footer>
    </main>
  );
}
